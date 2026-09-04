import { NextResponse } from 'next/server';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

// Factual System Knowledge Grounding Prompt
const GROUNDING_KNOWLEDGE = `
You are Dhaya AI, the official personal AI portfolio assistant for Dhayanand S.
Your job is to accurately, politely, and intelligently answer questions about Dhayanand S's skills, projects, education, internships, sports achievements, and creative work.

STRICT FACTS ABOUT DHAYANAND S:
- Name: Dhayanand S
- Role: Full Stack Developer | AI Enthusiast
- Identity: B.Tech Artificial Intelligence & Data Science Undergraduate at Nandha Engineering College (Autonomous), Erode (2023-2027 expected). Creative Developer & Sports Enthusiast.
- Story Stage: Student → Learner → Builder → AI Explorer → Full Stack Developer → Creative Developer → Future AI Developer.
- Location: Erode, Tamil Nadu, India.
- Email: dhayanand844@gmail.com
- Phone: +91 8681933981
- LinkedIn: linkedin.com/in/dhayanand-s
- GitHub: github.com/DHAYANAND-S
- LeetCode: leetcode.com/u/2vS7OCYZCW/
- HackerRank: hackerrank.com/profile/dhayanand844

TECHNICAL SKILLS:
- Programming: Python (Core/AI), SQL (Queries & Data), Java (Basic OOP)
- Web & MERN: HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Express, MERN Stack
- Databases: MySQL (Relational), MongoDB (NoSQL)
- AI & Data Science: Artificial Intelligence foundations, Deep Learning, Business Analytics, AI-assisted development
- Software Testing & QA: Manual Testing, Test Case Design, Test Scenarios, Bug Reporting, SDLC, STLC, Functional Testing, Regression Testing, Selenium (Basic Automation)
- IoT: Sensor Integration, Hardware-Software Telemetry Integration
- Tools: Git, GitHub, VS Code, Postman, Eclipse

PROJECTS:
1. MEDTRACK: Hospital Monitoring & Patient Management System (React + Node.js + MySQL). Features patient record workflows, real-time alert logging, and staff dashboards.
2. LMS SYSTEM: College Learning Management System (MERN Stack - MongoDB, Express, React, Node.js). Features course module upload, assignment tracking, and grade reports.
3. SMART HELMET: IoT-Based Rider Safety System (IoT + Sensors + Embedded C + Python). Detects improper helmet usage with infrared sensors and triggers safety alerts.
4. PROJECT HELPER: Developer Tools Platform (React + Node.js). Helps students discover and connect with engineering tools, SDKs, and templates.

AI LAB & CREATIVE WORK:
- AI Lab: Generative web layout assistant and telemetry deep learning anomaly classifiers.
- Creative Work: Customized interactive online invitation web applications with music, animations, and RSVP tracking.

SPORTS & EXTRACURRICULAR:
- Leadership: Department Sports Secretary (AI & DS Department, Nandha Engineering College).
- Athletics Achievements:
  * School/Zonal 400m best timing achievement
  * District Level 3rd Place in Athletics
  * College 200m — 2nd Place
  * College 200m Best Timing achievement
- Sports Interests: Athletics (200m, 400m, Relay), Hockey Player.

INTERNSHIPS / EXPERIENCE:
1. Cognifyz Technologies (Jan 2026): Frontend Developer Intern (HTML, CSS, JS, React UI development).
2. Cognifyz Technologies (Jan 2026): Business Analytics Intern (EDA, dataset reporting, business metrics).
3. Ether Infotech (Dec 2025 – Jan 2026): Artificial Intelligence Intern (ML pipelines, data preprocessing).
4. Trios Technologies Pvt. Ltd. (Jun 2025 – Jul 2025): Deep Learning Intern (Neural networks, hyperparameter tuning).

CERTIFICATIONS:
- Introduction to Data Analytics — IBM via Coursera
- Internship Completion Certificate — Cognifyz Technologies
- Deep Learning — Trios Technologies Pvt. Ltd.
- Artificial Intelligence — Ether Infotech

STRICT RULES:
1. NEVER invent any companies, job titles, certificates, repository links, test metrics, client names, or awards that are not listed above.
2. If asked about something not mentioned in Dhayanand's portfolio, politely answer: "I don't have that information in Dhayanand's portfolio yet."
3. Keep responses concise, modern, structured, and professional.
`;

export async function POST(req: Request) {
  try {
    const { message, projectContext } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Valid message required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    let fullPrompt = message;
    if (projectContext) {
      fullPrompt = `[Context: User is asking about project: ${JSON.stringify(projectContext)}]\nUser Question: ${message}`;
    }

    // 1. Try calling Gemini API if GEMINI_API_KEY environment variable exists
    if (apiKey) {
      try {
        const { GoogleGenAI } = await import('@google/genai');
        const ai = new GoogleGenAI({ apiKey });

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
            { role: 'user', parts: [{ text: GROUNDING_KNOWLEDGE + '\n\nUser Question: ' + fullPrompt }] }
          ]
        });

        const reply = response.text || "I'm processing Dhayanand's portfolio data. How else can I assist you?";
        return NextResponse.json({ reply });
      } catch (err) {
        console.error('Gemini API call error, falling back to local engine:', err);
      }
    }

    // 2. Fallback Knowledge Engine if GEMINI_API_KEY is not set
    const query = fullPrompt.toLowerCase();
    let reply = '';

    if (query.includes('who is') || query.includes('about') || query.includes('background') || query.includes('bio')) {
      reply = `Dhayanand S is a motivated B.Tech Artificial Intelligence & Data Science undergraduate at Nandha Engineering College, Erode (2023–2027). He is a Full Stack Developer, AI Enthusiast, Creative Developer, and Sports Enthusiast who learns by building real projects.`;
    } else if (query.includes('skill') || query.includes('tech') || query.includes('programming') || query.includes('stack')) {
      reply = `Dhayanand's technical toolkit includes:\n• Programming: Python, SQL, Java (Basic)\n• Web & MERN: HTML5, CSS3, JavaScript, React.js, Node.js, Express, MERN Stack\n• Database: MySQL, MongoDB\n• AI & Data: Deep Learning, AI-assisted development, Business Analytics\n• Testing: Manual Testing, Selenium, Test Cases, SDLC/STLC, Bug Reporting\n• IoT: Sensor Integration\n• Tools: Git, GitHub, VS Code, Postman`;
    } else if (query.includes('medtrack')) {
      reply = `MEDTRACK is a Hospital Monitoring & Patient Management System built with React, Node.js, and MySQL. It features patient admission tracking, real-time alert logs, and staff dashboards for hospital workflows.`;
    } else if (query.includes('lms')) {
      reply = `LMS SYSTEM is a Learning Management System built using the MERN Stack (MongoDB, Express, React, Node.js) to digitize college course materials, assignment submissions, and student grading.`;
    } else if (query.includes('helmet') || query.includes('iot')) {
      reply = `SMART HELMET is an IoT-based safety system built with sensors, Embedded C, and Python. It detects improper helmet wearing and triggers emergency alert dispatches upon accident impact.`;
    } else if (query.includes('project') || query.includes('work') || query.includes('build')) {
      reply = `Dhayanand has built key projects across Full Stack, IoT, and AI:\n1. MEDTRACK (Hospital Management - React, Node, MySQL)\n2. LMS SYSTEM (College Portal - MERN Stack)\n3. SMART HELMET (IoT Rider Safety System)\n4. PROJECT HELPER (Developer Onboarding Tools Platform)\n5. AI LAB & Creative Invitation Suite`;
    } else if (query.includes('sport') || query.includes('track') || query.includes('athlete') || query.includes('200m') || query.includes('400m')) {
      reply = `Dhayanand serves as Department Sports Secretary at Nandha Engineering College. His athletic achievements include:\n• School/Zonal 400m Best Timing\n• District Level Athletics 3rd Place\n• College 200m 2nd Place & Best Timing\n• Player in Athletics and Hockey!`;
    } else if (query.includes('intern') || query.includes('experience') || query.includes('cognifyz') || query.includes('ether') || query.includes('trios')) {
      reply = `Dhayanand has completed 4 specialized internships:\n• Cognifyz Technologies — Frontend Developer Intern (Jan 2026)\n• Cognifyz Technologies — Business Analytics Intern (Jan 2026)\n• Ether Infotech — Artificial Intelligence Intern (Dec 2025 – Jan 2026)\n• Trios Technologies — Deep Learning Intern (Jun 2025 – Jul 2025)`;
    } else if (query.includes('certif') || query.includes('ibm')) {
      reply = `Verified Certifications:\n• IBM via Coursera: Introduction to Data Analytics\n• Cognifyz Technologies: Frontend & Business Analytics Internship Certificate\n• Trios Technologies: Deep Learning Certification\n• Ether Infotech: Artificial Intelligence Certification`;
    } else if (query.includes('contact') || query.includes('email') || query.includes('phone') || query.includes('reach')) {
      reply = `You can reach Dhayanand S directly:\n• Email: dhayanand844@gmail.com\n• Phone: +91 8681933981\n• Location: Erode, Tamil Nadu, India\n• LinkedIn: linkedin.com/in/dhayanand-s\n• GitHub: github.com/DHAYANAND-S`;
    } else {
      reply = `I am Dhaya AI, Dhayanand S's portfolio assistant. You can ask me about his technical skills, MERN/IoT projects, internships, sports achievements, certifications, or contact details!`;
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Error in chat API route:', error);
    return NextResponse.json(
      { reply: "I'm currently unable to answer. Please check Dhayanand's resume or contact him directly at dhayanand844@gmail.com!" },
      { status: 500 }
    );
  }
}
