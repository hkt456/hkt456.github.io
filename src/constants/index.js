import {
  mobile,
  backend,
  creator,
  web,
  python,
  cpp,
  pytorch,
  keras,
  opencv,
  sklearn,
  flask,
  django,
  latex,
  neovim,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tedxyouthptnk,
  tgb,
  tesla,
  hcmus,
  fico,
  shopify,
  carrent,
  jobit,
  ransomware,
  vit,
  tedxweb,
  tensorflow,
  tripguide,
  threejs,
} from "../assets/";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Computer Vision Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "NLP Researcher",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "LaTeX",
    icon: latex,
  },
];

const experiences = [
  {
    title: "Founding Committee | Head of Logistics | Website Developer",
    company_name: "TEDxYouth PTNK",
    icon: tedxyouthptnk,
    iconBg: "#383E56",
    date: "July 2022 - August 2023",
    points: [
      "Took charge of the logistic and technological aspects of the whole organization.",
      "Collaborating with cross-functional teams including designers, financial team to create high-quality products and events.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Raised over 75 million VND for the event with over 250 in attendance.",
    ],
  },
  {
    title: "Head of Directors | Fullstack Developer",
    company_name: "The Gifted Battlefield Organization",
    icon: tgb,
    iconBg: "#E6DEDD",
    date: "February 2023 - Present",
    points: [
      "Compiled and shared an advanced learning program for Vietnamese high school curriculum for gifted students.",
      "Reached over 3,000 users since inception.",
      "Hosted multiple competitions on Math, Physics, Computer Science, Biology, and Chemistry Olympiad topics with more than 300 contestants.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Natural Language Processing Researcher",
    company_name: "VNU-HCM University of Science",
    icon: hcmus,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Develop and conduct research on Natural Language Processing and Machine Translation.",
      "Implementing high-accuracy and optimized models and ensuring cross-machine compatibility.",
      "Participating in informative research seminars with other researchers.",
    ],
  },
  {
    title: "Computer Vision Developer",
    company_name: "Fico-Ytl",
    icon: fico,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using Flask, OpenCV, Tensorflow and other related technologies.",
      "Developed and configured a management system through license plate detection and administration for production lines all over southern Vietnam.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Efficient, insightful, and results-oriented. Tam is the person you want on your team. Highly recommended!.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "As a fellow AI engineer, I can attest to Tam's expertise in the field. Their contributions to open-source AI projects and their ability to mentor and guide junior engineers are a testament to their leadership in the AI community.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Tam optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TEDxYouth PTNK's Website",
    description:
      "A ticket-selling and informatio website of TEDxYouth PTNK, reaching over 300 visitors during the event's registration period.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "blender",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tedxweb,
    source_code_link: "https://github.com/TEDxYouthPTNK/TEDxWEB",
  },
  {
    name: "Ransomware Website",
    description:
      "Web application for user to get updates on the latest news on ransomware with the use of Web Scraping for data collecion and Machine Learning's KNN algorithm for information classification.",
    tags: [
      {
        name: "bigdata",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "ransomware",
        color: "pink-text-gradient",
      },
    ],
    image: ransomware,
    source_code_link: "https://github.com/hkt456/Ransomware",
  },
  {
    name: "Vision Transformer (ViT) Implementation",
    description:
      "An implementation of the famous ViT model for image classification using PyTorch from scratch, reaching significant results.",
    tags: [
      {
        name: "computervision",
        color: "blue-text-gradient",
      },
      {
        name: "articificialintelligence",
        color: "green-text-gradient",
      },
      {
        name: "pytorch",
        color: "pink-text-gradient",
      },
    ],
    image: vit,
    source_code_link: "https://github.com/hkt456/ViT-Model",
  },
];

export { services, technologies, experiences, testimonials, projects };
