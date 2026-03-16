const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  }
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Architecture", imgPath: "/images/concepts.svg" },
  { text: "Backend", imgPath: "/images/designs.svg" },
  { text: "Automation", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Architecture", imgPath: "/images/concepts.svg" },
  { text: "Backend", imgPath: "/images/designs.svg" },
  { text: "Automation", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Completed Projects" }
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  }
];

const abilities = [
  {
    imgPath: "/images/trophy.png", // or a code icon
    title: "Algorithmic Problem Solving",
    desc: "A competitive programming enthusiast at heart, I practice daily to master complex algorithms and optimize code for maximum efficiency.",
  },
  {
    imgPath: "/images/layers.png", // or an architecture icon
    title: "System Design & Scalability",
    desc: "Passionate about architecting robust systems, focusing on how different components interact to create scalable, high-performance applications.",
  },
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail in both logic and user experience.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Java Developer",
    modelPath: "/models/java-transformed.glb",
    scale: 1.2,
    rotation: [0.3, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    title: "Software Engineer @ OpenWay",
    date: "Nov 2025 – Present",
    logoPath: "/images/logo3.png",
    responsibilities: [
      "Developed high-impact customized solutions for global banking clients within the Way4 digital payments platform.",
      "Accelerated professional onboarding by 50%, achieving full production readiness within 1 month.",
      "Engineered client-specific modules and plugins to extend core Way4 functionality for high-availability requirements.",
      "Collaborated with stakeholders to translate complex business requirements into scalable technical specifications."
    ]
  },
  {
    title: "Software Engineer @ PHAETHON Centre of Excellence",
    date: "Nov 2024 – Nov 2025",
    logoPath: "/images/logo2.png",
    responsibilities: [
      "Implemented highly concurrent backend platforms in Python (FastAPI) supporting 100k simultaneous users.",
      "Orchestrated secure REST API development with OAuth2/OIDC authentication.",
      "Systematized containerized deployments on Kubernetes clusters for zero-downtime rollouts."
    ]
  },
  {
    title: "Software Engineer @ University of Cyprus SEIT Lab",
    date: "Jun 2023 – Nov 2024",
    logoPath: "/images/logo1.png",
    responsibilities: [
      "Led backend development for EU-funded research platforms using Python and cloud-native solutions.",
      "Re-engineered PostgreSQL and MongoDB schemas, boosting query performance by 50%.",
      "Drove cloud migration and automated deployments on AWS/Azure via Docker and CI/CD pipelines."
    ]
  }
];

const socialImgs = [
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/panaetovm",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/panaetovm",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
