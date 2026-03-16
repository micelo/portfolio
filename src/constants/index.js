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
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
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
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
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

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expLogos,
  expCards,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
