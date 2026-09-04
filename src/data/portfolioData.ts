export interface Project {
  id: string;
  title: string;
  category: 'academic' | 'ai' | 'creative';
  subtitle: string;
  description: string;
  detailedDescription: string;
  techStack: string[];
  features: string[];
  aiInvolvement?: string;
  whatWasLearned?: string;
  status: string;
  githubUrl?: string;
  liveUrl?: string;
  gradient: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; tag?: string }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  type: 'internship';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  platform?: string;
  date?: string;
  credentialUrl?: string;
  badgeColor: string;
}

export interface Achievement {
  id: string;
  title: string;
  level: 'School' | 'District' | 'College' | 'Leadership';
  category: 'Athletics' | 'Leadership' | 'Hockey';
  description: string;
  icon: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Dhayanand S',
    initials: 'DS',
    role: 'Full Stack Developer | AI Enthusiast',
    subheading: 'Artificial Intelligence & Data Science Undergraduate',
    tagline: 'Building intelligent digital experiences through AI, full-stack development, data, IoT, and creative technology.',
    storyStage: 'Student → Learner → Builder → AI Explorer → Full Stack Developer → Creative Developer → Future AI Developer',
    aboutBio: `A motivated AI & Data Science undergraduate at Nandha Engineering College who learns by building real projects, experimenting with AI, developing full-stack applications, exploring IoT and data analytics, and actively participating in sports and extracurricular activities.`,
    location: 'Erode, Tamil Nadu, India',
    email: 'dhayanand844@gmail.com',
    phone: '+91 8681933981',
    github: 'https://github.com/DHAYANAND-S',
    linkedin: 'https://www.linkedin.com/in/dhayanand-s?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    leetcode: 'https://leetcode.com/u/2vS7OCYZCW/',
    hackerrank: 'https://www.hackerrank.com/profile/dhayanand844',
    education: {
      degree: 'B.Tech Artificial Intelligence & Data Science',
      institution: 'Nandha Engineering College (Autonomous)',
      location: 'Erode, Tamil Nadu',
      period: '2023 – 2027 (Expected)',
      school: 'Navarasam Matric Higher Secondary School, Palliyuthu'
    },
    languages: ['Tamil', 'English']
  },

  capabilityCards: [
    {
      title: 'AI Explorer',
      description: 'Experimenting with neural networks, AI-assisted development pipelines, and intelligent data systems.',
      icon: 'Cpu',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Full Stack Builder',
      description: 'Developing complete MERN applications, database architecture, and dynamic responsive user interfaces.',
      icon: 'Code2',
      color: 'from-violet-500 to-purple-600'
    },
    {
      title: 'Data & Analytics Learner',
      description: 'Analyzing datasets, extracting patterns, and visualizing insights for business intelligence.',
      icon: 'BarChart3',
      color: 'from-indigo-500 to-cyan-600'
    },
    {
      title: 'IoT Explorer',
      description: 'Integrating hardware sensors with real-time software systems for safety and alert mechanisms.',
      icon: 'Radio',
      color: 'from-blue-500 to-teal-500'
    },
    {
      title: 'Creative Developer',
      description: 'Crafting unique interactive web invitation experiences and futuristic digital interfaces.',
      icon: 'Sparkles',
      color: 'from-fuchsia-500 to-violet-600'
    },
    {
      title: 'Sports Enthusiast',
      description: 'Channeling discipline, speed, and teamwork as Department Sports Secretary, athlete, and hockey player.',
      icon: 'Trophy',
      color: 'from-amber-500 to-red-500'
    }
  ],

  humanSide: [
    {
      keyword: 'BUILD',
      title: 'Projects & Technology',
      subtitle: 'Hands-on Full Stack & IoT Applications',
      description: 'Building production-style web apps, hospital trackers, and LMS workflows from scratch.',
      gradient: 'from-cyan-500/20 to-blue-500/10',
      border: 'border-cyan-500/30'
    },
    {
      keyword: 'LEARN',
      title: 'AI & Data Science',
      subtitle: 'Deep Learning & Business Analytics',
      description: 'Exploring machine learning pipelines, test case automation, and data analytics.',
      gradient: 'from-purple-500/20 to-violet-500/10',
      border: 'border-purple-500/30'
    },
    {
      keyword: 'COMPETE',
      title: 'Athletics & Hockey',
      subtitle: '200m, 400m, Relay & Hockey Team',
      description: 'Chasing speed on the track and precision on the field with district and college accolades.',
      gradient: 'from-amber-500/20 to-orange-500/10',
      border: 'border-amber-500/30'
    },
    {
      keyword: 'LEAD',
      title: 'Sports Secretary',
      subtitle: 'Department Leadership & Management',
      description: 'Leading sports events, coordinating team logistics, and inspiring fellow students.',
      gradient: 'from-emerald-500/20 to-teal-500/10',
      border: 'border-emerald-500/30'
    }
  ],

  skills: [
    {
      title: 'Programming Languages',
      iconName: 'Code',
      skills: [
        { name: 'Python', level: 82, tag: 'Core / AI' },
        { name: 'SQL', level: 80, tag: 'Queries & Data' },
        { name: 'Java', level: 65, tag: 'Basic OOP' }
      ]
    },
    {
      title: 'Web & Full Stack',
      iconName: 'Globe',
      skills: [
        { name: 'HTML5 / CSS3', level: 90, tag: 'Frontend' },
        { name: 'JavaScript (ES6+)', level: 85, tag: 'Logic' },
        { name: 'React.js', level: 82, tag: 'UI Library' },
        { name: 'Node.js / Express', level: 78, tag: 'Backend' },
        { name: 'MERN Stack', level: 80, tag: 'Full Stack' }
      ]
    },
    {
      title: 'Database Management',
      iconName: 'Database',
      skills: [
        { name: 'MySQL', level: 82, tag: 'Relational' },
        { name: 'MongoDB', level: 78, tag: 'NoSQL' }
      ]
    },
    {
      title: 'AI & Data Science',
      iconName: 'Brain',
      skills: [
        { name: 'Artificial Intelligence', level: 75, tag: 'Foundations' },
        { name: 'Deep Learning', level: 72, tag: 'Neural Nets' },
        { name: 'Business Analytics', level: 78, tag: 'Data Insights' },
        { name: 'AI-Assisted Development', level: 88, tag: 'Workflow' }
      ]
    },
    {
      title: 'Software Testing & QA',
      iconName: 'CheckCircle2',
      skills: [
        { name: 'Manual Testing', level: 85, tag: 'QA' },
        { name: 'Test Case Design', level: 84, tag: 'Scenarios' },
        { name: 'Bug Reporting', level: 85, tag: 'Defect Tracking' },
        { name: 'SDLC / STLC', level: 82, tag: 'Methodology' },
        { name: 'Selenium', level: 70, tag: 'Basic Automation' },
        { name: 'Regression Testing', level: 78, tag: 'Validation' }
      ]
    },
    {
      title: 'IoT & Hardware Integrations',
      iconName: 'Cpu',
      skills: [
        { name: 'Sensor Integration', level: 75, tag: 'Hardware' },
        { name: 'Software-Hardware Sync', level: 74, tag: 'Telemetry' }
      ]
    },
    {
      title: 'Developer Tools',
      iconName: 'Wrench',
      skills: [
        { name: 'Git & GitHub', level: 85, tag: 'Version Control' },
        { name: 'VS Code', level: 90, tag: 'IDE' },
        { name: 'Postman', level: 80, tag: 'API Testing' },
        { name: 'Eclipse', level: 72, tag: 'Java IDE' }
      ]
    }
  ],

  projects: [
    {
      id: 'medtrack',
      title: 'MEDTRACK',
      category: 'academic',
      subtitle: 'Hospital Monitoring & Patient Management System',
      description: 'Production-style hospital monitoring platform covering patient records, real-time monitoring workflows, and staff dashboards.',
      detailedDescription: 'MEDTRACK simplifies hospital operations by providing an intuitive dashboard for healthcare workers to manage patient records, track vital telemetry updates, assign duty schedules, and secure administrative controls.',
      techStack: ['React', 'Node.js', 'Express', 'MySQL', 'CSS3'],
      features: [
        'Patient admission & record monitoring workflows',
        'Staff-facing dashboard with role-based access',
        'Real-time alert logging for emergency status',
        'Relational MySQL backend schema'
      ],
      aiInvolvement: 'Optimized patient queue routing logic using predictive scheduling heuristics.',
      whatWasLearned: 'State management in React, relational database schema normalization in MySQL, and REST API design in Express.',
      status: 'Completed Academic Project',
      githubUrl: 'https://github.com/DHAYANAND-S',
      liveUrl: '#',
      gradient: 'from-blue-600/20 via-cyan-600/10 to-transparent'
    },
    {
      id: 'lms-system',
      title: 'LMS SYSTEM',
      category: 'academic',
      subtitle: 'College Learning Management System',
      description: 'Full-fledged LMS designed to digitize course content delivery, student tracking, and assignment workflows.',
      detailedDescription: 'Built with the MERN stack to centralize academic activities, LMS System enables professors to upload lecture notes and assignments while allowing students to submit deliverables and check grades in real time.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
      features: [
        'Course module creation and assignment submission',
        'Student performance tracking dashboard',
        'Automated notification triggers for deadlines',
        'NoSQL MongoDB data storage'
      ],
      aiInvolvement: 'Integrated AI-assisted smart summary helper for uploaded study materials.',
      whatWasLearned: 'Full-stack MERN integration, JWT authentication flows, and dynamic UI component composition.',
      status: 'Completed Academic Project',
      githubUrl: 'https://github.com/DHAYANAND-S',
      liveUrl: '#',
      gradient: 'from-purple-600/20 via-violet-600/10 to-transparent'
    },
    {
      id: 'smart-helmet',
      title: 'SMART HELMET',
      category: 'academic',
      subtitle: 'IoT-Based Rider Safety System',
      description: 'Smart helmet safety system engineered to detect improper helmet usage and trigger immediate real-time safety alerts.',
      detailedDescription: 'Combining hardware sensors and software control logic, Smart Helmet ensures motor vehicle safety by validating helmet wear status before allowing engine ignition and broadcasting emergency coordinates upon impact.',
      techStack: ['IoT Sensors', 'Embedded C', 'Hardware Integration', 'Python', 'Alert Telemetry'],
      features: [
        'Improper wearing detection using limit & infrared sensors',
        'Accident detection sensor triggering emergency alert dispatch',
        'Hardware-to-software wireless telemetry link',
        'Low-power consumption circuit design'
      ],
      aiInvolvement: 'Basic anomaly pattern detection for accidental impact threshold validation.',
      whatWasLearned: 'Interfacing microcontrollers with hardware sensors, real-time telemetry processing, and embedded systems hardware testing.',
      status: 'Completed Prototype',
      githubUrl: 'https://github.com/DHAYANAND-S',
      liveUrl: '#',
      gradient: 'from-teal-600/20 via-emerald-600/10 to-transparent'
    },
    {
      id: 'project-helper',
      title: 'PROJECT HELPER',
      category: 'academic',
      subtitle: 'Developer Tools & Student Onboarding Platform',
      description: 'Interactive web platform assisting engineering students in discovering, connecting with, and utilizing essential developer resources.',
      detailedDescription: 'Project Helper curates open-source libraries, API documentations, code templates, and developer tools to streamline project setup for beginner and intermediate engineering students.',
      techStack: ['React', 'Node.js', 'JavaScript', 'Developer Tools API'],
      features: [
        'Categorized catalog of essential developer tools & SDKs',
        'Interactive starter template search',
        'Step-by-step installation walkthroughs',
        'Community resource bookmarking'
      ],
      aiInvolvement: 'AI-assisted developer tool recommendations based on project requirements.',
      whatWasLearned: 'Curating developer UX, RESTful API consumption, and building responsive search filters.',
      status: 'Active Builder Tool',
      githubUrl: 'https://github.com/DHAYANAND-S',
      liveUrl: '#',
      gradient: 'from-indigo-600/20 via-blue-600/10 to-transparent'
    }
  ] as Project[],

  aiLabProjects: [
    {
      id: 'ai-web-gen',
      title: 'AI-ASSISTED CREATIVE GENERATOR',
      category: 'ai',
      subtitle: 'Generative Design & Layout Assistant',
      description: 'Leveraged generative AI workflows to create interactive, customized online invitation web experiences and landing pages.',
      detailedDescription: 'Explored prompt engineering, structural HTML/CSS synthesis, and interactive component generation to produce polished web experiences efficiently.',
      techStack: ['Python', 'OpenAI/Gemini APIs', 'React', 'Tailwind CSS'],
      features: [
        'AI prompt parsing to layout JSON structure',
        'Automated theme color palette recommendation',
        'Instant web page section layout scaffolding'
      ],
      aiInvolvement: 'Core generative synthesis of layout components and contextual text content generation.',
      whatWasLearned: 'Effective prompt engineering, structured AI output parsing, and rapid prototyping workflows.',
      status: 'Lab Experiment',
      githubUrl: 'https://github.com/DHAYANAND-S',
      liveUrl: '#',
      gradient: 'from-cyan-500/20 to-purple-500/10'
    },
    {
      id: 'deep-learning-classifier',
      title: 'TELEMETRY ANOMALY DETECTOR',
      category: 'ai',
      subtitle: 'Neural Network Data Classifier',
      description: 'Trained deep learning classification models during internship at Trios Technologies to detect data anomalies.',
      detailedDescription: 'Implemented multi-layer perceptron neural networks in Python to process numeric telemetry streams and identify outlier data entries.',
      techStack: ['Python', 'PyTorch / TensorFlow', 'Pandas', 'NumPy', 'Matplotlib'],
      features: [
        'Dataset cleaning and normal distribution scaling',
        'Neural network model evaluation with loss curve tracking',
        'Confusion matrix and metric report visualization'
      ],
      aiInvolvement: 'Deep Neural Network training with loss optimization.',
      whatWasLearned: 'Hyperparameter tuning, activation function selection, and overfitting prevention techniques.',
      status: 'Internship Research',
      githubUrl: 'https://github.com/DHAYANAND-S',
      liveUrl: '#',
      gradient: 'from-purple-500/20 to-blue-500/10'
    }
  ] as Project[],

  creativeProjects: [
    {
      id: 'invitation-suite',
      title: 'ONLINE INVITATION EXPERIENCE SUITE',
      category: 'creative',
      subtitle: 'Interactive Event & Celebration Digital Invitations',
      description: 'Designed and published customized digital invitation web applications featuring modern animations, music integration, RSVP forms, and event countdown timers.',
      detailedDescription: 'Combining creative web development with AI-assisted code generation, these invitations offer guests an engaging digital experience prior to events with location maps and dynamic timelines.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Framer Motion', 'AI Layout Tools'],
      features: [
        'Interactive flip-card & envelope animation transitions',
        'Dynamic countdown timer & Google Maps location embeds',
        'Real-time RSVP response logging',
        'Audio player integration for theme music'
      ],
      aiInvolvement: 'AI-assisted generation of custom animations, responsive layouts, and elegant typography pairs.',
      whatWasLearned: 'Creating smooth micro-interactions, optimizing audio load times, and designing mobile-first celebratory UX.',
      status: 'Live Creative Work',
      githubUrl: 'https://github.com/DHAYANAND-S',
      liveUrl: '#',
      gradient: 'from-fuchsia-600/20 via-pink-600/10 to-transparent'
    }
  ] as Project[],

  sports: {
    title: 'BEYOND CODE',
    subtitle: 'Speed. Discipline. Teamwork. Consistency.',
    bio: 'Extracurricular engagement builds physical endurance, tactical mental resilience, and leadership skills that translate directly into software engineering and project management.',
    leadership: {
      role: 'Department Sports Secretary',
      institution: 'Department of Artificial Intelligence & Data Science, Nandha Engineering College',
      responsibilities: [
        'Leading inter-departmental sports tournament representation',
        'Coordinating track & field events, relays, and hockey team selection',
        'Mentoring junior athletes and promoting sportsmanship across campus'
      ]
    },
    achievements: [
      {
        id: 'school-400m',
        title: '400m Best Timing Achievement',
        level: 'School',
        category: 'Athletics',
        description: 'Achieved top timing in school & zonal track events for the 400m sprint event.',
        icon: 'Zap'
      },
      {
        id: 'district-3rd',
        title: 'District Level 3rd Place',
        level: 'District',
        category: 'Athletics',
        description: 'Secured 3rd Position in District Level Athletics Championship representing school team.',
        icon: 'Medal'
      },
      {
        id: 'college-200m-2nd',
        title: 'College 200m — 2nd Place',
        level: 'College',
        category: 'Athletics',
        description: 'Awarded 2nd Place in the 200m sprint event at Nandha Engineering College Annual Sports Meet.',
        icon: 'Trophy'
      },
      {
        id: 'college-200m-best',
        title: 'College 200m Best Timing',
        level: 'College',
        category: 'Athletics',
        description: 'Recognized for top personal best timing performance in college 200m athletics finals.',
        icon: 'Flame'
      },
      {
        id: 'sports-sec',
        title: 'Department Sports Secretary',
        level: 'Leadership',
        category: 'Leadership',
        description: 'Elected Department Sports Secretary to lead and manage sports initiatives.',
        icon: 'Crown'
      }
    ] as Achievement[],
    interests: ['Athletics', '200m Sprint', '400m Sprint', 'Relay Team', 'Hockey Player']
  },

  experiences: [
    {
      id: 'cognifyz-frontend',
      company: 'Cognifyz Technologies',
      role: 'Frontend Developer Intern',
      period: 'Jan 2026',
      location: 'Remote / Virtual',
      description: [
        'Developed interactive, responsive web user interface components using HTML, CSS, JavaScript, and React.',
        'Implemented modern UI design principles, responsive layouts, and cross-browser testing validation.',
        'Collaborated with development leads to optimize frontend web application load speeds.'
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Frontend UI'],
      type: 'internship'
    },
    {
      id: 'cognifyz-analytics',
      company: 'Cognifyz Technologies',
      role: 'Business Analytics Intern',
      period: 'Jan 2026',
      location: 'Remote / Virtual',
      description: [
        'Analyzed dataset distributions and performed exploratory data analysis (EDA) for business performance metrics.',
        'Built descriptive data visualizations and summarized statistical findings into actionable reports.',
        'Utilized data filtering and transformation techniques to support data-driven decision making.'
      ],
      skills: ['Business Analytics', 'Data Analysis', 'Python', 'SQL', 'Data Visualization'],
      type: 'internship'
    },
    {
      id: 'ether-ai',
      company: 'Ether Infotech',
      role: 'Artificial Intelligence Intern',
      period: 'Dec 2025 – Jan 2026',
      location: 'Coimbatore / Erode, India',
      description: [
        'Gained practical exposure to Artificial Intelligence concepts, machine learning algorithms, and data preprocessing.',
        'Worked on sample ML pipelines, model validation metrics, and feature engineering tasks.',
        'Explored real-world application scenarios of AI in modern software development.'
      ],
      skills: ['Artificial Intelligence', 'Machine Learning', 'Python', 'Data Preprocessing'],
      type: 'internship'
    },
    {
      id: 'trios-dl',
      company: 'Trios Technologies Pvt. Ltd.',
      role: 'Deep Learning Intern',
      period: 'Jun 2025 – Jul 2025',
      location: 'Tamil Nadu, India',
      description: [
        'Studied neural network architectures, backpropagation algorithms, and deep learning framework implementations.',
        'Assisted in building neural classification pipelines and evaluating loss curve metrics on sample datasets.',
        'Documented experimental results and hyperparameter tuning observations.'
      ],
      skills: ['Deep Learning', 'Neural Networks', 'Python', 'PyTorch / TensorFlow'],
      type: 'internship'
    }
  ] as ExperienceItem[],

  certifications: [
    {
      id: 'ibm-data-analytics',
      title: 'Introduction to Data Analytics',
      issuer: 'IBM via Coursera',
      platform: 'Coursera',
      date: 'Verified',
      badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-500/10'
    },
    {
      id: 'cognifyz-cert',
      title: 'Internship Completion Certificate',
      issuer: 'Cognifyz Technologies',
      platform: 'Frontend & Business Analytics',
      date: 'Jan 2026',
      badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10'
    },
    {
      id: 'trios-cert',
      title: 'Deep Learning Certification',
      issuer: 'Trios Technologies Pvt. Ltd.',
      platform: 'Deep Learning Practical Training',
      date: 'Jul 2025',
      badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-500/10'
    },
    {
      id: 'ether-cert',
      title: 'Artificial Intelligence Certification',
      issuer: 'Ether Infotech',
      platform: 'AI Internship Program',
      date: 'Jan 2026',
      badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
    }
  ] as Certification[],

  codingProfiles: [
    {
      name: 'GitHub',
      username: 'DHAYANAND-S',
      url: 'https://github.com/DHAYANAND-S',
      icon: 'Github',
      tag: 'Repositories & Projects',
      color: 'hover:border-zinc-400 hover:shadow-zinc-500/20'
    },
    {
      name: 'LinkedIn',
      username: 'Dhayanand S',
      url: 'https://www.linkedin.com/in/dhayanand-s?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      icon: 'Linkedin',
      tag: 'Professional Network',
      color: 'hover:border-blue-500 hover:shadow-blue-500/20'
    },
    {
      name: 'LeetCode',
      username: '2vS7OCYZCW',
      url: 'https://leetcode.com/u/2vS7OCYZCW/',
      icon: 'Code2',
      tag: 'DSA Problem Solving',
      color: 'hover:border-amber-500 hover:shadow-amber-500/20'
    },
    {
      name: 'HackerRank',
      username: 'dhayanand844',
      url: 'https://www.hackerrank.com/profile/dhayanand844',
      icon: 'Terminal',
      tag: 'Coding Certifications & Challenges',
      color: 'hover:border-emerald-500 hover:shadow-emerald-500/20'
    }
  ]
};
