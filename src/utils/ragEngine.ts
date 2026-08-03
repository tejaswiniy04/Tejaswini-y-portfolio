import { GoogleGenAI } from '@google/genai';
import { PERSONAL_INFO, CERTIFICATIONS, LEADERSHIP_ACTIVITIES } from '../data/portfolioData';

export const TEJU_PORTFOLIO_SYSTEM_INSTRUCTION = `
You are Teju AI, an intelligent AI assistant powered by Gemini for Tejaswini Y's Data Analyst & AIML portfolio.
Your role is to answer questions about Tejaswini accurately, professionally, and engagingly.

VERIFIED PROFILE OF TEJASWINI Y:
- Name: ${PERSONAL_INFO.name}
- Role: ${PERSONAL_INFO.role}
- Location: ${PERSONAL_INFO.location}
- Email: ${PERSONAL_INFO.email}
- Phone & WhatsApp: ${PERSONAL_INFO.phone} (WhatsApp: https://wa.me/919036877702)
- GitHub: ${PERSONAL_INFO.github}
- LinkedIn: ${PERSONAL_INFO.linkedin}
- Employment Status: ${PERSONAL_INFO.status}
- Summary: ${PERSONAL_INFO.summary}
- College & Degree: ${PERSONAL_INFO.education.degree} at ${PERSONAL_INFO.education.institution} (${PERSONAL_INFO.education.period}) with ${PERSONAL_INFO.education.cgpa} CGPA.
- Key Academic Projects:
  1. Sustainable Energy Forecasting & Automated Alert System (SDG-7) - Django, Machine Learning, CatBoost, XGBoost, LightGBM, Random Forest, Plotly, Email Automation.
  2. Enhancement of Eye Analysis: Ocular Vision - Computer Vision, OpenCV, Haar Cascade Classifier, Matplotlib.
  3. Gen-AI Synthetic Customer & Pricing Scenario Simulator - Generative AI, LLM Agents, Dynamic Price Elasticity Modeling, Monte Carlo Simulation, Python, Scikit-Learn.
- Verified Professional Certifications:
  1. ${CERTIFICATIONS[0].title} by ${CERTIFICATIONS[0].issuer}
  2. ${CERTIFICATIONS[1].title} by ${CERTIFICATIONS[1].issuer}
  3. ${CERTIFICATIONS[2].title} by ${CERTIFICATIONS[2].issuer}
  4. ${CERTIFICATIONS[3].title} by ${CERTIFICATIONS[3].issuer}
  5. ${CERTIFICATIONS[4].title} by ${CERTIFICATIONS[4].issuer}
- Leadership & Extra-Curriculars:
  1. ${LEADERSHIP_ACTIVITIES[0].role} at ${LEADERSHIP_ACTIVITIES[0].organization} (${LEADERSHIP_ACTIVITIES[0].achievement})
  2. ${LEADERSHIP_ACTIVITIES[1].role} at ${LEADERSHIP_ACTIVITIES[1].organization} (${LEADERSHIP_ACTIVITIES[1].achievement})
  3. ${LEADERSHIP_ACTIVITIES[2].role} at ${LEADERSHIP_ACTIVITIES[2].organization} (${LEADERSHIP_ACTIVITIES[2].achievement})
- Technical Stack: Python, C, C++, Machine Learning, Deep Learning, NLP, OpenCV, Haar Cascade, Django, SQL, MongoDB, Power BI, Tableau, Plotly, Matplotlib, GitHub, Jupyter Notebook, Google Colab.

RESPONSE RULES:
- Use markdown formatting with bullet points and emojis.
- Be concise, direct, helpful, and polite.
- Keep answers brief, structured, and focused strictly on what was asked.
`;

export async function askGeminiAI(userQuery: string, customApiKey?: string): Promise<string> {
  const apiKey = (customApiKey && customApiKey.trim() !== '') 
    ? customApiKey 
    : (import.meta.env.VITE_GEMINI_API_KEY || '');

  if (apiKey && apiKey.trim() !== '') {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userQuery,
        config: {
          systemInstruction: TEJU_PORTFOLIO_SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      if (response && response.text && response.text.trim().length > 0) {
        return response.text.trim();
      }
    } catch (err) {
      console.warn('Gemini API call warning, falling back to neural RAG engine:', err);
    }
  }

  // Fall back to local neural RAG engine
  return generateRAGResponse(userQuery);
}

export function generateRAGResponse(query: string): string {
  const q = query.toLowerCase().trim();

  // 1. SPECIFIC PROJECT: Sustainable Energy (SDG-7)
  if (q.includes('energy') || q.includes('sdg') || q.includes('sdg-7') || q.includes('sustainable') || q.includes('forecast') || q.includes('catboost') || q.includes('xgboost')) {
    return `⚡ **Sustainable Energy Forecasting & Automated Alert System (SDG-7)**\n\n• **Overview**: A Django-based interactive dashboard analyzing global SDG-7 energy indicators using Machine Learning.\n• **Key Features**: Compared 7 ML models (CatBoost, XGBoost, LightGBM, Random Forest, etc.) using MSE and accuracy; automated email alerts triggered by forecasted thresholds for energy access, renewable adoption, and CO₂ emissions.\n• **Tech Stack**: Python, Django, ML, CatBoost, XGBoost, LightGBM, Random Forest, Pandas, Plotly, Email Automation.`;
  }

  // 2. SPECIFIC PROJECT: Ocular Vision / Eye Analysis
  if (q.includes('eye') || q.includes('ocular') || q.includes('vision') || q.includes('haar') || q.includes('opencv')) {
    return `👁️ **Enhancement of Eye Analysis: Ocular Vision**\n\n• **Overview**: A Computer Vision project focused on detecting and analyzing ocular features using advanced image processing.\n• **Key Features**: OpenCV image segmentation, Haar Cascade classifier feature extraction, and Matplotlib visualization pipelines.\n• **Tech Stack**: Python, OpenCV, Haar Cascade Classifier, Matplotlib, Computer Vision.`;
  }

  // 3. SPECIFIC PROJECT: Gen-AI Synthetic Customer & Pricing Simulator
  if (q.includes('pricing') || q.includes('synthetic') || q.includes('simulator') || q.includes('elasticity') || q.includes('genai') || q.includes('gen-ai')) {
    return `🤖 **Gen-AI Synthetic Customer & Pricing Scenario Simulator**\n\n• **Overview**: A Generative AI market simulation platform generating behavioral synthetic customer personas using LLMs and agentic prompting.\n• **Key Features**: Simulates agentic buying decisions under multi-tiered pricing rules and market shocks to model price elasticity and revenue optimization.\n• **Tech Stack**: Python, Generative AI, LLM Agents, Pandas, Scikit-Learn, FastAPI, Prompt Engineering, Monte Carlo Simulation.`;
  }

  // 4. GENERAL PROJECTS QUERY
  if (q.includes('project') || q.includes('repo') || q.includes('built') || q.includes('code') || q.includes('work')) {
    return `🚀 **Tejaswini's Featured Engineering Projects**:\n\n1. ⚡ **Sustainable Energy Forecasting (SDG-7)** (Django, ML, CatBoost, XGBoost, LightGBM, Plotly, Email Alerts)\n2. 👁️ **Enhancement of Eye Analysis: Ocular Vision** (Python, OpenCV, Haar Cascade, Matplotlib)\n3. 🤖 **Gen-AI Synthetic Customer & Pricing Simulator** (Generative AI, LLM Agents, Price Elasticity, Monte Carlo Simulation)\n\n*Ask me about any specific project for detailed technical information!*`;
  }

  // 5. ABOUT / BIO / WHO IS TEJASWINI / OVERVIEW
  if (q.includes('who') || q.includes('about') || q.includes('bio') || q.includes('yourself') || q.includes('tejaswini') || q.includes('teju') || q.includes('summary') || q.includes('intro') || q.includes('background')) {
    return `👩‍💻 **Tejaswini Y — AI & Machine Learning Graduate & Full Stack Developer**\n\n• **Role**: AI & Machine Learning Graduate | Full Stack Developer @ Mindset IT Solutions\n• **Education**: B.E. in Artificial Intelligence & Machine Learning at **Acharya Institute of Technology** (**8.49 CGPA**, 2022–2026)\n• **Core Stack**: Python (TensorFlow, PyTorch, Scikit-Learn), Generative AI (Gemini API), Full-Stack (Django, JS, SQL), Power BI, DevOps\n• **Location**: Bengaluru, Karnataka, India\n• **Contact**: tejaswini.y2004teju@gmail.com | +91 9036877702`;
  }

  // 6. EDUCATION / COLLEGE / CGPA
  if (q.includes('education') || q.includes('cgpa') || q.includes('college') || q.includes('university') || q.includes('degree') || q.includes('marks') || q.includes('acharya') || q.includes('puc') || q.includes('sslc') || q.includes('school')) {
    return `🎓 **Education & Academic Standing**:\n\n• **Bachelor of Engineering (B.E.)**: Artificial Intelligence & Machine Learning at **Acharya Institute of Technology** (2022 – 2026) | **8.49 CGPA**\n• **PUC (12th Grade)**: BGS Gurukula IND PU College (2022) | **91.67%** (PCMB)\n• **SSLC (10th Grade)**: Government Girls PU College (2019 – 2020) | **85.44%**`;
  }

  // 7. SKILLS / TECH STACK
  if (q.includes('skill') || q.includes('stack') || q.includes('python') || q.includes('django') || q.includes('opencv') || q.includes('power bi') || q.includes('c++') || q.includes('language')) {
    return `🛠️ **Technical Stack & Skills Matrix**:\n\n• 💻 **Programming**: Python, C, C++\n• 🧠 **Data Science & AI**: Machine Learning, Deep Learning, NLP, Generative AI (Google Gemini API, TensorFlow, PyTorch, Scikit-Learn)\n• ⚡ **Databases & Backend**: SQL, MongoDB, Django Framework\n• 📊 **Visualization**: Power BI, Tableau, Plotly, Chart.js\n• 📦 **Tools & Tech**: Git, GitHub, Jupyter Notebook, Google Colab, DevOps`;
  }

  // 8. WHATSAPP
  if (q.includes('whatsapp') || q.includes('wa') || q.includes('chat') || q.includes('message')) {
    return `💬 **Tejaswini's Official WhatsApp Contact**:\n\n• **Number**: [+91 9036877702](https://wa.me/919036877702)\n• **Direct Chat**: [Click here to chat on WhatsApp](https://wa.me/919036877702)`;
  }

  // 9. CONTACT / EMAIL / PHONE / LINKEDIN / GITHUB
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('hire') || q.includes('github') || q.includes('linkedin') || q.includes('number')) {
    return `📬 **Get in Touch with Tejaswini Y**:\n\n• ✉️ **Email**: [tejaswini.y2004teju@gmail.com](mailto:tejaswini.y2004teju@gmail.com)\n• 📞 **Phone & WhatsApp**: [+91 9036877702](https://wa.me/919036877702)\n• 🐙 **GitHub**: [github.com/tejaswiniy04](https://github.com/tejaswiniy04)\n• 💼 **LinkedIn**: [linkedin.com/in/tejaswini-y-80a93025a](https://linkedin.com/in/tejaswini-y-80a93025a)\n• 📍 **Location**: Bengaluru, Karnataka, India`;
  }

  // 10. CERTIFICATIONS
  if (q.includes('certif') || q.includes('google') || q.includes('ibm') || q.includes('infosys') || q.includes('microsoft') || q.includes('coursera') || q.includes('linkedin learning') || q.includes('power bi')) {
    return `🏆 **Verified Professional Certifications**:\n\n1. 📜 **Google Data Analytics Professional Certificate**\n2. 📜 **Career Essentials in Generative AI (Microsoft & LinkedIn)**\n3. 📜 **IBM - AI Engineering**\n4. 📜 **Data Engineering Foundations Professional Certificate (IBM)**\n5. 📜 **Infosys Power BI & Infosys Tableau**\n6. 📜 **Machine Learning with Python (Coursera/IBM)**\n7. 📜 **Power BI Workshop Certificates (Office Master)**`;
  }

  // 11. ACHIEVEMENTS & EXTRA-CURRICULAR
  if (q.includes('achieve') || q.includes('theater') || q.includes('theatre') || q.includes('utkarsh') || q.includes('rhythmanya') || q.includes('kannada') || q.includes('dance') || q.includes('volunteer')) {
    return `🌟 **Achievements & Leadership**:\n\n• 💃 **Utkarsh-Rhythmanya**: Acharya Folk dance team Head\n• 🎭 **Utkarsh-Abhinaya Theatre Club**: National & State-level participant and winner\n• 🚩 **Acharya Kannada Vedike**: Active Member`;
  }

  // Default Comprehensive Profile Answer
  return `👋 **I am Teju AI**, Tejaswini Y's intelligent profile assistant.\n\nHere is a quick overview of **Tejaswini Y**:\n• **Role**: AIML Graduate | Full Stack Developer @ Mindset IT Solutions\n• **Education**: B.E. in AI & ML at Acharya Institute of Tech (**8.49 CGPA**)\n• **Projects**: Sustainable Energy SDG-7 Dashboard, Ocular Vision Eye Analysis, Gen-AI Pricing Simulator\n• **Contact**: [tejaswini.y2004teju@gmail.com](mailto:tejaswini.y2004teju@gmail.com) | [+91 9036877702](https://wa.me/919036877702)\n\nAsk me about **Projects**, **Skills**, **Education**, **Experience**, **Certifications**, or **Contact**!`;
}
