import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
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
