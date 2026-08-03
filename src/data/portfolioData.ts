import type { Project, SkillCategory, ExperienceItem, Certification, LeadershipActivity } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Tejaswini Y',
  role: 'AI & Machine Learning Graduate | Full Stack Developer & AIML Specialist',
  tagline: 'AI & Machine Learning graduate with hands-on experience in ML, Deep Learning, NLP, Generative AI, and Full-Stack Development.',
  phone: '+91 9036877702',
  email: 'tejaswini.y2004teju@gmail.com',
  location: 'Bengaluru, Karnataka, India',
  github: 'https://github.com/tejaswiniy04',
  linkedin: 'https://linkedin.com/in/tejaswini-y-80a93025a',
  instagram: 'https://www.instagram.com/tejaswini___y/?hl=en',
  whatsapp: '+91 9036877702',
  whatsappUrl: 'https://wa.me/919036877702',
  status: 'Available for AI, ML & Software Engineering Roles',
  summary: `AI & Machine Learning graduate with hands-on experience in machine learning, deep learning, NLP, Generative AI, and predictive modeling. Passionate about AI research, model experimentation, and developing intelligent systems using Python, DevOps, Google Gemini AI, Django, Git, TensorFlow, PyTorch, and Scikit-learn. Interested in contributing to AI research through experimentation, model evaluation, and innovative problem-solving.`,
  education: {
    institution: 'Acharya Institute of Technology',
    degree: 'Bachelor of Engineering (B.E.), Artificial Intelligence & Machine Learning',
    period: '2022 – 2026',
    cgpa: '8.49 / 10',
    history: [
      {
        institution: 'Acharya Institute of Technology',
        degree: 'B.E. in Artificial Intelligence & Machine Learning',
        period: '2022 – 2026',
        grade: '8.49 CGPA',
        details: 'Specializing in Machine Learning, Deep Learning, NLP, Generative AI, SQL Databases, Data Visualization, and Computer Vision.'
      },
      {
        institution: 'BGS Gurukula IND PU College',
        degree: 'Pre-University Certificate (PUC - PCMB)',
        period: '2022',
        grade: '91.67%',
        details: 'Physics, Chemistry, Mathematics, and Biology with academic distinction.'
      },
      {
        institution: 'Government Girls PU College',
        degree: 'Secondary School Leaving Certificate (SSLC - 10th Grade)',
        period: '2019 – 2020',
        grade: '85.44%',
        details: 'High school education with strong foundations in mathematics and science.'
      }
    ]
  },
  stats: [
    { label: 'Academic CGPA', value: '8.49 / 10' },
    { label: 'Primary Specialization', value: 'AI & Machine Learning' },
    { label: 'PUC Score', value: '91.67%' },
    { label: 'Core AI Stack', value: 'Python + PyTorch + Gemini' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'sustainable-energy-sdg7',
    title: 'Sustainable Energy Forecasting & Automated Alert System (SDG-7)',
    subtitle: 'Django & ML Dashboard for Global SDG-7 Indicator Analytics',
    category: 'ai-ml',
    featured: true,
    description: 'Conducted comparative research on seven machine learning algorithms for sustainable energy forecasting. Evaluated models using MSE and R² metrics. Developed an AI-powered dashboard with automated alert generation.',
    longDescription: `Conducted comparative research on seven machine learning algorithms for sustainable energy forecasting. Evaluated models using MSE and R² metrics to identify the most accurate forecasting approach. Developed an AI-powered dashboard with automated alert generation for SDG-7 monitoring.`,
    technologies: ['Python', 'Django', 'Machine Learning', 'Random Forest', 'Pandas', 'Plotly', 'Data Visualization', 'Automated Alerting'],
    metrics: [
      { label: 'ML Research', value: '7 Algorithms Evaluated' },
      { label: 'Metrics Evaluated', value: 'MSE & R² Metrics' },
      { label: 'Alerting System', value: 'Automated Alert Generation' }
    ],
    keyFeatures: [
      'Conducted comparative research on 7 machine learning algorithms for sustainable energy forecasting',
      'Evaluated model performance rigorously using Mean Squared Error (MSE) and R² metrics',
      'Developed an AI-powered dashboard with automated alert generation for SDG-7 monitoring',
      'Engineered interactive visualization components with Plotly and Pandas for clear energy insights'
    ],
    architectureDetails: 'SDG-7 Dataset ➔ Pandas/ML Pipeline ➔ Django Backend ➔ Plotly Dashboard & Automated Alerts',
    githubUrl: 'https://github.com/tejaswiniy04',
    liveUrl: '#',
    imageBgGradient: 'linear-gradient(135deg, #059669 0%, #0d9488 50%, #0891b2 100%)',
    iconName: 'Sparkles'
  },
  {
    id: 'ocular-vision-eye-analysis',
    title: 'Enhancement of Eye Analysis: Ocular Vision',
    subtitle: 'Computer Vision System for Ocular Feature Detection & Analysis',
    category: 'ai-ml',
    featured: true,
    description: 'Developed a Computer Vision-based project focused on detecting and analyzing ocular features using advanced image processing techniques.',
    longDescription: `A computer vision project designed for ocular feature detection and biometric image analysis. Built using OpenCV and Haar Cascade classifiers with custom image processing routines and Matplotlib visualization pipelines.`,
    technologies: ['Python', 'OpenCV', 'Haar Cascade Classifier', 'Matplotlib', 'Computer Vision', 'Image Processing'],
    metrics: [
      { label: 'Vision Engine', value: 'OpenCV' },
      { label: 'Detection Model', value: 'Haar Cascade Classifier' },
      { label: 'Visualization', value: 'Matplotlib' }
    ],
    keyFeatures: [
      'Developed a Computer Vision project focused on detecting and analyzing ocular features',
      'Utilized Haar Cascade classifiers and OpenCV for real-time ocular region segmentation',
      'Applied advanced image processing techniques for noise reduction and landmark extraction',
      'Visualized feature detection results with custom Matplotlib analysis plots'
    ],
    architectureDetails: 'Input Image Stream ➔ Preprocessing ➔ OpenCV Haar Cascade Classifier ➔ Ocular Feature Extraction ➔ Matplotlib Visualizer',
    githubUrl: 'https://github.com/tejaswiniy04',
    liveUrl: '#',
    imageBgGradient: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%)',
    iconName: 'Eye'
  },
  {
    id: 'genai-synthetic-customer-pricing-simulator',
    title: 'Gen AI Synthetic Customer & Pricing Scenario Simulator',
    subtitle: 'Generative AI Market Simulation & Dynamic Elasticity Analytics Engine',
    category: 'ai-ml',
    featured: true,
    description: 'Developed an AI-powered pricing and revenue scenario simulator tailored for the Indian SaaS market using Google Gemini API, JavaScript (ES6), and Python (Streamlit/Pandas).',
    longDescription: `Developed an AI-powered pricing and revenue scenario simulator tailored for the Indian SaaS market using Google Gemini API, JavaScript (ES6), and Python (Streamlit/Pandas). Features interactive Monte Carlo customer persona simulations, real-time price elasticity analytics with dynamic Chart.js/Plotly charts, and automated executive PDF report generation.`,
    technologies: ['Python', 'Google Gemini API', 'JavaScript (ES6)', 'Streamlit', 'Chart.js', 'Pandas', 'Plotly', 'ReportLab', 'OpenPyXL', 'Monte Carlo Simulation'],
    metrics: [
      { label: 'AI Engine', value: 'Google Gemini API' },
      { label: 'Simulation Type', value: 'Monte Carlo Personas' },
      { label: 'Reporting', value: 'Automated Executive PDF' }
    ],
    keyFeatures: [
      'Developed an AI-powered pricing and revenue scenario simulator tailored for the Indian SaaS market',
      'Integrated Google Gemini API, JavaScript (ES6), and Python (Streamlit/Pandas) for seamless scenario execution',
      'Engineered interactive Monte Carlo customer persona simulations for dynamic elasticity analytics',
      'Built dynamic Chart.js/Plotly visualization charts and automated executive PDF report generation using ReportLab'
    ],
    architectureDetails: 'Scenario Inputs ➔ Google Gemini API & Monte Carlo Engine ➔ Streamlit/Chart.js Analytics ➔ ReportLab PDF Generator',
    githubUrl: 'https://github.com/tejaswiniy04',
    liveUrl: '#',
    imageBgGradient: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 50%, #06b6d4 100%)',
    iconName: 'Cpu'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    icon: 'Code',
    skills: [
      { name: 'Python', level: 95, tags: ['Core', 'AI/ML', 'TensorFlow', 'PyTorch', 'Django'], highlighted: true },
      { name: 'C', level: 85, tags: ['Fundamentals', 'Data Structures'], highlighted: true },
      { name: 'C++', level: 85, tags: ['OOP', 'Algorithms'], highlighted: true }
    ]
  },
  {
    title: 'Data Science & AI',
    icon: 'Brain',
    skills: [
      { name: 'Machine Learning', level: 92, tags: ['Classification', 'Regression', 'Scikit-Learn'], highlighted: true },
      { name: 'Deep Learning', level: 88, tags: ['TensorFlow', 'PyTorch', 'Neural Networks'], highlighted: true },
      { name: 'NLP & Generative AI', level: 90, tags: ['Google Gemini API', 'Text Analytics', 'Predictive Modeling'], highlighted: true }
    ]
  },
  {
    title: 'Databases & Backend',
    icon: 'Server',
    skills: [
      { name: 'SQL', level: 88, tags: ['Relational Queries', 'Database Management'], highlighted: true },
      { name: 'MongoDB', level: 82, tags: ['NoSQL Databases'], highlighted: true },
      { name: 'Django', level: 88, tags: ['Full Stack Backend', 'Web Applications'], highlighted: true }
    ]
  },
  {
    title: 'Data Visualization',
    icon: 'Layout',
    skills: [
      { name: 'Power BI', level: 88, tags: ['Dashboards', 'Reports'], highlighted: true },
      { name: 'Tableau', level: 85, tags: ['Data Visualization'], highlighted: true },
      { name: 'Plotly & Chart.js', level: 90, tags: ['Interactive Charts'], highlighted: true }
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: 'Cloud',
    skills: [
      { name: 'Git & GitHub', level: 90, tags: ['Version Control'], highlighted: true },
      { name: 'Jupyter Notebook & Google Colab', level: 94, tags: ['AI/ML Experimentation'], highlighted: true },
      { name: 'DevOps', level: 82, tags: ['CI/CD & Deployment'], highlighted: true }
    ]
  },
  {
    title: 'Office Tools',
    icon: 'Zap',
    skills: [
      { name: 'Microsoft Excel', level: 88, tags: ['Data Analysis & Spreadsheets'], highlighted: true },
      { name: 'PowerPoint', level: 90, tags: ['Presentations'], highlighted: true },
      { name: 'Microsoft Word', level: 90, tags: ['Documentation'] }
    ]
  },
  {
    title: 'Soft Skills',
    icon: 'Sparkles',
    skills: [
      { name: 'Teamwork', level: 95, tags: ['Collaboration'], highlighted: true },
      { name: 'Communication', level: 92, tags: ['Interpersonal'], highlighted: true },
      { name: 'Problem Solving', level: 95, tags: ['Innovative Thinking'], highlighted: true },
      { name: 'Time Management', level: 90, tags: ['Organization'], highlighted: true }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Full Stack Developer',
    company: 'Mindset IT Solutions',
    location: 'Bengaluru, Karnataka, India',
    period: 'Present',
    type: 'work',
    description: 'Built responsive full-stack web applications using frontend and backend technologies. Collaborated with cross-functional teams to build, test, debug, and deploy web application features.',
    achievements: [
      'Built responsive full-stack web applications using modern frontend and backend technologies',
      'Collaborated with engineering team to build, test, debug, and deploy high-performance web application features',
      'Implemented robust APIs, database integrations, and interactive user interfaces'
    ],
    techStack: ['Python', 'JavaScript', 'Django', 'SQL', 'Git', 'HTML/CSS']
  },
  {
    role: 'B.E. Student in Artificial Intelligence & Machine Learning',
    company: 'Acharya Institute of Technology',
    location: 'Bengaluru, Karnataka, India',
    period: '2022 – 2026',
    type: 'education',
    description: 'Pursuing Bachelor of Engineering in AI & ML with a strong academic standing of 8.49 CGPA. Specializing in ML research, deep learning, NLP, computer vision, and full-stack development.',
    achievements: [
      'Maintained strong academic standing of 8.49 CGPA in Artificial Intelligence & Machine Learning',
      'Developed Sustainable Energy Forecasting (SDG-7) dashboard comparing 7 ML models',
      'Engineered Ocular Vision Computer Vision system and Gen AI Synthetic Customer & Pricing Simulator',
      'Active leader and participant in state and national cultural, theatrical, and technical initiatives'
    ],
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'Django', 'Machine Learning', 'SQL']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    date: 'Verified Credential',
    credentialId: 'GOOGLE-DATA-ANALYTICS',
    skillsCovered: ['Data Analytics', 'Data Visualization', 'SQL', 'R', 'Spreadsheets']
  },
  {
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft & LinkedIn',
    date: 'Verified Credential',
    credentialId: 'MS-LINKEDIN-GENAI',
    skillsCovered: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI Ethics']
  },
  {
    title: 'IBM - AI Engineering',
    issuer: 'IBM',
    date: 'Verified Credential',
    credentialId: 'IBM-AI-ENGINEERING',
    skillsCovered: ['Machine Learning', 'Deep Learning', 'Keras', 'PyTorch', 'TensorFlow']
  },
  {
    title: 'Data Engineering Foundations Professional Certificate',
    issuer: 'IBM / Coursera',
    date: 'Verified Credential',
    credentialId: 'DATA-ENGINEERING-FOUNDATIONS',
    skillsCovered: ['Data Pipelines', 'ETL', 'Relational Databases', 'SQL', 'Python']
  },
  {
    title: 'Infosys Power BI & Infosys Tableau',
    issuer: 'Infosys Springboard',
    date: 'Verified Credential',
    credentialId: 'INFOSYS-POWERBI-TABLEAU',
    skillsCovered: ['Power BI', 'Tableau', 'Data Visualization', 'Dashboard Analytics']
  },
  {
    title: 'Machine Learning with Python',
    issuer: 'Coursera / IBM',
    date: 'Verified Credential',
    credentialId: 'ML-WITH-PYTHON',
    skillsCovered: ['Machine Learning', 'Scikit-Learn', 'Classification', 'Regression', 'Clustering']
  },
  {
    title: 'Power BI Workshop Certificates',
    issuer: 'Office Master',
    date: 'Verified Credential',
    credentialId: 'POWERBI-WORKSHOP',
    skillsCovered: ['Power BI', 'DAX', 'Dashboard Design', 'Business Intelligence']
  }
];

export const LEADERSHIP_ACTIVITIES: LeadershipActivity[] = [
  {
    role: 'Acharya Folk Dance Team Head',
    organization: 'Utkarsh-Rhythmanya',
    period: '2022 – Present',
    achievement: 'Led the Acharya Folk dance team (Utkarsh-Rhythmanya) in managing rehearsals, choreography, and performance strategy for major inter-college competitions.'
  },
  {
    role: 'National & State-Level Theater Winner',
    organization: 'Utkarsh-Abhinaya Theatre Club',
    period: '2022 – Present',
    achievement: 'National and State-level participant and winner with Utkarsh-Abhinaya Theatre Club, representing Acharya Institute of Technology across prominent competitions.'
  },
  {
    role: 'Active Community Member',
    organization: 'Acharya Kannada Vedike',
    period: '2022 – Present',
    achievement: 'Active member contributing to campus cultural, linguistic, and community engagement initiatives.'
  }
];

