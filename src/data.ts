import { Skill, Experience, Project, Certification, Education } from './types';

export const personalInfo = {
  name: "Sankalp Tiwari",
  title: "Business Analyst | Product Analyst | Data Analyst",
  tagline: "Bridging business needs, product strategy, and data insights.",
  location: "Uttar Pradesh, India",
  email: "sankalptiwari09092003@gmail.com",
  phone: "+91-8650270818",
  linkedin: "https://www.linkedin.com/in/sankalp-tiwari-93278b252",
  github: "https://github.com/SankalpTiwari0909",
  summary: "Aspiring Business & Product Analyst with hands-on experience in requirement gathering, Agile sprint coordination (JIRA, User Stories, UAT), and data analytics (Python, SQL, Power BI). Expert at translating operational needs into actionable specifications and intuitive business intelligence dashboards.",
  whyHireMe: [
    {
      title: "Data-Driven Decisions",
      desc: "Analyzing transaction records with Python, SQL, and Power BI to pinpoint and fix inefficiencies.",
      metric: "40% faster analysis"
    },
    {
      title: "Agile Execution",
      desc: "Managing JIRA boards, writing PRDs/User Stories, and aligning developer and QA streams.",
      metric: "On-time deliveries"
    },
    {
      title: "Stakeholder Alignment",
      desc: "Translating ambiguous operational bottlenecks into structured, easy-to-follow SOPs.",
      metric: "Zero-friction UAT"
    },
    {
      title: "Actionable Dashboards",
      desc: "Developing Power BI interfaces with advanced DAX models to guide strategic decisions.",
      metric: "15%-30% conversion gain"
    }
  ]
};

export const skillsData: Skill[] = [
  // Business Analysis
  {
    name: "Requirement Gathering",
    category: "Business Analysis",
    level: 95,
    description: "Aligning cross-functional requirements with precise product goals.",
    iconName: "FileSpreadsheet"
  },
  {
    name: "BRD & FRD Creation",
    category: "Business Analysis",
    level: 90,
    description: "Authoring clear Business and Functional Requirement Documents.",
    iconName: "FileText"
  },
  {
    name: "User Stories & Backlog",
    category: "Business Analysis",
    level: 92,
    description: "Writing actionable stories, acceptance criteria, and managing JIRA backlogs.",
    iconName: "ListTodo"
  },
  {
    name: "Stakeholder Management",
    category: "Business Analysis",
    level: 88,
    description: "Bridging communication between development, QA, and business teams.",
    iconName: "Users"
  },
  {
    name: "Agile / Scrum",
    category: "Business Analysis",
    level: 90,
    description: "Facilitating sprints, ticket flows, and backlog grooming in JIRA.",
    iconName: "Activity"
  },
  {
    name: "UAT & Validation",
    category: "Business Analysis",
    level: 85,
    description: "Conducting user acceptance testing and verifying feature compliance.",
    iconName: "CheckSquare"
  },

  // Data Analytics
  {
    name: "SQL (MySQL)",
    category: "Data Analytics",
    level: 90,
    description: "Writing optimized queries, joins, and aggregates for structured datasets.",
    iconName: "Database"
  },
  {
    name: "Power BI",
    category: "Data Analytics",
    level: 95,
    description: "Building interactive dashboards with advanced DAX and Power Query models.",
    iconName: "BarChart3"
  },
  {
    name: "Python (Pandas/NumPy)",
    category: "Data Analytics",
    level: 88,
    description: "Conducting clean exploratory data analysis (EDA) and writing automation scripts.",
    iconName: "Terminal"
  },
  {
    name: "Advanced Excel",
    category: "Data Analytics",
    level: 92,
    description: "Utilizing pivot tables, lookups, and statistical forecasting models.",
    iconName: "Table"
  },
  {
    name: "Data Modeling & ETL",
    category: "Data Analytics",
    level: 85,
    description: "Transforming transactional and scraped sources into star-schemas.",
    iconName: "Layers"
  },

  // Product Analytics
  {
    name: "User Behavior Analysis",
    category: "Product Analytics",
    level: 88,
    description: "Mapping user journeys, identifying funnel dropouts, and analyzing engagement.",
    iconName: "Fingerprint"
  },
  {
    name: "Product & Business Metrics",
    category: "Product Analytics",
    level: 90,
    description: "Tracking key metrics like conversion rates, retention, and fulfillment speeds.",
    iconName: "TrendingUp"
  },
  {
    name: "A/B Testing Concepts",
    category: "Product Analytics",
    level: 80,
    description: "Establishing hypothesis parameters and determining statistical significance.",
    iconName: "Split"
  },

  // Tools & Tech
  {
    name: "JIRA & Confluence",
    category: "Tools & Tech",
    level: 94,
    description: "Managing tickets, workflows, and release documentation.",
    iconName: "Trello"
  },
  {
    name: "IBM WatsonX / Assistant",
    category: "Tools & Tech",
    level: 85,
    description: "Building automated dialog flows, entity recognition, and chat intents.",
    iconName: "Cpu"
  },
  {
    name: "Git & GitHub",
    category: "Tools & Tech",
    level: 88,
    description: "Employing version control, branch management, and tracking project tasks.",
    iconName: "Github"
  },
  {
    name: "HTML/CSS & React SPA",
    category: "Tools & Tech",
    level: 82,
    description: "Creating responsive web interfaces and rendering data widgets.",
    iconName: "Code"
  }
];

export const experienceData: Experience[] = [
  {
    company: "JVFPL (Sbzee)",
    role: "Product Analyst Trainee",
    duration: "Mar – Jul 2026",
    location: "Noida, India",
    type: "internship",
    responsibilities: [
      "Gathered specifications from operations teams to align supply-chain logistics with real-time dashboards.",
      "Owned creation of JIRA tickets, sprints, user stories, and acceptance criteria to maintain a clean backlog.",
      "Collaborated across developer, QA, and operations channels to expedite product delivery.",
      "Conducted User Acceptance Testing (UAT) and drafted crisp SOP manuals for frontline sorting staff."
    ],
    metrics: [
      { label: "Sprints Handled", value: "8+", desc: "100% on-schedule feature verification." },
      { label: "SOP Manuals", value: "5+", desc: "Cut sorting staff onboarding time by 25%." }
    ],
    tools: ["JIRA", "Confluence", "SOPs", "Agile Sprints", "UAT Testing"]
  },
  {
    company: "IBM",
    role: "AI Intern",
    duration: "Jun – Aug 2025",
    location: "Remote",
    type: "internship",
    responsibilities: [
      "Scoped requirements for an AI book recommender platform to match user preferences.",
      "Designed functional flows for 'Ink Seer', an NLP chatbot utilizing IBM Watson Assistant.",
      "Engineered conversational intents and entity rules to map genre preferences accurately.",
      "Developed a clean, responsive HTML/CSS web layout to host the virtual assistant."
    ],
    metrics: [
      { label: "Match Accuracy", value: "92%", desc: "Highly positive feedback from surveyed users." },
      { label: "Intents Engineered", value: "24", desc: "Clean conversational mapping to automated actions." }
    ],
    tools: ["IBM Watson", "NLP Rules", "HTML/CSS", "UX Design Flow"]
  }
];

export const projectsData: Project[] = [
  {
    id: "trendevo",
    title: "Trendevo Analytics Platform",
    subtitle: "Apparel Trend Forecasting & Consumer Insights Portal",
    category: "Business Analysis",
    problem: "B2B apparel merchants lacked visual, real-time tracking of rapid fashion trends, causing overproduction or mismatched inventory.",
    approach: [
      "Cleansed web-scraped data from social platforms to establish a structured database.",
      "Created a multi-dimensional Power BI dashboard categorized by cohort, region, and style.",
      "Translated unstructured trend metrics into direct inventory purchasing signals."
    ],
    impact: [
      "Unified database queries into clean commercial workflows.",
      "Mapped 15,000+ trend indicators to bypass manual surveys.",
      "Designed highly filterable visual grids requiring less than 3 clicks."
    ],
    metrics: [
      { label: "Data Markers", value: "15,000+" },
      { label: "Dashboard Views", value: "5 Layouts" }
    ],
    tools: ["HTML/CSS", "JavaScript", "MongoDB", "Power BI"],
    githubUrl: "https://github.com/SankalpTiwari0909",
    keyInsights: [
      "Social media integration reduced trend confirmation cycles from weeks to hours.",
      "Generational analysis uncovered a 35% color preference gap used for targeted tags."
    ]
  },
  {
    id: "delivery-agents",
    title: "Delivery Agent Optimizer",
    subtitle: "Quick-Commerce Fulfillment Bottleneck Analysis",
    category: "Data Analytics",
    problem: "Fulfillment delays across major quick-commerce apps caused customer drop-offs and high delivery failure rates.",
    approach: [
      "Analyzed 10,000+ delivery orders using Python across platforms like Zepto and Blinkit.",
      "Correlated dark store dispatch times, preparation lags, and active route travel times.",
      "Formulated clear adjustments for dispatch windows to bypass peak delivery gridlocks."
    ],
    impact: [
      "Reduced analytical cycle times by 40% via optimized visualization scripts.",
      "Proposed changes that yielded a 35% improvement in logistics speed.",
      "Pinpointed dark store dispatch gaps, reducing late delivery complaints by 22%."
    ],
    metrics: [
      { label: "Orders Analyzed", value: "10,000+" },
      { label: "Analysis Speedup", value: "40%" },
      { label: "Logistics Speed Gain", value: "35%" },
      { label: "Complaints Reduced", value: "22%" }
    ],
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/SankalpTiwari0909",
    keyInsights: [
      "Preparation delays at dark stores caused 68% of delivery breaches, not rider speeds.",
      "Shifting dispatch forward by 4 minutes during the 6:30 PM rush averted major SLA fines."
    ]
  },
  {
    id: "amazon-prime",
    title: "Amazon Prime Video Analytics",
    subtitle: "Global Content Catalog Distribution Dashboard",
    category: "Product Analytics",
    problem: "Content acquisition teams lacked visual location analytics, leading to generic licensing in diverse regions.",
    approach: [
      "Designed an interactive Power BI dashboard featuring 6+ synced widgets.",
      "Cleaned global CSV databases across 100+ countries with advanced Power Query.",
      "Formulated DAX metrics to track genre densities, ratings, and release recency."
    ],
    impact: [
      "Mapped library data geographically to point out critical content gaps.",
      "Facilitated content adjustments that improved local targeting by 15% to 30%.",
      "Created a self-service dashboard layout requiring zero user training."
    ],
    metrics: [
      { label: "Countries Covered", value: "100+" },
      { label: "Dynamic Widgets", value: "6+ Charts" },
      { label: "Local Alignment", value: "+15% to 30%" }
    ],
    tools: ["Power BI", "Power Query", "DAX Formulas", "Business Intelligence"],
    githubUrl: "https://github.com/SankalpTiwari0909",
    keyInsights: [
      "Identified action/drama oversupply with a massive local documentary deficit.",
      "Geographical mapping solved compliance and age-rating checks in one unified visual."
    ]
  },
  {
    id: "librica-ai",
    title: "Librica AI Recommender",
    subtitle: "Conversational Book Recommendation Engine",
    category: "AI & Tech",
    problem: "Standard catalog searches struggle with emotional context, moods, and abstract reader requests.",
    approach: [
      "Drafted flow diagrams and specifications for a conversational virtual helper.",
      "Designed intents, entity matching rules, and dialog trees in IBM Watson Assistant.",
      "Constructed a lightweight, interactive web frontend for displaying instant matches."
    ],
    impact: [
      "Achieved a 92% match accuracy rate based on initial user surveys.",
      "Converted abstract prompts like 'cozy mystery' into precise filter algorithms.",
      "Created a completely static, fast-loading, zero-flicker UI wrapper."
    ],
    metrics: [
      { label: "Match Accuracy", value: "92%" },
      { label: "Intents Configured", value: "24" }
    ],
    tools: ["IBM Watson", "NLP Models", "HTML/CSS", "User Journey Flow"],
    githubUrl: "https://github.com/SankalpTiwari0909",
    keyInsights: [
      "Conversational interfaces drove 3x higher book searches than basic text inputs.",
      "Strict entity mapping for mood tags prevented chatbot errors or random listings."
    ]
  }
];

export const educationData: Education[] = [
  {
    degree: "Bachelor of Technology — Computer Science",
    college: "Dr. A. P. J. Abdul Kalam Technical University",
    duration: "2022 – 2026",
    location: "Lucknow, India",
    gpa: "7.8/10 CGPA",
    courses: [
      "Database Systems (DBMS)",
      "Software Engineering & Agile",
      "Data Analytics & Machine Learning Basics",
      "Algorithms (DAA)"
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    name: "Artificial Intelligence Foundations",
    issuer: "IBM",
    badgeColor: "blue"
  },
  {
    name: "Database Foundations for Developers",
    issuer: "Oracle",
    badgeColor: "red"
  },
  {
    name: "Data Visualization for Business Insights",
    issuer: "TATA",
    badgeColor: "purple"
  }
];

export const testimonialsData = [
  {
    quote: "Sankalp combines software logic with a strong business mindset. He is excellent at translating complex technical constraints into clear, user-friendly system specifications.",
    author: "Technical Program Manager",
    company: "IBM Partner Program",
    role: "AI Mentor"
  },
  {
    quote: "Sankalp's data analysis scripts cut project iteration times. His Power BI dashboards transform raw supply chain figures into actionable advice operations managers can implement on day one.",
    author: "Senior Operations Director",
    company: "Fulfillment Partner",
    role: "Collaborator"
  }
];
