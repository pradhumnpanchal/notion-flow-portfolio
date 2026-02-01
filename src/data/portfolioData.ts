export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  type: "talk" | "award" | "competition";
  link?: string;
  event?: string;
  year?: string;
  details?: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  profileImageUrl: string | null;
}

export const personalInfo: PersonalInfo = {
  name: "Pradhumn Panchal",
  title: "Software Development Engineer",
  bio: "Passionate Software Engineer with a strong foundation in backend systems and problem-solving. I specialize in Java, Spring, and distributed systems, with hands-on experience building scalable, reliable services. I care deeply about clean code, correctness, performance, and translating complex business requirements into robust technical solutions.",
  location: "Bangalore, India",
  email: "pradhumn44@gmail.com",
  linkedin: "https://www.linkedin.com/in/pradhumnpanchal/",
  github: "https://github.com/pradhumnpanchal",
  profileImageUrl: null,
};

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "React Nexus Speaker",
    description:
      "Delivered a talk on innovative approaches to CSR, SSR, and server components in modern web applications",
    type: "talk",
    event: "React Nexus",
    link: "https://www.youtube.com/watch?v=Dyu3h06Sy1A&t=18s&ab_channel=reactify",
    details:
      "Explored cutting-edge rendering strategies and their impact on web performance and user experience",
    icon: "🎤",
  },
  {
    id: "2",
    title: "Google DevFest Delhi Speaker",
    description:
      "Presented 'From Client to Server: But Why?' exploring the role of SSR in enhancing user experiences",
    type: "talk",
    event: "Google DevFest Delhi 2024",
    link: "https://gdg.community.dev/events/details/google-gdg-new-delhi-presents-devfest-new-delhi-2024/cohost-gdg-new-delhi",
    details:
      "Deep dive into server-side rendering benefits and implementation strategies for modern web applications",
    icon: "🎙️",
  },
  {
    id: "3",
    title: "Superstar Engineer Award",
    description:
      "Recognized for exceptional engineering contributions and leadership at Tessell",
    type: "award",
    event: "Tessell",
    year: "2024",
    details:
      "Single-handedly revitalized the outdated DEMO website, aligning it with the Tessell App. Devised a novel coding architecture enabling seamless addition of new features within a day. Implemented Service Details page for Vector DB services with configurable UI framework. Actively engages in PR reviews, addresses critical staging and production bugs, and provides valuable assistance to team members.",
    icon: "🏆",
  },
  {
    id: "4",
    title: "Social Geek Award",
    description:
      "Recognized for outstanding social and technical contributions during tenure at Yugabyte",
    type: "award",
    event: "Yugabyte Annual Award Function",
    year: "2023",
    details:
      "Awarded for exceptional collaboration, knowledge sharing, and positive impact on team culture",
    icon: "🏅",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "CodEngine - Interactive Online Judge",
    description:
      "A modern online judge platform leveraging the CodeChef API to provide a seamless and interactive coding experience with responsive UI and syntax-highlighted code editor.",
    technologies: ["React", "JavaScript", "CodeChef API", "CSS3", "HTML5"],
    imageUrl:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/yashpreetbathla/CodEngine/tree/master",
    featured: true,
  },
  {
    id: "2",
    title: "SplitUp Web – Expense Management App",
    description:
      "A full-featured expense tracking and bill-splitting app built with React and Redux Toolkit for friends, roommates, or group travelers with real-time summaries.",
    technologies: [
      "React",
      "Redux Toolkit",
      "TailwindCSS",
      "DaisyUI",
      "JavaScript",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/yashpreetbathla/splitUp-web",
    featured: true,
  },
  {
    id: "3",
    title: "SplitUp Backend",
    description:
      "The backend logic that powers the SplitUp Web App with robust APIs, JWT-based authentication, and real-time balance updates with clean RESTful APIs.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/yashpreetbathla/splitup",
    featured: false,
  },
  {
    id: "4",
    title: "DevTinder – Developer Networking App",
    description:
      "A real-time networking platform for developers to connect and collaborate based on interests and skills – inspired by Tinder with Socket.IO integration.",
    technologies: ["Node.js", "Socket.IO", "MongoDB", "Express.js", "JWT"],
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/yashpreetbathla/devTinder",
    featured: false,
  },
  {
    id: "5",
    title: "DevTinder Web",
    description:
      "The frontend for DevTinder providing a sleek, interactive interface to explore and connect with developers with Tinder-style swiping and real-time messaging.",
    technologies: [
      "React",
      "DaisyUI",
      "TailwindCSS",
      "Socket.IO",
      "TypeScript",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/yashpreetbathla/devTinder-web",
    featured: true,
  },
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: [
      "Java",
      "SQL",
    ],
  },
  {
    category: "Backend Frameworks",
    items: [
      "Spring Boot",
      "Spring Data JPA",
      "RESTful API Design",
    ],
  },
  {
    category: "Databases & Storage",
    items: [
      "PostgreSQL",
      "MySQL",
      "AWS DynamoDB",
      "Redis",
    ],
  },
  {
    category: "Cloud & AWS",
    items: [
      "AWS EC2",
      "AWS S3",
      "AWS RDS",
      "AWS Lambda",
      "AWS CloudWatch",
      "AWS SQS",
      "AWS SNS",
    ],
  },
  {
    category: "Distributed Systems & Infra",
    items: [
      "Kafka",
      "Background Jobs",
      "Schedulers",
      "API Gateways",
    ],
  },
  {
    category: "Testing & Tooling",
    items: [
      "JUnit",
      "Mockito",
      "Gradle",
      "Git",
    ],
  },
  {
    category: "Core Concepts",
    items: [
      "System Design",
      "Data Structures & Algorithms",
      "Competitive Programming",
    ],
  },
];


export const experiences: Experience[] = [
  {
    id: "1",
    company: "Syfe",
    position: "Software Development Engineer II",
    duration: "May 2024 - Nov 2025",
    description: [
      "Technical lead for the Funds Management System (FMS), a core platform with 153 APIs handling portfolios, orders, transactions, trades, withdrawals, deposits, cash flows, and daily NAV computation for 200K+ users.",
      "Led end-to-end delivery of multiple business-critical portfolio launches, contributing to a 10% increase in AUM and enabling new investment products across Singapore and Hong Kong.",
      "Drove architectural improvements to enhance scalability, reliability, and latency, including resolving data consistency issues and optimizing high-traffic APIs.",
      "Spearheaded initiatives to improve team DORA metrics by applying engineering best practices and learnings from prior Amazon experience.",
      "Owned production operations for FMS, including incident response, root cause analysis, and long-term fixes to improve system stability and customer trust.",
    ],
    technologies: [
      "Kotlin",
      "Spring Boot",
      "PostgreSQL",
      "REST APIs",
      "AWS",
      "Distributed Systems",
    ],
  },
  {
    id: "2",
    company: "Amazon",
    position: "Software Development Engineer",
    duration: "Aug 2021 - May 2024",
    description: [
      "Transitioned from an intern role to a full-time Software Development Engineer within the same team.",
      "Served as the Point of Contact for team readiness during the 2021 Amazon Prime annual sale, managing payment invoicing and accounting systems for the Amazon affiliate program.",
      "Contributed to the Amazon Insurance Store, which successfully launched in the UK marketplace in October 2022.",
      "Developed an aggregator layer using GraphQL to support extensible and reusable queries for dependent services.",
      "Owned and enhanced multiple customer-facing services backed by AWS infrastructure to improve functionality and performance.",
    ],
    technologies: [
      "Java",
      "GraphQL",
      "AWS",
      "Distributed Systems",
      "Microservices",
    ],
  },
  {
    id: "3",
    company: "Amazon",
    position: "Software Development Engineer Intern",
    duration: "Jan 2021 - Jul 2021",
    description: [
      "Worked on high-traffic legacy systems supporting accounting and transaction workflows.",
      "Migrated a service from Apollo-based infrastructure to AWS using Lambda, CloudFormation, SQS, SNS, and Kinesis.",
      "Owned operational support for a service handling accounting transactions, ensuring reliability and correctness.",
    ],
    technologies: [
      "AWS Lambda",
      "CloudFormation",
      "SQS",
      "SNS",
      "Kinesis",
    ],
  },
];

