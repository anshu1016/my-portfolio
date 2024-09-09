import project1 from "../assets/projects/financeApp.jpg";
import project2 from "../assets/projects/chatApp.jpg";
import project3 from "../assets/projects/saathiSocialApp.jpg";
import project4 from "../assets/projects/nothingApp.jpg";

export const HERO_CONTENT = `I am a passionate frontend developer with 2 years of hands-on experience, dedicated to creating engaging and intuitive web applications. My expertise lies in leveraging modern technologies like React and Tailwind CSS to build seamless user interfaces. As a keen learner and a good team player, I am always eager to expand my skill set and collaborate on innovative projects. My enthusiasm for technology drives me to continuously explore new tools and techniques, aiming to deliver exceptional user experiences and contribute effectively to team goals.`;

export const ABOUT_TEXT = `I am a dedicated frontend developer with 2 years of experience, specializing in creating user-friendly and efficient web applications using React,NodeJS and Tailwind CSS. I am passionate about continuous learning and actively practice data structures and algorithms on LeetCode and Coding Ninjas, tracking my progress through regular GitHub commits. I thrive in collaborative environments, enjoy problem-solving, and stay active by playing cricket and exploring new technologies.I love to make projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Engineer",
    company: "Nagarro",
    description: `Worked on several React projects, applying my knowledge of various tech stacks including JavaScript, React.js, Node.js, and SQL. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines. Additionally, I am Microsoft AZ-900 certified. At Nagarro, I honed my skills in Docker, facilitating efficient containerization processes and mastering organizational workflows.`,
    technologies: [
      "Javascript",
      "React.js",
      "NodeJS",
      "AZ-900 Certified",
      "SQL",
      "Docker",
      "AWS",
    ],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "MERN-Finance-Dashboard-using-ML",
    appLink: "https://mern-finance-ml-app.netlify.app/",
    sourceLink: "https://github.com/anshu1016/MERN-Finance-Dashboard-using-ML",
    image: project1,
    description:
      "Dashboard with real-time data visualization and financial insights Machine Learning-based financial predictions A fully functional Finance Dashboard built using the MERN stack, integrating Machine Learning for future financial predictions.",
    technologies: [
      "MaterialUI",
      "ReactJS",
      "Node.js",
      "MongoDB",
      "PWA",
      "Regression JS",
      "Rechart JS",
    ],
    status: true,
  },
  {
    title: "Tarang-React-Chatting-App",
    image: project2,
    appLink: "",
    sourceLink:
      "https://github.com/anshu1016/Tarang-React-Chatting-App/tree/main",
    description:
      "A real-time chatting application built using React, Socket.io, and Express. The app features real-time messaging, profile picture uploads to AWS S3, and user authentication. This project demonstrates effective use of modern web technologies to create an engaging messaging experience.",
    technologies: [
      "ReactJS",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
      "AWS",
      "Socket.IO",
    ],
    status: false,
  },

  {
    title: "Saathi - Social Media App",
    image: project3,
    appLink: "https://your-social-saathi.vercel.app/",
    sourceLink: "https://github.com/anshu1016/your-social-Saathi",
    description:
      "Your Social Saathi is a social media application designed to bring people together. It offers a platform for users to share their thoughts, interact with others, and stay connected.",
    technologies: ["HTML", "CSS", "ReactJS"],
    status: true,
  },
  {
    title: "NothingBuy - An Electronics E-Commerce Platform",
    image: project4,
    appLink: "https://nothing-buy.vercel.app/",
    sourceLink: "https://github.com/anshu1016/nothingBuy",
    description:
      "NothingBuy is a simple, intuitive e-commerce application where you can browse products, add them to your cart, and proceed with checkout. Our goal is to provide a seamless shopping experience for users.",
    technologies: ["HTML", "CSS", "React.js"],
    status: true,
  },
];

export const CONTACT = {
  address: "Punjab, India ",
  phoneNo: "6239419039 ",
  email: "arunshukla98710@gmail.com",
};

export const BLOGS = [
  {
    title: "Optional Chaining in JS",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1676895145329/1eac70c1-647e-48bd-ba53-c58c6087371e.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    content:
      "Learn about optional chaining in JavaScript and how it can simplify your code.",
    url: "https://shuklathecoder.hashnode.dev/optional-chaining-in-js",
  },
  {
    title: "Nullish Coalescing Operator",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1676650404148/91618c0e-a224-469f-84cd-5cb23ce5d9e6.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    content:
      "Explore the nullish coalescing operator in JavaScript and its use cases.",
    url: "https://shuklathecoder.hashnode.dev/nullish-coalescing-operator",
  },
  {
    title: "Type Error vs Reference Error",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/cD-_fbY6yww/upload/2a7098ab43305ff4e22f52e07f57a10f.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    content:
      "Understand the differences between type errors and reference errors in JavaScript.",
    url: "https://shuklathecoder.hashnode.dev/type-error-vs-reference-error",
  },
  {
    title: "Why Do We Always Get Undefined on Calling Console.log?",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/t0Bv0OBQuTg/upload/c9f0a7e011c52d054d079a2f6a63b174.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    content:
      "Find out why `console.log` often returns `undefined` and what it means.",
    url: "https://shuklathecoder.hashnode.dev/why-do-we-always-get-undefined-on-calling-consolelog-whyyyyy",
  },
  {
    title: "What is the Difference Between == and === in JS?",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/0DJHJcpwN9Q/upload/83a286836ea26d4d2a0b5001ced35594.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    content:
      "Learn about the difference between `&&` and `||` operators in JavaScript.",
    url: "https://shuklathecoder.hashnode.dev/what-is-the-difference-between-and-in-js",
  },
];
