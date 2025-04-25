//My data for portfolio
import siImg from '../assets/si.png';
import srichaitanyaImg from '../assets/srichaitanya.png';
import vnrImg from '../assets/vnr.png';
import xairotechImg from '../assets/xairotech.jpeg';
import heroImg from '../assets/HeroImage.jpg';

export interface Bio {
  name: string;
  roles: string[];
  description: string;
  github: string;
  linkedin: string;
  Medium: string;
  insta: string;
  resume: string;
}

export interface Skill {
  name: string;
  image: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  date: string;
  desc: string;
  skills: string[];
  img: string;
  refLink: string;
}

export interface Education {
  id: number;
  school: string;
  degree: string;
  date: string;
  desc: string;
  img: string;
  refLink: string;
  grade: string;
}

export const Bio: Bio = {
  name: "Yashwanth Pothala",
  roles: [
    "Full Stack Developer",
    "UI/UX Designer",
    "Programmer"
  ],
  description: "A passionate Computer Science undergrad at VNRVJIET. I specialize in full-stack web development and AI-driven solutions, blending creativity with code to solve real-world problems. From building scalable apps with the MERN stack to mentoring DSA aspirants, I thrive on turning ideas into impactful tech. Whether it's crafting user-friendly UIs or automating workflows with AI, I aim to engineer solutions that speak simplicity and efficiency. Let’s connect through code and create something meaningful.",
  github: "https://github.com/Y-a-s-h-0-4",
  linkedin: "https://www.linkedin.com/in/yashwanth-pothala-419023259/",
  Medium: "https://medium.com/@yashwanthpothala04",
  insta: "https://www.instagram.com/__yash__04___?igsh=ZTV3OXlpbzJ4bzF3",
  resume: "https://drive.google.com/file/d/1JF2ojRGHUZDoWgAkbzM5pHwJ5ZLO4WGY/view?usp=sharing"
};

export const skills: Skill[] = [
  {
    name: "Python",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
  },
  {
    name: "C++",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
  },
  {
    name: "Java",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png"
  },
  {
    name: "C",
    image: "https://cdn.iconscout.com/icon/free/png-256/free-css3-logo-icon-download-in-svg-png-gif-file-formats--css-programming-langugae-language-pack-logos-icons-1175237.png"
  },
  {
    name: "SQL",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png"
  },
  {
    name: "JavaScript",
    image: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
  },
  {
    name: "R Language",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1200px-R_logo.svg.png"
  },
  {
    name: "Adobe XD",
    image: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/22b74bf9-830b-4bad-88ee-871368b6f6a3.png?w=128&h=128&fit=max&dpr=3&auto=format&q=50"
  },
  {
    name: "Figma",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/1133px-Sketch_Logo.svg.png"
  },
  {
    name: "Interaction Design",
    image: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg"
  },
  {
    name: "Framer",
    image: "https://miro.medium.com/v2/resize:fit:2400/1*F6ufPKgGbyUPkWLZ-16ycw.png"
  },
  {
    name: "Adobe Illustrator",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/180px-Adobe_Illustrator_CC_icon.svg.png"
  },
  {
    name: "React Js",
    image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
  },
  {
    name: "Node Js",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
  },
  {
    name: "Express Js",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXgAuAwfMMDkwZScsLkBAeZ4GjyfB7GtIzcA&s"
  },
  {
    name: "Tailwind CSS",
    image: "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png"
  },
  {
    name: "Next Js",
    image: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png"
  },
  {
    name: "OOPs",
    image: "https://thumbs.dreamstime.com/b/oop-object-oriented-programming-based-concept-objects-which-can-contain-data-code-acronym-text-stamp-background-264294571.jpg"
  },
  {
    name: "DBMS",
    image: "https://soco-images.s3.ap-south-1.amazonaws.com/76b8b29651deb6ff1fb6047f59fb1e52.png"
  },
  {
    name: "Data Structures",
    image: "https://e7.pngegg.com/pngimages/78/465/png-clipart-data-structures-and-algorithms-algorithms-data-structures-programs-computer-science-others-miscellaneous-computer-science-thumbnail.png"
  },
  {
    name: "OS",
    image: "https://img.freepik.com/premium-vector/operating-system-icon-software-element-symbol-vector_883533-879.jpg"
  },
  {
    name: "Computer Networks",
    image: "https://static.vecteezy.com/system/resources/previews/008/681/148/non_2x/computer-network-internet-technologies-icon-vector.jpg"
  },
  {
    name: "Agile Methodologies",
    image: "https://www.shutterstock.com/image-vector/vector-illustration-agile-word-arrows-260nw-2058928391.jpg"
  },
  {
    name: "Git",
    image: "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png"
  },
  {
    name: "GitHub",
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  },
  {
    name: "Linux",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png"
  },
  {
    name: "VS Code",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"
  },
  {
    name: "Postman",
    image: "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png"
  },
  {
    name: "Power Bi",
    image: "https://logohistory.net/wp-content/uploads/2023/05/Power-BI-Symbol.png"
  },
];

export const experiences: Experience[] = [
  {
    id: 0,
    role: "DSA Mentor",
    company: "Smart Interview",
    date: "Jan 2025 - Present",
    desc: "Guided students in mastering Data Structures and Algorithms through structured mentoring and problem-solving strategies. Focused on doubt resolution, conceptual clarity, and building strong coding foundations.",
    skills: ["Data Structures", "Algorithms", "Communication", "Leadership"],
    img: siImg,
    refLink: "https://smartinterviews.in"
  },
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Xairotech",
    date: "Feb 2024 - Jun 2024",
    desc: "Contributed to UI/UX development of web applications using modern design tools. Collaborated with the design team to translate ideas into interactive prototypes and responsive user interfaces.",
    skills: ["Framer", "Figma", "Adobe XD", "Interaction Design"],
    img: xairotechImg,
    refLink: "https://www.xairotech.com/"
  }
];

export const education: Education[] = [
  {
    id: 0,
    img: "/images/si.png",
    school: "Sreenidhi Institute of Science and Technology",
    date: "2020 - 2024",
    grade: "8.5 CGPA",
    desc: "I completed my Bachelor's in Computer Science and Engineering from Sreenidhi Institute of Science and Technology.",
    degree: "Bachelor of Technology - BTech, Computer Science",
    refLink: "https://sreenidhi.edu.in/"
  },
  {
    id: 1,
    img: "/images/srichaitanya.png",
    school: "Sri Chaitanya Junior College",
    date: "2018 - 2020",
    grade: "95%",
    desc: "I completed my Intermediate education in MPC from Sri Chaitanya Junior College.",
    degree: "Intermediate, MPC",
    refLink: "https://srichaitanya.net/"
  },
  {
    id: 2,
    img: "/images/vnr.png",
    school: "Vignan's Nirula Institute of Technology and Science for Women",
    date: "2014 - 2018",
    grade: "9.2 CGPA",
    desc: "I completed my schooling from Vignan's Nirula Institute of Technology and Science for Women.",
    degree: "Secondary School Certificate, SSC",
    refLink: "https://vignanschools.org/"
  }
];

export const projects = [
  {
    id: 0,
    title: "Finance Bot",
    date: "April - May 2023",
    description:
      "This telegram bot scanns the bills and stores data in excel and user can interact with finance data using Ollama 3.1 .",
    image:
      "https://s3-alpha.figma.com/hub/file/3777179428/ec15fef4-440a-4a4c-9ec0-78867c9cd57f-cover.png",
    tags: ["Python, Ollama 3.1, EasyOCR, OpenCV, Pytesseract"],
    category: "Python projects",
    github: "https://github.com/Y-a-s-h-0-4/Scanner-Bot/tree/main",
    webapp: "https://t.me/hello_vnr_bot ",
  },
  {
    id: 11,
    title: "Yash Bot",
    date: "August - September 2024",
    description:
      "A personal Discord bot that can help you with your daily tasks!",
    image:
      "https://cdn.cp.adobe.io/content/2/dcx/1ab31917-bac6-4893-998b-2064140af74d/rendition/rendition-a5b2ec1d-1c19-4219-b1b9-13cd23b63671-1.png/version/0/format/jpg/dimension/width/size/1200",
    category: "web app",
    github: "https://github.com/Y-a-s-h-0-4/Yash_bot",
    webapp: "https://discord.com/oauth2/authorize?client_id=1280036556362616842",
  },
  {
    id: 9,
    title: "Eventrix",
    date: "March - May 2024",
    description:
      "This is a web development project for event management in our collage",
    image:
      "https://s3-alpha.figma.com/hub/file/5697392459/68ed2571-bf46-468a-9ae1-f7fe6ad51f08-cover.png",
    category: "Web application",
    github: "https://github.com/Y-a-s-h-0-4/VJEVENTRIXX",
    webapp: "https://www.behance.net/gallery/207119579/Power-Your-Ride-",
  },
  
  {
    id: 244,
    title: "Flaipe",
    date: "January - February 2024",
    description:
      "Flaipe is a AI prompt sharing application, where users can share the prompts and get the AI generated code.",
    image:
      "https://s3-alpha.figma.com/hub/file/6566252714/d2f8f883-9319-4bbd-a32f-55530d7e62b5-cover.png",
    category: "Web Application",
    github: "https://github.com/Y-a-s-h-0-4/Flaipe",
    webapp: "https://www.behance.net/gallery/207210077/SAFARI-3D(Parallax)-Scroll-Magic-",
    
  },
  {
    id: 245,
    title: "HooBank",
    date: "February - March 2024",
      description:
      "Hoobank is a modern frontend application for manage the payments",
    image:
      "https://s3-alpha.figma.com/hub/file/6566280426/e5e57ed2-5e84-4aa5-a9ff-faeed2158d0b-cover.png",
    category: "Web Application",
    github: "https://github.com/Y-a-s-h-0-4/HooBank",
    webapp: "https://www.behance.net/gallery/207210677/Cursor-Vibrant-Cursor-Magic-",
    
  },
  {
    id: 247,
    title: "ICRISAT Subsetting Tool",
    date: "December 2024 - Present",
    description:
      "Improving the accessability of data from ICRISAT by implementing a subsetting tool using NLP.",
    image:
      "https://s3-alpha.figma.com/hub/file/6566459326/040b7128-f9ea-4956-810b-4f521684f109-cover.png",
    category: "machine learning",
    github: "https://www.behance.net/gallery/207212639/How-about-Fruit-Fusion-Slider-",
    webapp: "https://www.behance.net/gallery/207212639/How-about-Fruit-Fusion-Slider-",
    
  },

  {
    id: 3,
    title: "Nike App UI Design 👟",
    date: "June - July 2024",
    description:
      "The app welcomes users with a smooth and engaging onboarding process, app right from the start.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/34b64e207128873.66d8459957379.png",
    category: "android app",
    github: "https://www.behance.net/gallery/207128873/Nike-App-UI-Design",
    webapp: "https://www.behance.net/gallery/207128873/Nike-App-UI-Design",
  },
  {
    id: 10,
    title: "SNACKFLEET 🍔⚡",
    date: "June - July 2024",
    description:
      "A 10-minute food delivery app sounds convenient, efficient, and incredibly fast.",
    image:
      "https://s3-alpha.figma.com/hub/file/6158549733/ca02506c-acc3-4709-b0cd-5ad50c1fd20d-cover.png",
    category: "android app",
    github: "https://www.behance.net/gallery/207129449/SNACKFLEET(10-minute-food-delivery-app)",
    webapp: "https://www.behance.net/gallery/207129449/SNACKFLEET(10-minute-food-delivery-app)",
  },
  {
    id: 100,
    title: "Spatial Flow UI 🌌",
    date: "June - July 2024",
    description:
      "Experience smooth and visually stunning transitions between UI elements, enhancing the overall user journey.",
    image:
      "https://s3-alpha.figma.com/hub/file/6566363107/3a98bf09-5f80-465d-a9b5-7141d72f3621-cover.png",
    category: "android app",
    github: "https://www.behance.net/gallery/207212061/Spatial-Flow-UI-",
    webapp: "https://www.behance.net/gallery/207212061/Spatial-Flow-UI-",
  },
  {
    id: 4,
    title: "How QR Codes Work ",
    date: "October - November 2024",
    description:
      "The Tech Behind Those Little Black-and-White Squares.",
    image:
      "https://s3-alpha.figma.com/hub/file/6567184284/a0c1b73e-cb1f-4759-ac53-c26baead9226-cover.png",
    category: "caseStudy",
    github: "https://www.behance.net/gallery/207213825/-Netflix-Landing-Page-UX-Case-Study-",
    webapp: "https://medium.com/@yashwanthpothala04/how-qr-codes-work-the-tech-behind-those-little-black-and-white-squares-4cb142df525e",
  }
  
];

