import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Deekshitha Kommineni",
    "title": "Final-year B.Tech Student in Computer Science and Cybersecurity",
    "email": "deekshithakommineni9@gmail.com",
    "phone": "+91 9391128026",
    "linkedin": "linkedin/deekshitha-kommineni",
    "github": "",
    "location": "Hyderabad, India",
    "summary": "Final-year B.Tech student in Computer Science and Cybersecurity with hands-on experience in cybersecurity, data analytics, and web development. Proficient in Python, SQL, and HTML/CSS. Enthusiastic about applying problem-solving skills to real-world projects and eager to learn new technologies in dynamic environments."
  },
  "experience": [
    {
      "title": "Data Analyst Intern",
      "company": "NullClass",
      "dates": "May 2025 – June 2025",
      "description": "Created a sales dashboard displaying real-time sales information using SQL, Python, and Google Looker Studio.",
      "highlights": [
        "Used SQL to create and query a sales database with JOIN, GROUP BY, and filters.",
        "Integrated SQL datasets into Google Looker Studio for easy sharing.",
        "Processed and cleaned raw data using Python's Pandas library.",
        "Created charts and graphs with Matplotlib and Seaborn."
      ]
    },
    {
      "title": "Web Development Intern",
      "company": "CodSoft",
      "dates": "June 2024 – July 2024",
      "description": "Gained hands-on experience in web development using HTML, CSS, and JavaScript.",
      "highlights": [
        "Developed a calculator using HTML, CSS Grid, and JavaScript.",
        "Created a tribute webpage for Dr. A.P.J. Abdul Kalam.",
        "Delivered high-quality work, showcasing skills in building functional and visually appealing projects."
      ]
    },
    {
      "title": "Machine Learning Intern",
      "company": "Bharat Intern",
      "dates": "November 2023 – December 2023",
      "description": "Focused on applying machine learning concepts to cybersecurity problems.",
      "highlights": [
        "Developed a regression model for house price prediction.",
        "Implemented an iris flower classification model using logistic regression and decision tree algorithms.",
        "Learned Jupyter Notebook, TensorFlow, and ML pipelines."
      ]
    }
  ],
  "education": [
    {
      "degree": "B.Tech in Computer Science & Cyber Security",
      "institution": "Sphoorthy Engineering College",
      "years": "2022 – 2026",
      "gpa": "8.3/10.0"
    },
    {
      "degree": "Intermediate",
      "institution": "Sri Chaitanya College",
      "years": "2020 – 2022",
      "gpa": "94%"
    },
    {
      "degree": "SSC",
      "institution": "New Vision School",
      "years": "2019 – 2020",
      "gpa": "100%"
    }
  ],
  "skills": {
    "frontend": [
      "HTML",
      "CSS",
      "JavaScript",
      "CSS Grid"
    ],
    "backend": [
      "Python",
      "SQL",
      "Pandas",
      "Database Management"
    ],
    "devops": [
      "Google Looker Studio",
      "Jupyter Notebook",
      "TensorFlow"
    ],
    "additional": [
      "Machine Learning",
      "Data Analytics",
      "Cybersecurity",
      "Matplotlib",
      "Seaborn",
      "Regression Models",
      "Classification Algorithms"
    ]
  },
  "projects": [
    {
      "name": "Online Voting System",
      "description": "Developed a web-based voting platform to streamline organizational voting processes with secure registration and real-time result tabulation.",
      "technologies": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "shiny-text",
  "about": "simple",
  "experience": "list",
  "projects": "grid",
  "skills": "bars",
  "skillsDisplay": "separate",
  "contact": "simple",
  "colorPalette": "slate"
};
