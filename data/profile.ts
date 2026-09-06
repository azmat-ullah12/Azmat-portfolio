// ============================================
// PROFILE DATA — AZMAT ULLAH
// Edit this single file to update all website content.
// All sections read from this file.
// ============================================

// ─── Types ───────────────────────────────────────────

export interface ProfileLinks {
  linkedin: string;
  researchgate: string;
  googleScholar: string;
  orcid: string;
  upwork: string;
  fiverr: string;
  cwi: string;
  portfolio: string;
  ebay: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  grade?: string;
  highlights?: string[];
  thesis?: string;
}

export interface Publication {
  title: string;
  authors?: string;
  year: number;
  journal?: string;
  doi?: string;
  featured?: boolean;
}

export interface BlogPost {
  title: string;
  publication?: string;
  year: string;
  type?: string;
}

export interface Project {
  title: string;
  subtitle?: string;
  role: string;
  description?: string;
  responsibilities: string[];
}

export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  description: string;
  tools: string[];
  link?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
  detail?: string;
}

export interface Internship {
  organization: string;
  role?: string;
  program?: string;
  year: string;
  focus: string[];
}

export interface Certification {
  title: string;
  image?: string;
}

export interface Presentation {
  title: string;
  venue: string;
  year: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface FreelancePlatform {
  name: string;
  role: string;
  description: string;
  url: string;
  badge?: string;
  platformId: 'fiverr' | 'upwork' | 'ebay';
}

export const freelancePlatforms: FreelancePlatform[] = [
  {
    name: 'Fiverr Profile',
    role: 'Virtual Assistant & Excel Specialist',
    description: 'Providing professional data virtual assistant, research assistance, and administrative support services.',
    url: 'https://www.fiverr.com/azmatazu/buying',
    badge: 'Fiverr Client & Buyer Profile',
    platformId: 'fiverr',
  },
  {
    name: 'Upwork Profile',
    role: 'Research & Data Virtual Assistant',
    description: 'Available for long-term and short-term freelancing contracts in web research, data management, and coordination.',
    url: 'https://www.upwork.com/nx/client/dashboard/',
    badge: 'Upwork Workspace & Dashboard',
    platformId: 'upwork',
  },
  {
    name: 'eBay Storefront',
    role: 'Merchant & Digital Seller',
    description: 'Active e-commerce merchant store featuring specialized products and digital store listings.',
    url: 'https://www.ebay.com/sch/axm_2431/m.html?item=800396158368&rt=nc&_trksid=p4429486.m3561.l161211',
    badge: 'eBay Seller Storefront',
    platformId: 'ebay',
  },
];

// ─── Social & Contact Links ─────────────────────────
// Add your actual profile URLs here when ready.
// Leave empty strings as placeholders.

export const profileLinks: ProfileLinks = {
  linkedin: 'https://www.linkedin.com/in/azmat-azu',
  researchgate: 'https://www.researchgate.net/profile/Azmat-Ullah-32',
  googleScholar: 'https://g.co/kgs/9cKg2UU',
  orcid: 'https://orcid.org/0009-0006-6241-7241',
  upwork: 'https://www.upwork.com/nx/client/dashboard/',
  fiverr: 'https://www.fiverr.com/azmatazu/buying',
  cwi: 'https://www.cyberworldinsight.com/author/axmtbrzgmail-com/',
  portfolio: 'https://drive.google.com/file/d/1hEe-xWUNG7n1rvas2sQwmzU3UEEZovZX/view?usp=sharing',
  ebay: 'https://www.ebay.com/sch/axm_2431/m.html?item=800396158368&rt=nc&_trksid=p4429486.m3561.l161211',
};

// ─── Personal Information ───────────────────────────

export const personalInfo = {
  name: 'Azmat Ullah',
  tagline: 'Researcher · Educator · Digital Creator · Emerging Entrepreneur',
  headline: 'Turning ideas into meaningful work.',
  subheadline:
    'I work across research, education, project coordination, data, digital content and entrepreneurship — combining analytical thinking with practical execution.',
  location: 'Based in Pakistan · Working across research, education & digital projects',
  email: 'Axmtbrz@gmail.com',
  phone: '(+92) 3454050692',
  cvUrl: 'https://docs.google.com/document/d/1g1ff_sgg3Fo4eHVox5fTDt9pEJXVRC0D/edit?usp=sharing&ouid=102786175469794755714&rtpof=true&sd=true',
  profileImage: '/images/profile.jpg',
};

// ─── Quick Stats ────────────────────────────────────

export const stats: Stat[] = [
  { value: 'Gold Medalist', label: 'BS Education' },
  { value: '10+', label: 'Research publications & articles' },
  { value: '3.89/4.00', label: 'BS Education CGPA' },
  { value: '5+', label: 'Years of teaching & project experience' },
];

// ─── About ──────────────────────────────────────────

export const aboutDescription =
  'My background combines education, academic research, data reporting, project coordination, teaching, social media communication, digital work, and entrepreneurship. I believe in the intersection of research and practical action — turning ideas into projects, publications, and real-world impact.';

export const areasOfFocus: string[] = [
  'Inclusive Education',
  'Teacher Training',
  'Language & Diversity',
  'Disability & Inclusion',
  'Sustainable Development',
  'Climate Change',
  'Digital Literacy',
];

// ─── Experience ─────────────────────────────────────

export const experience: ExperienceItem[] = [
  {
    title: 'Project Coordinator',
    organization: 'Noon Consulting · HEC',
    period: 'July 2026 – Present',
    responsibilities: [
      'Monitoring project activities',
      'Coordinating with focal persons across Pakistani universities',
      'Supervising subordinates',
    ],
  },
  {
    title: 'Data Reporting Officer',
    organization: 'Noon Consulting · HEC',
    period: 'November 2025 – July 2026',
    responsibilities: [
      'Managed datasets using Microsoft Excel',
      'Cleaned and validated data',
      'Prepared weekly/monthly reports',
      'Managed spreadsheets and digital records',
      'Data verification and quality assurance',
      'Responded to applicant queries',
      'Supported administrative operations',
      'Improved reporting workflows',
    ],
  },
  {
    title: 'Teacher',
    organization: 'A.Q. Khan School System, Chitral',
    period: 'May 2019 – August 2021',
    responsibilities: [
      'Taught Mathematics, English, and Social Science',
      'Lesson planning and assessment',
      'Student communication and engagement',
    ],
  },
  {
    title: 'Media Relations Officer',
    organization: 'Young Peace and Development Corps · University of Chitral',
    period: '2023 – 2024',
    responsibilities: [
      'Social media management',
      'Content creation and reporting',
    ],
  },
  {
    title: 'Captain',
    organization: 'Green Youth Movement Club · University of Chitral',
    period: '2023 – 2024',
    responsibilities: [
      'Leading projects and initiatives',
      'Arranging workshops and sessions',
      'Distributing responsibilities among team members',
    ],
  },
];

// ─── Education ──────────────────────────────────────

export const education: EducationItem[] = [
  {
    degree: 'BS Education',
    institution: 'University of Chitral',
    year: '2025',
    grade: 'CGPA: 3.89/4.00',
    highlights: ['Gold Medalist'],
    thesis:
      'Teacher perception and practices of education for sustainable development',
  },
  {
    degree: 'Diploma in Information Technology',
    institution: '',
    year: '2024',
    grade: '73%',
  },
  {
    degree: 'HSSC',
    institution: 'Degree College Chitral',
    year: '2019',
    grade: '61%',
  },
  {
    degree: 'SSC',
    institution: 'Islamia Public School, Broze',
    year: '2017',
    grade: '72%',
  },
];

// ─── Publications ───────────────────────────────────

export const publications: Publication[] = [
  {
    title:
      'Understanding the Gender Digital Divide in South Asia: A Qualitative Meta-Synthesis',
    authors: 'Azmat Ullah & M. S. A. Shah',
    year: 2026,
    journal: 'Pedagogy and Psychology of Sport',
    doi: 'https://doi.org/10.12775/PPS.2026.32.69637',
    featured: true,
  },
  {
    title:
      'Sustainability Literacy Among University Students: Awareness and Practices',
    year: 2026,
    doi: 'https://doi.org/10.12775/PPS.2026.30.68789',
  },
  {
    title:
      'Teacher Education for Inclusiveness of Students with Disabilities: Evidence from Pakistan',
    year: 2025,
    doi: 'https://doi.org/10.63056/ACAD.004.01.0067',
  },
  {
    title:
      'Importance of Linguistic Diversity in Inclusive Education: A Study of District Lower Chitral, Pakistan',
    year: 2025,
    doi: 'https://doi.org/10.59075/rjs.v3i2.148',
  },
  {
    title:
      'The Role of Peer Interaction in Inclusive Education for Students with Special Needs',
    year: 2025,
    doi: 'https://doi.org/10.63075/tgjw7b62',
  },
  {
    title:
      'Understanding the Role of Madrassas in Pakistan\'s Educational Landscape: A Data-Driven Perspective from Google Trends',
    year: 2025,
    doi: 'https://doi.org/10.12775/PPS.2025.26.66269',
  },
  {
    title:
      'Assessing the Demand for Skill-based Education in Pakistan: Insights from Google Trends Data',
    year: 2025,
    doi: 'https://doi.org/10.12775/PPS.2025.27.66462',
  },
  {
    title:
      'Rising Interest in Foreign Scholarships in Pakistan: Evidence from Google Trends and the Brain Drain Debate',
    year: 2025,
    doi: 'https://doi.org/10.12775/PPS.2025.27.66412',
  },
  {
    title:
      'Teaching to Think: Exploring How University Teachers Develop Students\' Critical Thinking',
    year: 2025,
    doi: 'https://doi.org/10.63467/red.13.2025.art3',
  },
];

// ─── Blog Posts & Writing ───────────────────────────

export const blogPosts: BlogPost[] = [
  {
    title: 'Education for Sustainable Development: Shaping Future Generations',
    publication: 'Cyber World Insight',
    year: '2025',
    type: 'article',
  },
  {
    title: 'The Future of Digital Rights in Pakistan – Youth Perspectives',
    year: '2025',
    type: 'article',
  },
  {
    title: 'AI and Democracy in the Digital Age: Opportunities and Threats',
    year: '2025',
    type: 'article',
  },
  {
    title:
      'Bridging Pakistan\'s Digital Divide: Why Rural Communities Must Not Be Left Behind',
    publication: 'Magazine',
    year: '2025',
    type: 'magazine',
  },
];

// ─── Projects ───────────────────────────────────────

export const projects: Project[] = [
  {
    title: 'Gender Digital Divide in South Asia',
    role: 'Co-author / Research Project',
    responsibilities: [
      'Literature review',
      'Methodology design',
      'Report writing',
      'Data analysis',
    ],
  },
  {
    title: 'Pakistan Career Fair — What Skills Do Students Want?',
    role: 'Team Lead / Market Research',
    responsibilities: [
      'Data collection from students across Pakistan',
      'Data analysis',
      'Team leadership',
      'Research presentation',
    ],
  },
  {
    title: 'Teacher Training Initiative',
    subtitle: 'Aspire Leadership Program',
    role: 'Project Lead',
    description:
      'Training secondary school teachers in Chitral for inclusive education in linguistically diverse contexts.',
    responsibilities: [
      'Project design and planning',
      'Budget development',
      'Expert coordination',
      'Training delivery',
    ],
  },
];

// ─── Creative Portfolio ─────────────────────────────
// Add real portfolio items here when media files are ready.
// Each item supports: image (JPG/PNG/WEBP), video, or external link.

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Coming Soon',
    category: 'Graphic Design',
    image: '',
    description: 'Graphic design work will be uploaded soon.',
    tools: [],
  },
  {
    title: 'Coming Soon',
    category: 'Video Editing',
    image: '',
    description: 'Video editing projects will be uploaded soon.',
    tools: [],
  },
  {
    title: 'Coming Soon',
    category: 'AI Video',
    image: '',
    description: 'AI-generated video content will be uploaded soon.',
    tools: [],
  },
  {
    title: 'Coming Soon',
    category: 'Social Media',
    image: '',
    description: 'Social media campaigns and content will be uploaded soon.',
    tools: [],
  },
  {
    title: 'Coming Soon',
    category: 'Presentations',
    image: '',
    description: 'Presentation designs will be uploaded soon.',
    tools: [],
  },
  {
    title: 'Coming Soon',
    category: 'Research',
    image: '',
    description: 'Research-related visual content will be uploaded soon.',
    tools: [],
  },
];

export const portfolioCategories: string[] = [
  'All',
  'Graphic Design',
  'Video Editing',
  'AI Video',
  'Social Media',
  'Presentations',
  'Research',
];

// ─── Skills & Services ──────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    name: 'Research & Academic',
    skills: [
      'Academic Research',
      'Research Methodology',
      'Literature Review',
      'Article Writing',
      'Blog Writing',
      'Data Collection',
      'SPSS',
      'Research Documentation',
    ],
  },
  {
    name: 'Data & Excel',
    skills: [
      'Microsoft Excel',
      'Google Sheets',
      'Data Cleaning',
      'Data Analysis',
      'Pivot Tables',
      'XLOOKUP',
      'VLOOKUP',
      'Charts & Dashboards',
    ],
  },
  {
    name: 'Virtual Assistance',
    skills: [
      'Virtual Assistance',
      'Data Entry',
      'Web Research',
      'Internet Research',
      'Administrative Support',
      'Email Management',
      'Document Formatting',
    ],
  },
  {
    name: 'Digital & Creative',
    skills: [
      'Graphic Design',
      'Video Editing',
      'Video Generation',
      'Canva',
      'Social Media Content',
      'AI-assisted Content Creation',
    ],
  },
  {
    name: 'Social Media',
    skills: [
      'Social Media Management',
      'Content Planning',
      'Content Strategy',
      'Digital Communication',
      'Awareness Campaigns',
    ],
  },
  {
    name: 'Project & Business',
    skills: [
      'Project Coordination',
      'Leadership',
      'Management',
      'Communication',
      'Problem Solving',
      'Teamwork',
      'Entrepreneurship',
    ],
  },
];

// ─── Achievements ───────────────────────────────────

export const achievements: Achievement[] = [
  {
    title: 'Gold Medalist',
    description: 'Bachelor of Science / BS Education',
    detail: 'University of Chitral · CGPA 3.89/4.00',
  },
  {
    title: 'Second Position',
    description: 'Environmental competition on how to save the forest',
    detail: 'University of Chitral',
  },
];

// ─── Internships ────────────────────────────────────

export const internships: Internship[] = [
  {
    organization: 'Cyber World Insight',
    role: 'Researcher & Blog Writer',
    year: '2025',
    focus: [
      'Content writing',
      'Blog writing',
      'Article writing',
      'Research methodology',
    ],
  },
  {
    organization: 'The Citizens Foundation',
    program: 'Baghbaan Summer Internship Program',
    year: '2025',
    focus: ['Media', 'Educational rights', 'Fundraising', 'Awareness', 'Paintings'],
  },
  {
    organization: 'Pakistan Career Fair',
    year: '2025',
    focus: [
      'Professional development',
      'Leadership',
      'Communication',
      'Market research',
      'LinkedIn profile optimization',
    ],
  },
  {
    organization: 'Wall of Hope',
    program: 'Youth Fellowship Program',
    year: '2025',
    focus: [
      'Sustainable Development Goals',
      'Climate change',
      'Inclusive education',
      'Quality education',
      'Classroom management',
    ],
  },
  {
    organization: 'Green Spark Youth Alliance',
    year: '2025',
    focus: [
      'Climate',
      'Sustainable development',
      'Social justice',
      'Quality education',
    ],
  },
  {
    organization: 'Afriment',
    role: 'Data Analysis Intern',
    year: '2025',
    focus: [
      'Data collection',
      'Data cleaning',
      'Data analysis',
      'Interpretation',
      'Resume making',
    ],
  },
  {
    organization: 'Aspire Leadership Program',
    year: '2025',
    focus: [
      'Leadership',
      'Management',
      'Communication',
      'Problem solving',
      'Entrepreneurship',
      'Critical thinking',
    ],
  },
];

// ─── Certifications ─────────────────────────────────
// Add image paths when certificate images are uploaded.

export const certifications: Certification[] = [
  { title: 'Assessment in Higher Education: Professional Development for Teachers' },
  { title: 'Understanding Research Methods' },
  { title: 'The World of Classroom Assessment and Testing' },
  { title: 'Statistical Analysis of Data for Researchers' },
  { title: 'Content That Connects' },
  { title: 'National Summer School on Social Justice and Climate Change' },
  { title: 'National Conference on Literature, Culture and Climate' },
  { title: 'Virtual Training on Sustainable Development Goals' },
];

// ─── Presentations ──────────────────────────────────

export const presentations: Presentation[] = [
  {
    title: 'How to Save the Forest',
    venue: 'University of Chitral',
    year: '2022',
  },
  {
    title: 'Effect of Climate Change in Chitral',
    venue: 'Baragali, University of Peshawar campus',
    year: '2024',
  },
  {
    title: 'What Skills Do Students Want?',
    venue: 'Pakistan Career Fair',
    year: '2025',
  },
];

// ─── Languages ──────────────────────────────────────

export const languages: Language[] = [
  { name: 'Khowar', level: 'Mother tongue' },
  { name: 'Urdu', level: 'Native / Fluent' },
  { name: 'English', level: 'Professional / Official working language' },
];

// ─── Navigation ─────────────────────────────────────

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
