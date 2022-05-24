export interface CourseData {
  id: string;
  featuredImage: string;
  title: string;
  description: string;
  slug: string;
  category: string[];
  additionalDetails?: string;
  svgIconUrls: string[];
  regularPrice: {
    dollar: number;
    naira: number;
  };
  salePrice: {
    dollar: number;
    naira: number;
  };
  noOfProjects: number;
  courseOutline: string[];
  active: boolean;
  level: string;
  prerequisites? : string[];
  featured?: boolean;
}

export const courses: CourseData[] = [
  {
    id: "frontend-starter-course",
    featuredImage: "/svg/programmer.svg",
    title: "Frontend starter course",
    description: "Learn how to build beautiful websites and web applications",
    slug: "frontend-starter-course",
    category: ["Frontend Web Development"],
    additionalDetails:
      "This program deals with learning how to build the front-end of a web application/website. A front-end developer will be able to correctly interpret a given design to the user interface.",
    svgIconUrls: ["/svg/html.svg", "/svg/css.svg", "/svg/javascript.svg"],
    regularPrice: {
      dollar: 15,
      naira: 6000,
    },
    salePrice: {
      dollar: 5,
      naira: 2000,
    },
    noOfProjects: 6,
    courseOutline: [
      "Internet and the web",
      "How websites work and renders",
      "Web Development Overview",
      "HTML and the Web",
      "Advanced HTML Lessons",
      "Introduction to CSS",
      "CSS Layouts and Responsive Design",
      "Advanced CSS Lessons",
      "Introduction to Javascipt",
      "JavaScript Syntax, Concepts and Control Flow",
      "DOM and Dom Manipulation",
      "Frontend Development Core",
    ],
    active: true,
    level: "Beginner",
    featured: true,
    prerequisites:["A computer (Windows, Mac, or Linux) or mobile phone (Andriod, iOS)", "Internet Connecttion"]
  },
  {
    id: "ui-design-course",
    featuredImage: "/svg/ui-design-tools.svg",
    title: "UI Design Course",
    description: "Learn how to design beautiful user interfaces for any website or app.",
    slug: "ui-design-course",
    category: ["Product Design"],
    additionalDetails:
      "This program is aimed at people interested in UI Design. We’ll start from the very beginning and work all the way through, step by step. In the process, you'd master Figma and learn to design a product, wireframes, mockups etc.",
      svgIconUrls: ["/svg/paint.svg", "/svg/design.svg", "/svg/figma.svg"],
    regularPrice: {
      dollar: 20,
      naira: 8400,
    },
    salePrice: {
      dollar: 10,
      naira: 4200,
    },
    noOfProjects: 7,
    courseOutline: [
      "Introduction to UI Design",
      "UI Design vs UX Design",
      "UI Design Tools",
      "Design Inspiration and Resources",
      "Principles of UI Design",
      "Colors and Color Mixtures",
      "Typography",
      "Drawing and Editing Shapes",
      "Iconography",
      "Building User Interface Components",
      "UI Design Process",
      "Responsive UI Design",
      "Andriod and Material Designs",
      "Creating Design Systems",
      "Protoyping and Testing",
      "Design Presentation",
      "Developer Handoff",
      "Building your portfolio",
      "Bonus Resources and Lessons",
    ],
    active: false,
    level: "All Levels",
    featured: false,
  },
  {
    id: "reactjs-course",
    featuredImage: "/svg/react-hero.svg",
    title: "ReactJS Course",
    description: "Learn ReactJS to create powerful, robust Single Page Applications (SPA)",
    slug: "reactjs-course",
    category: ["Frontend Web Development"],
    additionalDetails:
      "This program deals with learning how to use ReactJS to create Single Page Applications (SPA). We will be learning and using modern practices like Hooks, Context, Reducer, Suspense and more. We will also be learning/using Redux as a state management library.",
      svgIconUrls: ["/svg/javascript.svg", "/svg/react.svg", "/svg/redux.svg"],
    regularPrice: {
      dollar: 20,
      naira: 8400,
    },
    salePrice: {
      dollar: 10,
      naira: 4200,
    },
    noOfProjects: 6,
    courseOutline: [
      "Internet and the web",
      "How websites work and renders",
      "Web Development Overview",
      "HTML and the Web",
      "Advanced HTML Lessons",
      "Introduction to CSS",
      "CSS Layouts",
      "Advanced CSS Lessons",
      "Introduction to Javascipt",
      "JavaScript Syntax, Concepts and Control Flow",
      "DOM and Dom Manipulation",
      "Frontend Development Core",
    ],
    active: false,
    level: "Beginner",
    featured: false,
  },
  {
    id: "fullstack-react-course",
    featuredImage: "/svg/nextjs-hero.svg",
    title: "Fullstack React Course",
    description: "A fullstack ReactJS + NextJS Course integrating both frontend and backend.",
    slug: "fullstack-react-course",
    category: ["Fullstack Web Development", "Frontend Web Development"],
    additionalDetails:
      "This program deals with learning how to build the front-end of a web application/website. A front-end developer will be able to correctly interpret a given design to the user interface.",
      svgIconUrls: ["/svg/javascript.svg", "/svg/react.svg", "/svg/nextjs.svg", "/svg/nodejs.svg"],
    regularPrice: {
      dollar: 25,
      naira: 10400,
    },
    salePrice: {
      dollar: 15,
      naira: 6300,
    },
    noOfProjects: 6,
    courseOutline: [
      "Internet and the web",
      "How websites work and renders",
      "Web Development Overview",
      "HTML and the Web",
      "Advanced HTML Lessons",
      "Introduction to CSS",
      "CSS Layouts",
      "Advanced CSS Lessons",
      "Introduction to Javascipt",
      "JavaScript Syntax, Concepts and Control Flow",
      "DOM and Dom Manipulation",
      "Frontend Development Core",
    ],
    active: false,
    level: "Beginner",
    featured: false,
  },
];
