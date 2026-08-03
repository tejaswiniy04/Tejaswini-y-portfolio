import type { Project, SkillCategory, ExperienceItem, Certification, LeadershipActivity } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Tejaswini Y',
  role: 'Data Analyst | AIML Specialist | Data Visualization & Insights',
  tagline: 'Transforming complex datasets into actionable business insights with SQL, Python, Power BI, Tableau, and Machine Learning.',
  phone: '+91 9036877702',
  email: 'tejaswini.y2004teju@gmail.com',
  location: 'Bengaluru, Karnataka, India',
  github: 'https://github.com/tejaswiniy04',
  linkedin: 'https://linkedin.com/in/tejaswini-y-80a93025a',
  instagram: 'https://www.instagram.com/tejaswini___y/?hl=en',
  whatsapp: '+91 9036877702',
  whatsappUrl: 'https://wa.me/919036877702',
  status: 'Available for Data Analyst & BI Roles',
  summary: `I am a passionate Data Analyst & AIML Specialist dedicated to turning complex data into clear, compelling business stories. Skilled in SQL, Python, Power BI, and Machine Learning, I design intuitive dashboards and analytics pipelines that drive smart decisions. Fueled by curiosity, precision, and a creative problem-solving mindset, I bring fresh energy and data-backed value to every challenge.`,
  education: {
    institution: 'Acharya Institute of Technology',
    degree: 'Bachelor of Engineering (B.E.), Artificial Intelligence & Machine Learning',
    period: '2022 – 2026',
    cgpa: '8.41 / 10',
    history: [
      {
        institution: 'Acharya Institute of Technology',
        degree: 'B.E. in Artificial Intelligence & Machine Learning',
        period: '2022 – 2026',
        grade: '8.41 CGPA',
        details: 'Specializing in Data Analytics, Machine Learning algorithms, SQL Databases, Data Visualization (Power BI/Tableau), and Computer Vision.'
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
    { label: 'Academic CGPA', value: '8.41 / 10' },
    { label: 'Primary Specialization', value: 'Data Analytics & ML' },
    { label: 'PUC Score', value: '91.67%' },
    { label: 'Analytics Stack', value: 'Power BI + SQL + Python' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'sustainable-energy-sdg7',
    title: 'Sustainable Energy Forecasting & Automated Alert System',
    subtitle: 'Django & ML Dashboard for Global SDG-7 Indicator Analytics',
    category: 'ai-ml',
    featured: true,
    description: 'Built a Django-based interactive dashboard to analyze global SDG-7 energy indicators using machine learning. Implemented and compared 7 ML models using MSE and accuracy.',
    longDescription: `A comprehensive data science & web application developed to analyze global SDG-7 energy metrics. Features interactive visualizations, comparative analysis of 7 machine learning models (CatBoost, XGBoost, LightGBM, Random Forest, etc.) based on MSE and accuracy, and automated email alerts triggered by forecasted thresholds for energy access, renewable adoption, and CO₂ emissions.`,
    technologies: ['Python', 'Django', 'Machine Learning', 'CatBoost', 'XGBoost', 'LightGBM', 'Random Forest', 'Pandas', 'Plotly', 'Email Automation', 'SDG Analytics'],
    metrics: [
      { label: 'ML Models Compared', value: '7 Algorithms' },
      { label: 'Web Backend', value: 'Django Dashboard' },
      { label: 'Alerting System', value: 'Automated Email Alerts' }
    ],
    keyFeatures: [
      'Built a Django-based interactive dashboard to analyze global SDG-7 energy indicators using machine learning',
      'Implemented and compared 7 ML models using Mean Squared Error (MSE) and accuracy metrics',
      'Developed automated email alerts triggered by forecasted thresholds for energy access, renewable adoption, and CO₂ emissions',
      'Engineered interactive visualization components with Plotly and Pandas for clear data insight'
    ],
    architectureDetails: 'SDG-7 Dataset ➔ Pandas/ML Pipeline (CatBoost/XGBoost/LightGBM) ➔ Django Backend ➔ Plotly Dashboard & Email Alerts',
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
    title: 'Gen-AI Synthetic Customer & Pricing Scenario Simulator',
    subtitle: 'Generative AI Market Simulation & Dynamic Elasticity Modeling Engine',
    category: 'ai-ml',
    featured: true,
    description: 'Engineered an AI-driven market simulator that generates synthetic customer personas and models dynamic pricing scenarios to evaluate price elasticity and revenue optimization.',
    longDescription: `A Generative AI simulation platform that generates behavioral synthetic customer personas using LLMs and agentic prompting. Simulates purchasing decisions under diverse pricing rules, market shocks, and promotional strategies to forecast revenue outcomes, price elasticity, and customer lifetime value (LTV) with high fidelity.`,
    technologies: ['Python', 'Generative AI', 'LLM Agents', 'Pandas', 'Scikit-Learn', 'FastAPI', 'Prompt Engineering', 'Monte Carlo Simulation'],
    metrics: [
      { label: 'Simulated Personas', value: '10,000+' },
      { label: 'Pricing Scenarios', value: 'Dynamic Elasticity' },
      { label: 'Simulation Engine', value: 'Agentic Generative AI' }
    ],
    keyFeatures: [
      'Generated synthetic customer personas with rich demographic, behavioral, and price-sensitivity traits using LLMs',
      'Simulated agentic decision-making under multi-tiered pricing, discount structures, and macroeconomic variables',
      'Calculated price elasticity of demand and revenue optimization curves across synthetic market segments',
      'Built interactive scenario modeling analytics with sensitivity heatmaps and Monte Carlo risk simulations'
    ],
    architectureDetails: 'Scenario Config ➔ Synthetic Persona Generator (LLMs) ➔ Agent Simulation Pipeline ➔ Elasticity & Revenue Modeling Engine ➔ Analytics Dashboard',
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
      { name: 'Python', level: 92, tags: ['Core', 'AI/ML', 'OpenCV', 'Django'], highlighted: true },
      { name: 'C', level: 85, tags: ['Fundamentals', 'Data Structures'], highlighted: true },
      { name: 'C++', level: 82, tags: ['OOP', 'Algorithms'], highlighted: true }
    ]
  },
  {
    title: 'Data Science & AI',
    icon: 'Brain',
    skills: [
      { name: 'Machine Learning', level: 90, tags: ['Classification', 'Regression', 'Models'], highlighted: true },
      { name: 'Deep Learning', level: 85, tags: ['Neural Networks', 'AI Foundations'], highlighted: true },
      { name: 'NLP (Natural Language Processing)', level: 84, tags: ['Text Analytics', 'Springboard'], highlighted: true }
    ]
  },
  {
    title: 'Databases & Backend',
    icon: 'Server',
    skills: [
      { name: 'SQL', level: 85, tags: ['Relational Queries', 'Database Management'], highlighted: true },
      { name: 'MongoDB', level: 80, tags: ['NoSQL Databases'], highlighted: true },
      { name: 'Django', level: 86, tags: ['Python Web Framework', 'SDG-7 Dashboard'], highlighted: true }
    ]
  },
  {
    title: 'Visualization Tools',
    icon: 'Layout',
    skills: [
      { name: 'Power BI', level: 88, tags: ['Dashboards', 'Office Master Workshop'], highlighted: true },
      { name: 'Tableau', level: 85, tags: ['Data Visualization', 'Springboard'], highlighted: true }
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: 'Cloud',
    skills: [
      { name: 'GitHub', level: 90, tags: ['Version Control', 'Repositories'], highlighted: true },
      { name: 'Jupyter Notebook', level: 92, tags: ['Data Science Lab'], highlighted: true },
      { name: 'Google Colab', level: 90, tags: ['Cloud ML Execution'], highlighted: true },
      { name: 'DevOps', level: 80, tags: ['Workflows & Pipelines'] }
    ]
  },
  {
    title: 'Office Tools',
    icon: 'Zap',
    skills: [
      { name: 'Microsoft Word', level: 90, tags: ['Documentation'], highlighted: true },
      { name: 'PowerPoint', level: 88, tags: ['Presentations'], highlighted: true },
      { name: 'Excel (Basic)', level: 82, tags: ['Spreadsheets & Data Entry'] }
    ]
  },
  {
    title: 'Soft Skills',
    icon: 'Sparkles',
    skills: [
      { name: 'Teamwork', level: 95, tags: ['Collaboration'], highlighted: true },
      { name: 'Communication', level: 92, tags: ['Interpersonal'], highlighted: true },
      { name: 'Problem-Solving', level: 94, tags: ['Analytical Thinking'], highlighted: true },
      { name: 'Time Management', level: 90, tags: ['Organization'], highlighted: true }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'B.E. Student in Artificial Intelligence & Machine Learning',
    company: 'Acharya Institute of Technology',
    location: 'Bengaluru, Karnataka, India',
    period: '2022 – 2026',
    type: 'education',
    description: 'Pursuing Bachelor of Engineering in AI & ML with a strong academic standing of 8.41 CGPA. Specializing in ML forecasting, computer vision, data analytics, and intelligent systems.',
    achievements: [
      'Maintained strong academic standing of 8.41 CGPA in Artificial Intelligence & Machine Learning',
      'Developed Sustainable Energy Forecasting (SDG-7) dashboard comparing 7 ML models',
      'Engineered Ocular Vision Computer Vision system and Gen-AI Synthetic Customer & Pricing Simulator',
      'Active participant and leader in state and national cultural, theatrical, and technical initiatives'
    ],
    techStack: ['Python', 'OpenCV', 'Django', 'Machine Learning', 'CatBoost', 'Scikit-Learn', 'SQL']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Infosys Springboard: Introduction to NLP, Python & Power BI / Tableau',
    issuer: 'Infosys Springboard',
    date: 'Verified Credential',
    credentialId: 'INFOSYS-SPRINGBOARD-NLP-BI',
    skillsCovered: ['NLP', 'Python', 'Power BI', 'Tableau']
  },
  {
    title: 'Coursera: AI for Everyone & Python Data Structures',
    issuer: 'Coursera / DeepLearning.AI',
    date: 'Verified Credential',
    credentialId: 'COURSERA-AI-PY',
    skillsCovered: ['AI Foundations', 'Python Data Structures', 'Algorithms']
  },
  {
    title: 'Coursera: Machine Learning with Python & Modern Robotics',
    issuer: 'Coursera',
    date: 'Verified Credential',
    credentialId: 'COURSERA-ML-ROBOTICS',
    skillsCovered: ['Machine Learning', 'Robot Motion Foundations', 'Python ML']
  },
  {
    title: 'Coursera: Arduino Platform, C & Introduction to IoT / Embedded Systems',
    issuer: 'Coursera',
    date: 'Verified Credential',
    credentialId: 'COURSERA-IOT-ARDUINO',
    skillsCovered: ['Arduino', 'C Programming', 'IoT', 'Embedded Systems']
  },
  {
    title: 'LinkedIn Learning: ML Foundations & Artificial Intelligence Foundations',
    issuer: 'LinkedIn Learning',
    date: 'Verified Credential',
    credentialId: 'LINKEDIN-ML-FOUNDATIONS',
    skillsCovered: ['Statistics', 'Probability', 'Calculus', 'Linear Algebra', 'ML Foundations']
  },
  {
    title: 'LinkedIn Learning: Microsoft 365 Copilot & Social Media Marketing',
    issuer: 'LinkedIn Learning',
    date: 'Verified Credential',
    credentialId: 'LINKEDIN-COPILOT-MARKETING',
    skillsCovered: ['Microsoft 365 Copilot', 'Social Media Strategy', 'Digital Tools']
  },
  {
    title: 'Simplilearn: Introduction to Computer Networking',
    issuer: 'Simplilearn',
    date: 'Verified Credential',
    credentialId: 'SIMPLILEARN-NETWORKING',
    skillsCovered: ['Computer Networking', 'Network Protocols', 'IT Infrastructure']
  },
  {
    title: 'Power BI Workshop Certificate',
    issuer: 'Office Master',
    date: 'Verified Credential',
    credentialId: 'OFFICE-MASTER-POWERBI',
    skillsCovered: ['Power BI', 'Dashboard Creation', 'Data Analysis']
  }
];

export const LEADERSHIP_ACTIVITIES: LeadershipActivity[] = [
  {
    role: 'State & National Championship Theater Artist',
    organization: 'Uthkarsh Abhinaya Theater Group',
    period: '2022 – Present',
    achievement: 'Member of Uthkarsh Abhinaya theater group; participated in various State and National-level competitions and won the championship twice.'
  },
  {
    role: 'Event Volunteer',
    organization: 'VTU Srushti 2025 Event',
    period: '2025',
    achievement: 'Volunteered for the VTU Srushti 2025 Event, coordinating technical showcases and student innovation exchanges.'
  },
  {
    role: 'Active Community Volunteer',
    organization: 'Kannada Vedike Community Initiatives',
    period: '2022 – Present',
    achievement: 'Active volunteer contributing to campus cultural, linguistic, and community development initiatives.'
  }
];
