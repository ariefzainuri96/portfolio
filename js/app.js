import { translations, projects } from './data.js';

// --- STATE MANAGEMENT ---
let currentLang = 'en';
let currentFilter = 'all';

// --- INITIALIZATION ---
function init() {
    // A. Dark Mode Init
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // B. Language Init (Auto-detect)
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.toLowerCase().startsWith('id')) {
        currentLang = 'id';
    }

    // C. UI Updates
    updateLanguageUI();
    updateSwitchUI();
    renderProjects();
    setupEventListeners();
}

// --- THEME LOGIC ---
function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
    updateSwitchUI();
}

// --- LANGUAGE LOGIC ---
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'id' : 'en';
    updateLanguageUI();
    updateSwitchUI();
    renderProjects();
}

// --- UI HELPERS ---
function updateSwitchUI() {
    const isDark = document.documentElement.classList.contains('dark');
    const isId = currentLang === 'id';

    // Theme Thumbs
    const themeTrans = isDark ? 'translate-x-7' : 'translate-x-0';
    const themeThumbClasses = `absolute top-1 left-1 w-5 h-5 bg-white dark:bg-slate-800 rounded-full shadow-md transform transition-transform duration-300 z-10 flex items-center justify-center ${themeTrans}`;

    const themeThumbDesk = document.getElementById('theme-thumb-desktop');
    const themeThumbMob = document.getElementById('theme-thumb-mobile');

    if (themeThumbDesk) themeThumbDesk.className = themeThumbClasses;
    if (themeThumbMob) themeThumbMob.className = themeThumbClasses.replace('flex items-center justify-center ', ''); // Mobile thumb logic was slightly different in original, keeping consistent

    // Lang Thumbs
    const langTrans = isId ? 'translate-x-7' : 'translate-x-0';
    const langThumbClasses = `absolute top-1 left-1 w-5 h-5 bg-indigo-600 rounded-full shadow-md transform transition-transform duration-300 ${langTrans}`;

    const langThumbDesk = document.getElementById('lang-thumb-desktop');
    const langThumbMob = document.getElementById('lang-thumb-mobile');

    if (langThumbDesk) langThumbDesk.className = langThumbClasses;
    if (langThumbMob) langThumbMob.className = langThumbClasses;
}

function updateLanguageUI() {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.innerText = translations[currentLang][key];
        }
    });
}

// --- PROJECT RENDERING LOGIC ---
function filterProjects(category) {
    currentFilter = category;

    document.querySelectorAll('.filter-btn').forEach((btn) => {
        // Assume button IDs are 'btn-all', 'btn-mobile', etc.
        const btnCategory = btn.id.replace('btn-', '');
        const isSelected = btnCategory === category;

        if (isSelected) {
            btn.className =
                'filter-btn cursor-pointer px-4 py-1.5 whitespace-nowrap rounded-full text-sm font-medium transition-all bg-indigo-600 text-white shadow-md';
        } else {
            btn.className =
                'filter-btn cursor-pointer whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all';
        }
    });

    // Handle GitHub Graph Visibility
    const githubStats = document.getElementById('github-stats');
    if (category === 'personal') {
        githubStats.classList.remove('hidden');
    } else {
        githubStats.classList.add('hidden');
    }

    renderProjects();
}

function renderProjects() {
    const grid = document.getElementById('project-grid');
    if (!grid) return;

    grid.innerHTML = '';

    // Filter projects but keep original index for modal reference
    const filtered = projects
        .map((p, index) => ({ p, index }))
        .filter(({ p }) =>
            currentFilter === 'all' ||
            p.category.includes(currentFilter)
        );

    filtered.forEach(({ p, index }) => {
        const description = currentLang === 'id' ? p.desc_id : p.desc_en;
        const btnText = translations[currentLang]['btn.playstore'];
        const btnLiveWebText = translations[currentLang]['btn.liveWebText'];
        const btnDetailsText = translations[currentLang]['btn.details'];

        const card = document.createElement('div');
        card.className =
            'bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:shadow-lg dark:hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col fade-in';

        let linkHtml = '';
        if (p.link !== undefined) {
            linkHtml = `
        <div class="px-6 pb-6 mt-auto">
            <div class="flex gap-3">
                <button data-project-index="${index}" class="flex-1 cursor-pointer py-2 text-sm font-semibold text-indigo-600 transition-colors border border-indigo-200 rounded-lg dark:border-slate-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700 btn-view-details">
                    ${btnDetailsText}
                </button>
                <a target="_blank" rel="noopener noreferrer" href="${p.link}" class="flex-1 py-2 text-sm font-semibold text-center text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700">
                    <svg class="inline w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg> ${btnText}
                </a>
            </div>
        </div>`;
        } else if (p.webLink !== undefined) {
            linkHtml = `
                    <div class="px-6 pb-6 mt-auto">
                        <div class="flex gap-3">
                            <button data-project-index="${index}" class="flex-1 cursor-pointer py-2 text-sm font-semibold text-indigo-600 transition-colors border border-indigo-200 rounded-lg dark:border-slate-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700 btn-view-details">
                                ${btnDetailsText}
                            </button>
                            <a target="_blank" rel="noopener noreferrer" href="${p.webLink}" class="flex-1 py-2 text-sm font-semibold text-center text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700">
                                <svg class="inline w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg> ${btnLiveWebText}
                            </a>
                        </div>
                    </div>`;
        } else {
            linkHtml = `
                         <div class="px-6 pb-6 mt-auto">
                            <button data-project-index="${index}" class="w-full cursor-pointer py-2 text-sm font-semibold text-indigo-600 transition-colors border border-indigo-200 rounded-lg dark:border-slate-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700 btn-view-details">
                                ${btnDetailsText}
                            </button>
                        </div>`;
        }

        const tagsHtml = p.tech
            .map(
                (t) =>
                    `<span class="inline-block mb-2 mr-2 text-xs skill-tag">${t}</span>`
            )
            .join('');

        card.innerHTML = `
        <div class="flex-1 p-6">
            <div class="flex items-start justify-between mb-4">
                <div>
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white">${p.title}</h3>
                    <p class="text-sm font-medium text-indigo-600 dark:text-indigo-400">${p.company}</p>
                </div>
                <span class="px-2 py-1 text-xs rounded text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-900">${p.date}</span>
            </div>
            <p class="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
                ${description}
            </p>
            <div class="flex flex-wrap">
                ${tagsHtml}
            </div>
        </div>
        ${linkHtml}
    `;
        grid.appendChild(card);
    });

    // Re-attach listeners for dynamically created buttons
    document.querySelectorAll('.btn-view-details').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.getAttribute('data-project-index'));
            openModal(index);
        });
    });
}

// --- MODAL LOGIC ---
function openModal(index) {
    const p = projects[index];
    if (!p) return;

    const modal = document.getElementById('project-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const panel = document.getElementById('modal-panel');
    const detailsContainer = document.getElementById('modal-details-container');

    // Populate Data
    document.getElementById('modal-title').innerText = p.title;
    document.getElementById('modal-company').innerText = p.company;
    document.getElementById('modal-date').innerText = p.date;

    const description = currentLang === 'id' ? p.desc_id : p.desc_en;
    document.getElementById('modal-desc').innerText = description;

    // Tags
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = p.tech
        .map(
            (t) =>
                `<span class="inline-block mb-2 mr-2 text-xs skill-tag">${t}</span>`
        )
        .join('');

    // Details (Bullet points)
    const modalDetails = document.getElementById('modal-details');
    const details = currentLang === 'id' ? p.details_id : p.details_en;
    if (details && details.length > 0) {
        modalDetails.innerHTML = `
            <ul class="pl-5 space-y-2 list-disc text-slate-600 dark:text-slate-400">
                ${details.map((item) => `<li>${item}</li>`).join('')}
            </ul>
        `;
        detailsContainer.classList.remove('hidden');
    } else {
        detailsContainer.classList.add('hidden');
    }

    const btnCloseText = translations[currentLang]['modal.close'];
    document.getElementById('modal-close-btn').innerText = btnCloseText;

    // Show Modal
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');

    // Animate In
    setTimeout(() => {
        backdrop.classList.remove('opacity-0');
        panel.classList.remove('opacity-0', 'translate-y-4', 'scale-95');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const panel = document.getElementById('modal-panel');

    // Animate Out
    backdrop.classList.add('opacity-0');
    panel.classList.add('opacity-0', 'translate-y-4', 'scale-95');

    // Hide after animation
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }, 300);
}

// --- MOBILE MENU ---
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');

    // Check if menu is currently closed (has max-h-0)
    const isClosed = menu.classList.contains('max-h-0');

    if (isClosed) {
        // OPEN MENU
        menu.classList.remove('max-h-0', 'opacity-0');
        menu.classList.add('max-h-screen', 'opacity-100');

        // ANIMATE ICON
        icon.classList.add('rotate-90');
        icon.innerHTML =
            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
    } else {
        // CLOSE MENU
        menu.classList.remove('max-h-screen', 'opacity-100');
        menu.classList.add('max-h-0', 'opacity-0');

        // ANIMATE ICON
        icon.classList.remove('rotate-90');
        icon.innerHTML =
            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
    }
}

// --- EVENT LISTENERS SETUP ---
function setupEventListeners() {
    // 1. Language Toggle
    const langBtns = document.querySelectorAll('.lang-toggle-btn');
    langBtns.forEach(btn => btn.addEventListener('click', toggleLanguage));

    // 2. Theme Toggle
    const themeBtns = document.querySelectorAll('.theme-toggle-btn');
    themeBtns.forEach(btn => btn.addEventListener('click', toggleTheme));

    // 3. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Mobile Link clicks should close menu
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    // 4. Filter Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.id.replace('btn-', '');
            filterProjects(category);
        });
    });


    // 5. Modal Close Buttons
    const modalBackdrop = document.getElementById('modal-backdrop');
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    // Close X button (assuming it's the absolute positioned one or first one)
    const closeXBtn = document.querySelector('#modal-panel button.absolute');
    if (closeXBtn) closeXBtn.addEventListener('click', closeModal);

    // Bottom Close button
    const closeBottomBtn = document.getElementById('modal-close-btn');
    if (closeBottomBtn) closeBottomBtn.addEventListener('click', closeModal);

    // 6. Keyboard Listeners
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// Start App
document.addEventListener('DOMContentLoaded', init);
