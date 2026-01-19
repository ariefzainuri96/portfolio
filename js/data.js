// --- 1. TRANSLATION DATA ---
export const translations = {
    en: {
        'nav.home': 'Home',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.role': 'Software Engineer',
        'hero.bio':
            'Seeking a position at a medium-to-large company where I can learn various tech stacks to improve my skills.',
        'hero.cv': 'Download CV',
        'hero.work': 'View Work',
        'skills.title': 'Technical Skills',
        'skills.lang': 'Languages',
        'projects.title': 'Featured Projects',
        'contact.title': 'Get In Touch',
        'btn.playstore': 'View on Play Store',
        'btn.download': 'Download App',
        'btn.liveWebText': 'View Website',
        'btn.details': 'View Details',
        'modal.close': 'Close',
    },
    id: {
        'nav.home': 'Beranda',
        'nav.skills': 'Keahlian',
        'nav.projects': 'Proyek',
        'nav.contact': 'Kontak',
        'hero.role': 'Rekayasa Perangkat Lunak',
        'hero.bio':
            'Mencari posisi di perusahaan menengah hingga besar di mana saya dapat mempelajari berbagai teknologi untuk meningkatkan keterampilan saya.',
        'hero.cv': 'Unduh CV',
        'hero.work': 'Lihat Karya',
        'skills.title': 'Keahlian Teknis',
        'skills.lang': 'Languages',
        'projects.title': 'Proyek Unggulan',
        'contact.title': 'Hubungi Saya',
        'btn.playstore': 'Lihat di Play Store',
        'btn.download': 'Unduh Aplikasi',
        'btn.liveWebText': 'Lihat Website',
        'btn.details': 'Lihat Detail',
        'modal.close': 'Tutup',
    },
};

// --- 2. PROJECT DATA ---
export const projects = [
    {
        title: 'BPD DIY Digital Apps',
        company: 'RawLabs',
        date: 'Mar 25 - Nov 25',
        category: 'backend',
        tech: ['Java Springboot', 'Microservices', 'Redis', 'MinIO', 'REST'],
        desc_en:
            'Developed a web server to handle banking and corporate needs, including payroll, transfers, and daily purchasing.',
        desc_id:
            'Mengembangkan server web untuk menangani kebutuhan perbankan dan perusahaan, termasuk penggajian, transfer, dan pembelian harian.',
        details_en: [
            'Developed a web server to handle banking and corporate needs, including payroll, transfers, and daily purchasing.',
            'Built and optimized a file-management-service for handling reporting-related file uploads and downloads.',
            'Conducted maintenance and bug fixes across multiple microservices within the banking ecosystem.',
        ],
        details_id: [
            'Mengembangkan server web untuk menangani kebutuhan perbankan dan perusahaan, termasuk penggajian, transfer, dan pembelian harian.',
            'Membangun dan mengoptimalkan layanan manajemen file untuk menangani unggahan dan unduhan file terkait pelaporan.',
            'Melakukan pemeliharaan dan perbaikan bug di berbagai microservices dalam ekosistem perbankan.',
        ],
        hasLink: false,
    },
    {
        title: 'Lexa v4.0',
        company: 'Lamemba',
        date: 'Apr 25 - Present',
        category: 'backend',
        tech: [
            'Java Springboot',
            'Microservices',
            'S3 Compatible',
            'gRPC',
            'BNI Payment',
        ],
        desc_en:
            'Engineered a file-service for S3 uploads and implemented payment-service using BNI API for Virtual Accounts.',
        desc_id:
            'Merancang layanan file untuk unggahan S3 dan mengimplementasikan layanan pembayaran menggunakan API BNI untuk Akun Virtual.',
        details_en: [
            'Engineered a file-service to handle uploads to S3-compatible storage and manage database URL mapping.',
            'Implemented a payment-service using BNI API to generate Virtual Accounts and handle successful payment webhooks.',
            'Conducted maintenance and bug fixes across multiple microservices.',
        ],
        details_id: [
            'Merancang layanan file untuk menangani unggahan ke penyimpanan yang kompatibel dengan S3 dan mengelola pemetaan URL database.',
            'Mengimplementasikan layanan pembayaran menggunakan API BNI untuk menghasilkan Virtual Account dan menangani webhook pembayaran yang sukses.',
            'Melakukan pemeliharaan dan perbaikan bug di berbagai microservices.',
        ],
        hasLink: false,
    },
    {
        title: 'FitConnect (Mobile)',
        company: 'PT. CP Prima Tbk',
        date: 'Jan 25 - Jun 25',
        category: 'mobile',
        tech: [
            'React Native',
            'Expo',
            'Firebase',
            'Crashlytics',
            'Analytics',
            'Google Fit API',
            'Health Kit',
            'Background Job',
        ],
        desc_en:
            'Developed a cross-platform mobile app that integrates with Google Fit and Health Kit.',
        desc_id:
            'Mengembangkan aplikasi seluler lintas platform yang terintegrasi dengan Google Fit dan Health Kit.',
        details_en: [
            'Developed a cross-platform mobile app that integrates with Google Fit (Android) and Health Kit (iOS).',
            'Implemented automated background jobs to periodically synchronize health data from the device to the server.',
        ],
        details_id: [
            'Mengembangkan aplikasi seluler lintas platform yang terintegrasi dengan Google Fit (Android) dan Health Kit (iOS).',
            'Mengimplementasikan pekerjaan latar belakang otomatis untuk menyinkronkan data kesehatan secara berkala dari perangkat ke server.',
        ],
        hasLink: true,
        link: 'https://play.google.com/store/apps/details?id=com.cpp.fitconnect&hl=en',
    },
    {
        title: 'FitConnect (Web Server)',
        company: 'PT. CP Prima Tbk',
        date: 'Jan 25 - Jun 25',
        category: 'backend',
        tech: ['Go', 'PostgreSQL', 'GORM', 'Standard HTTP Library'],
        desc_en:
            'Involved to develop the core web server to support the FitConnect mobile ecosystem using Golang.',
        desc_id:
            'Terlibat dalam pengembangan server web inti untuk mendukung ekosistem seluler FitConnect menggunakan Golang.',
        details_en: [
            'Involved to develop the core web server to support the FitConnect mobile ecosystem using Golang.',
            'Utilized the Go standard http library for efficient routing and handling of incoming requests and responses.',
        ],
        details_id: [
            'Terlibat untuk mengembangkan server web inti untuk mendukung ekosistem seluler FitConnect menggunakan Golang.',
            'Memanfaatkan pustaka http standar Go untuk perutean yang efisien dan penanganan permintaan dan tanggapan yang masuk.',
        ],
        hasLink: false,
    },
    {
        title: 'Falcon PRM',
        company: 'PT. Bale Lab Indonesia',
        date: 'Jun 23 - Dec 24',
        category: 'mobile',
        tech: ['Flutter', 'GetX', 'Hive', 'Google ML Kit', 'Firebase', 'Crashlytics', 'Analytics'],
        desc_en:
            'Created a mobile application with offline storage and OCR to streamline daily tasks for internal partners.',
        desc_id:
            'Membuat aplikasi seluler dengan penyimpanan offline dan OCR untuk menyederhanakan tugas sehari-hari bagi mitra internal.',
        details_en: [
            'Created a mobile application to streamline daily tasks and operations for internal business partners.',
            'Implemented offline storage to cache master data, ensuring users can seamlessly fill out and submit complex forms even without an active internet connection.',
            'Integrated Google ML Kit Text Recognition to automate data extraction from receipts and identity cards (KTP), significantly reducing manual data entry errors.',
        ],
        details_id: [
            'Membuat aplikasi seluler untuk menyederhanakan tugas dan operasi sehari-hari bagi mitra bisnis internal.',
            'Mengimplementasikan penyimpanan offline untuk menyimpan data master, memastikan pengguna dapat mengisi dan mengirimkan formulir yang kompleks dengan lancar bahkan tanpa koneksi internet aktif.',
            'Mengintegrasikan Pengenalan Teks Google ML Kit untuk mengotomatisasi ekstraksi data dari tanda terima dan kartu identitas (KTP), secara signifikan mengurangi kesalahan entri data manual.',
        ],
        hasLink: false,
    },
    {
        title: 'MyHalo Golf',
        company: 'PT. Bale Lab Indonesia',
        date: 'Jun 23 - Dec 24',
        category: 'mobile',
        tech: ['Flutter', 'GetX', 'Firebase', 'Deep Link', 'REST', 'Crashlytics'],
        desc_en:
            "Delivered a mobile application for Telkomsel's Golf Tournament with a complex scoring table.",
        desc_id:
            'Menyediakan aplikasi seluler untuk Turnamen Golf Telkomsel dengan tabel skor yang kompleks.',
        details_en: [
            "Delivered a mobile application for Telkomsel's Golf Tournament to enhance the experience for members and partners.",
            'Engineered a complex scoring table utilizing a horizontally scrollable Flutter DataTable to accommodate and display extensive scoring data columns across various screen sizes.',
        ],
        details_id: [
            "Menyediakan aplikasi seluler untuk Turnamen Golf Telkomsel untuk meningkatkan pengalaman bagi anggota dan mitra.",
            'Merancang tabel skor yang kompleks menggunakan Flutter DataTable yang dapat digulir secara horizontal untuk mengakomodasi dan menampilkan kolom data skor yang luas di berbagai ukuran layar.',
        ],
        link: 'https://play.google.com/store/apps/details?id=com.telkomsel.hgc&hl=en',
        hasLink: true,
    },
    {
        title: 'Valbury',
        company: 'PT. Valbury Asia Futures',
        date: 'May 22 - May 23',
        category: 'mobile',
        tech: ['Flutter', 'GetX', 'Hive', 'Firebase', 'Deep Link', 'Crashlytics', 'Analytics'],
        desc_en:
            'Contributed to the enhancement and optimization of core financial and investment applications.',
        desc_id:
            'Berkontribusi pada peningkatan dan optimalisasi aplikasi keuangan dan investasi inti.',
        details_en: [
            'Contributed to the enhancement and optimization of core financial and investment applications.',
            'Performed routine maintenance, including UI updates based on Figma designs and bug fixes reported by QA.',
        ],
        details_id: [
            'Berkontribusi pada peningkatan dan optimalisasi aplikasi keuangan dan investasi inti.',
            'Melakukan pemeliharaan rutin, termasuk pembaruan UI berdasarkan desain Figma dan perbaikan bug yang dilaporkan oleh QA.',
        ],
        hasLink: true,
        link: 'https://play.google.com/store/search?q=valbury&c=apps&hl=en',
    },
    {
        title: 'GaweYuk!',
        company: 'PT. Ekrut Teknologi Pasifik',
        date: 'Jan 22 - Nov 22',
        category: 'mobile',
        tech: ['Android Native', 'Kotlin', 'MVVM', 'Firebase', 'GraphQL', 'Crashlytics', 'Analytics'],
        desc_en:
            'Developed a mobile job portal to help users find employment opportunities through an intuitive platform.',
        desc_id:
            'Mengembangkan portal pekerjaan seluler untuk membantu pengguna menemukan peluang kerja melalui platform yang intuitif.',
        details_en: [
            'Developed a mobile job portal to help users find employment opportunities through an intuitive platform.',
            'Managed ongoing maintenance and UI updates based on Figma designs to ensure a consistent user experience.',
            'Resolved technical bugs identified by the QA team to maintain application stability.',
        ],
        details_id: [
            'Mengembangkan portal pekerjaan seluler untuk membantu pengguna menemukan peluang kerja melalui platform yang intuitif.',
            'Mengelola pemeliharaan berkelanjutan dan pembaruan UI berdasarkan desain Figma untuk memastikan pengalaman pengguna yang konsisten.',
            'Menyelesaikan bug teknis yang diidentifikasi oleh tim QA untuk menjaga stabilitas aplikasi.',
        ],
        hasLink: false,
    },
    {
        title: 'Prosa HI',
        company: 'Freelance',
        date: 'Jan 22 - Present',
        category: 'mobile',
        tech: ['Flutter', 'Riverpod', 'Firebase', 'Crashlytics'],
        desc_en:
            'Developed a mobile app to help women track pregnancy, baby growth, and maternal mental health.',
        desc_id:
            'Mengembangkan aplikasi seluler untuk membantu wanita melacak kehamilan, pertumbuhan bayi, dan kesehatan mental ibu.',
        details_en: [
            'Developed a mobile app to help women track pregnancy, baby growth, and maternal mental health.',
            'Involved in the full development lifecycle, from gathering client information to application development and final deployment.',
            'Managed the Google Play Store release process, successfully navigating the "Closed Testing" requirements for new accounts.',
        ],
        details_id: [
            'Mengembangkan aplikasi seluler untuk membantu wanita melacak kehamilan, pertumbuhan bayi, dan kesehatan mental ibu.',
            'Terlibat dalam siklus hidup pengembangan penuh, dari pengumpulan informasi klien hingga pengembangan aplikasi dan penyebaran akhir.',
            'Mengelola proses rilis Google Play Store, berhasil menavigasi persyaratan "Closed Testing" untuk akun baru.',
        ],
        link: 'https://play.google.com/store/apps/details?id=com.prosahi.app&hl=en',
        hasLink: true,
    },
    {
        title: 'Langaroo',
        company: 'Freelance',
        date: 'Jan 22 - Present',
        category: 'mobile',
        tech: ['Android Native (Kotlin)', 'MVVM', 'Firebase', 'Crashlytics', 'Cloud Messaging', 'Agora', 'Localization'],
        desc_en:
            'Contributed to the enhancement and optimization of core Langaroo social media apps.',
        desc_id:
            'Berkontribusi pada peningkatan dan optimalisasi aplikasi media sosial inti Langaroo.',
        details_en: [
            'Contributed to the enhancement and optimization of core Langaroo social media apps.',
            'Performed routine maintenance, including UI updates based on Figma designs and bug fixes reported by QA.'
        ],
        details_id: [
            'Berkontribusi pada peningkatan dan optimalisasi aplikasi media sosial inti Langaroo.',
            'Melakukan pemasangan rutin, termasuk pembaruan UI berdasarkan desain Figma dan perbaikan bug yang dilaporkan oleh QA.'
        ],
        hasLink: true,
        link: 'https://play.google.com/store/search?q=langaroo&c=apps&hl=id',
    },
    {
        title: 'Skor.id',
        company: 'Dihardja Software Solutions',
        date: 'Jun 19 - Present',
        category: 'mobile',
        tech: ['Flutter', 'GetX', 'Firebase', 'Deep Link', 'Crashlytics', 'Analytics'],
        desc_en:
            'Developed a news portal and real-time tournament dashboard app.',
        desc_id:
            'Mengembangkan portal berita dan aplikasi dashboard turnamen real-time.',
        details_en: [
            'Developed a news portal and real-time tournament dashboard app to provide users with live updates.',
            'Led the mobile development team, overseeing project progress and ensuring technical requirements were met.',
            'Performed comprehensive code reviews on Pull Requests (PRs) to maintain code quality, consistency, and best practices across the team.',
        ],
        details_id: [
            'Mengembangkan portal berita dan aplikasi dashboard turnamen real-time untuk memberikan pembaruan langsung kepada pengguna.',
            'Memimpin tim pengembangan seluler, mengawasi kemajuan proyek dan memastikan persyaratan teknis terpenuhi.',
            'Melakukan tinjauan kode komprehensif pada Pull Requests (PRs) untuk menjaga kualitas kode, konsistensi, dan praktik terbaik di seluruh tim.',
        ],
        hasLink: false,
    },
    {
        title: 'Altius',
        company: 'Dihardja Software Solutions',
        date: 'Jun 19 - Present',
        category: 'mobile',
        tech: ['Flutter', 'GetX', 'Hive', 'Firebase', 'Crashlytics', 'Analytics'],
        desc_en:
            'Created a mobile application to facilitate tracking of employee performance metrics.',
        desc_id:
            'Membuat aplikasi seluler untuk memfasilitasi pelacakan metrik kinerja karyawan.',
        details_en: [
            'Created the mobile application from scratch to facilitate tracking of employee performance metrics on the go.',
            'Acted as the mobile development lead, coordinating team tasks and mentoring junior developers through the development cycle.',
            'Managed the code review process, identifying potential bugs and optimizing performance before merging features into the main branch.',
        ],
        details_id: [
            'Membuat aplikasi seluler dari awal untuk memfasilitasi pelacakan metrik kinerja karyawan saat bepergian.',
            'Bertindak sebagai pimpinan pengembangan seluler, mengoordinasikan tugas tim dan membimbing pengembang junior melalui siklus pengembangan.',
            'Mengelola proses tinjauan kode, mengidentifikasi bug potensial dan mengoptimalkan kinerja sebelum menggabungkan fitur ke cabang utama.',
        ],
        hasLink: true,
        link: 'https://play.google.com/store/apps/details?id=com.agindonesia.altius&hl=en',
    },
    {
        title: 'Pet Lover Centre',
        company: 'Dihardja Software Solutions',
        date: 'Jun 19 - Present',
        category: 'mobile',
        tech: [
            'Android Native',
            'Kotlin',
            'MVVM',
            'Firebase',
            'Crashlytics',
            'Analytics',
        ],
        desc_en:
            'Maintained a native Android application used for tracking VIP customer activity.',
        desc_id:
            'Memelihara aplikasi Android native yang digunakan untuk melacak aktivitas pelanggan VIP.',
        details_en: [
            'Maintained a native Android application used for tracking VIP customer activity and store promotions.',
            'Provided continuous maintenance and bug fixes using Kotlin and MVVM architecture.',
        ],
        details_id: [
            'Memelihara aplikasi Android asli yang digunakan untuk melacak aktivitas pelanggan VIP dan promosi toko.',
            'Memberikan pemeliharaan berkelanjutan dan perbaikan bug menggunakan arsitektur Kotlin dan MVVM.',
        ],
        hasLink: true,
        link: 'https://play.google.com/store/apps/details?id=com.petloverscentre.vipconcierge&hl=en',
    },
    {
        title: 'NFL Stadeo',
        company: 'Dihardja Software Solutions',
        date: 'Jun 19 - Present',
        category: 'mobile',
        tech: ['Flutter', 'GetX', 'Firebase', 'Agora RTC', 'Crashlytics', 'Analytics'],
        desc_en:
            'Engineered a robust livestreaming feature using Agora RTC and developed a fully custom video player.',
        desc_id:
            'Merancang fitur livestreaming yang tangguh menggunakan Agora RTC dan mengembangkan pemutar video kustom sepenuhnya.',
        details_en: [
            'Engineered a robust livestreaming feature using Agora RTC and Real-time Messaging, enabling complex host-audience interactions such as live commenting, virtual gifting, and "apply-to-talk" audio requests.',
            'Developed a fully custom video player with a bespoke UI, implementing precise controls for playback timing, pause/resume states, and variable playback speeds.',
        ],
        details_id: [
            'Merancang fitur livestreaming yang tangguh menggunakan Agora RTC dan Pesan Real-time, memungkinkan interaksi host-audiens yang kompleks seperti komentar langsung, pemberian hadiah virtual, dan permintaan audio "apply-to-talk".',
            'Mengembangkan pemutar video kustom sepenuhnya dengan UI khusus, mengimplementasikan kontrol yang tepat untuk waktu pemutaran, status jeda/lanjutkan, dan kecepatan pemutaran variabel.',
        ],
        hasLink: false,
    },
    {
        title: 'React Jobs',
        company: 'Personal',
        date: 'May 24 - Jun 24',
        category: 'personal',
        tech: ['React', 'Typescript', 'Tanstack Query', 'Tailwind'],
        desc_en:
            'Personal project to practice React, Typescript, Tanstack Query, and Tailwind.',
        desc_id:
            'Proyek personal untuk latihan React, Typescript, Tanstack Query, dan Tailwind.',
        details_en: [
            'Personal project to practice React, Typescript, Tanstack Query, and Tailwind.',
        ],
        details_id: [
            'Proyek personal untuk latihan React, Typescript, Tanstack Query, dan Tailwind.',
        ],
        hasLink: true,
        webLink: 'https://ariefzainuri96.github.io/react-jobs/',
    },
];
