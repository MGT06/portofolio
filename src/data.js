export const profile = {
  name: "Marianus Given Talenta",
  role: "Full-Stack Web Developer",
  tagline:
    "I build end-to-end web applications with React and Go, from payment gateway integrations to Dockerized, CI-ready deployments.",
  location: "Bekasi, Indonesia",
  email: "grdgiven4@gmail.com",
  github: "https://github.com/MGT06",
  linkedin: "https://www.linkedin.com/in/marianus-given-talenta/",
  photo: "/profile.png",
  cvUrl: "/CV.pdf",
  availability: "Open to opportunities",
};

export const about = {
  paragraphs: [
    "I'm a Full-Stack Web Developer who builds end-to-end web applications, using React.js, Redux Toolkit, and Tailwind CSS on the frontend and Go (Gin), PostgreSQL, Redis, Laravel, and Python (Flask) on the backend.",
    "I have hands-on experience integrating payment gateways (Xendit and Midtrans) and led a 4-person team as Project Manager on a digital wallet application. I'm eager to collaborate with a professional team to deliver robust and impactful digital solutions.",
  ],
  stats: [
    { value: "4", label: "Full-stack projects built" },
    { value: "2", label: "Payment gateways integrated" },
    { value: "4", label: "Team size led as Project Manager" },
  ],
};

export const projects = [
  {
    title: "Digital Wallet Web Application",
    role: "Project Manager & Backend Developer",
    summary:
      "A full-stack e-wallet application with PIN-verified transfers and Xendit-powered top-ups, built by a team of four.",
    overview:
      "A team project to deliver a complete e-wallet application. I led the team of four as Project Manager, coordinating backend and frontend developers and managing collaboration through GitHub feature branches and pull requests, while also developing core features myself.",
    features: [
      "Money transfer with PIN verification",
      "Wallet top-ups through the Xendit payment gateway, with a webhook that processes payment confirmations automatically",
      "OTP verification plus forgot-password and reset-password flow",
      "Dockerized frontend and backend with GitHub Actions CI pipelines",
    ],
    challenges:
      "Keeping user balances consistent during money transfers, handled with PostgreSQL database transactions and PIN verification.",
    results: [
      "Delivered a working full-stack e-wallet application as team lead",
      "Payment confirmations processed automatically through a webhook",
      "Both services containerized with Docker Compose and covered by CI pipelines",
    ],
    period: "Oct 2026",
    stack: ["React.js", "Tailwind CSS", "Go (Gin)", "PostgreSQL", "Redis", "Xendit", "JWT", "Docker", "GitHub Actions"],
    links: [
      { label: "Frontend (GitHub)", url: "https://github.com/MGT06/e-wallet_frontend" },
      { label: "Backend (GitHub)", url: "https://github.com/MGT06/e-wallet_backend" },
    ],
  },
  {
    title: "EventHub",
    role: "Full-Stack Developer",
    summary:
      "A full-stack event and community platform with role-based dashboards for organizers and admins.",
    overview:
      "A full-stack event and community platform built with a React.js and Tailwind CSS frontend and a Go (Gin) REST API.",
    features: [
      "JWT authentication with role-based access control (RBAC)",
      "Profile management, notifications, and testimonials",
      "Role-specific organizer and admin dashboards",
      "Normalized PostgreSQL database with many-to-many relations and data integrity constraints",
    ],
    challenges:
      "Securing access across user roles, including safe logout, handled with JWT, RBAC, and Redis-backed token blacklisting.",
    results: [
      "Delivered authentication, profile management, notifications, testimonials, and role-specific dashboards end to end",
      "Automated Docker image builds to GitHub Container Registry with GitHub Actions",
    ],
    period: "Aug 2026 – Oct 2026",
    stack: ["React.js", "Tailwind CSS", "Go (Gin)", "PostgreSQL", "Redis", "JWT", "Docker", "GitHub Actions"],
    links: [
      { label: "Frontend (GitHub)", url: "https://github.com/MGT06/EventHub" },
      { label: "Backend (GitHub)", url: "https://github.com/MGT06/eventhub_backend" },
    ],
  },
  {
    title: "Digital Canteen Ordering",
    role: "Full-Stack Developer",
    summary:
      "A canteen ordering platform with real-time order tracking, Midtrans payments, and a sales analytics dashboard.",
    overview:
      "A full-stack digital canteen ordering platform built with React 18 and TypeScript on the frontend and Python Flask on the backend.",
    features: [
      "Secure, real-time digital payments for student orders through Midtrans",
      "RBAC with JWT authentication for Customer, Cashier, and Owner roles",
      "Order tracking with status updates from pending to completed",
      "Sales analytics dashboard with revenue trends and popular menu items, plus PDF report export using ReportLab",
    ],
    challenges:
      "Serving three user roles with different permissions while keeping order status updates visible in real time.",
    results: [
      "Delivered a complete ordering flow from menu to payment to completion",
      "Gave owners revenue and popular-item insights with exportable PDF reports",
    ],
    period: "Aug 2025 – Oct 2025",
    stack: ["React 18", "TypeScript", "Python Flask", "Midtrans", "JWT", "ReportLab"],
    links: [{ label: "View on GitHub", url: "https://github.com/MGT06/DigitalCanteenOrdering" }],
  },
  {
    title: "Library Management System",
    role: "Full-Stack Developer",
    summary:
      "A library management system with automated loan tracking, fine calculation, and PDF reports.",
    overview:
      "A full-stack library management web application built with Laravel 11, MySQL, Blade templates, and Bootstrap 5.",
    features: [
      "Automated loan tracking with due-date calculation and book renewal",
      "Fine calculation module with real-time payment status tracking for overdue returns",
      "Book inventory and catalog with live availability status",
      "Member database management",
      "PDF transaction and statistics reports using DomPDF, with SweetAlert2 for interactive notifications",
    ],
    challenges:
      "Automating due-date calculation, renewals, and fines for overdue returns within a single loan workflow.",
    results: [
      "Delivered loan, fine, and inventory management end to end in one system",
      "Generated PDF transaction and statistics reports",
    ],
    period: "Sep 2024 – Dec 2024",
    stack: ["Laravel 11", "MySQL", "Blade", "Bootstrap 5", "DomPDF", "SweetAlert2"],
    links: [{ label: "View on GitHub", url: "https://github.com/MGT06/LibraryManagementSystem1" }],
  },
];

export const skills = [
  {
    group: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Blade Template",
      "Vite",
      "Responsive Design",
    ],
  },
  {
    group: "Backend",
    items: [
      "Go (Gin)",
      "PHP (Laravel)",
      "Python (Flask)",
      "RESTful API",
      "Clean Architecture",
      "RBAC",
      "Payment Gateway Integration",
      "Webhooks",
    ],
  },
  {
    group: "Database",
    items: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Database Transactions",
      "Database Design",
      "SQL Optimization",
    ],
  },
  {
    group: "DevOps & Deployment",
    items: [
      "Docker",
      "Docker Compose",
      "GitHub Actions (CI/CD)",
      "Container Registry",
      "Nginx",
      "Linux CLI",
      "Vercel",
    ],
  },
  {
    group: "Tools & Practices",
    items: ["Git", "GitHub", "Git Flow", "Agile/Scrum", "Trello", "Technical Documentation"],
  },
  {
    group: "Security",
    items: ["Input Validation", "Rate Limit", "HTTPS", "JWT", "CORS"],
  },
];

export const experience = [
  {
    period: "Aug 2025 – Oct 2025",
    title: "SEO Student Intern",
    place: "Universitas Telkom Bandung, Bandung, Indonesia",
    note: "Ran an SEO strategy for the Master of Forensic Science program website over a 3-month internship: wrote keyword-targeted articles, optimized meta titles and descriptions, built backlinks through guest posts, and tracked traffic and rankings with SimilarWeb, Ubersuggest, and Ahrefs.",
  },
];

export const education = [
  {
    degree: "Fullstack Web Developer",
    school: "Koda Tech Academy, Bogor, Indonesia",
    period: "Jul 2026 – Oct 2026",
    gpa: "",
    highlights: [
      "Front-end practices: React.js, Redux Toolkit, Tailwind CSS",
      "Back-end practices: Golang, Gin-Gonic, PostgreSQL, Redis",
      "Basic DevOps practices: WSL, Docker, and SSH for local deployment",
    ],
  },
  {
    degree: "Software Engineering",
    school: "SMK Telekomunikasi Telesandi Bekasi",
    period: "2023 – 2026",
    gpa: "",
    highlights: [
      "Built a web application from scratch every semester (semesters 3-5) as a required project.",
      "Designed systems before implementation using flowcharts, ERDs, DFDs, use case, and activity diagrams.",
      "Committee member of Syntax, a software extracurricular; taught web development to junior students for one year (11th grade).",
    ],
  },
];

export const certifications = [
  { name: "Learning the Basics of Web Programming", issuer: "Dicoding Indonesia", year: "2026" },
  { name: "Bootcamp Web Developer", issuer: "Nusacodes", year: "2024" },
  { name: "Workshop Basic Web Development", issuer: "Dunia Coding", year: "2023" },
];