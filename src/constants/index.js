import {
  fullstack, embedded, machinelearning, productdev,
  scoreport, spatialcalc, eegheadset, musepet1, oreprediction, projectOpener,
  airops, GHL, mint, JH, amazon
} from "../assets";

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "https://github.com/jtsang02/portfolio/blob/main/public/Resume.pdf",
    title: "Resume",
  }
];

export const socials = [
  {
    id: "github",
    link: "https://www.github.com/jtsang02",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg",
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/josiah-tsang-jt02/",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg",
  },
  {
    id: "instagram",
    link: "https://www.instagram.com/josiah.tsang",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg",
  },
];

const services = [
  {
    title: "Full-Stack Development",
    icon: fullstack,
  },
  {
    title: "Embedded Software",
    icon: embedded,
  },
  {
    title: "Machine Learning & AI",
    icon: machinelearning,
  },
  {
    title: "Product Development",
    icon: productdev,
  }
];

const technologies = [
  {
    name: "HTML5",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  {
    name: "CSS3",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "ReactJS",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
    link: "https://reactjs.org/",
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Bootstrap",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg",
    link: "https://getbootstrap.com/",
  },
  {
    name: "Material UI",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg",
    link: "https://material-ui.com/",
  },
  {
    name: "NodeJS",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
    link: "https://nodejs.org/en/",
  },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Express",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg",
    link: "https://expressjs.com/",
  },
  {
    name: "Kotlin",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/kotlin-colored.svg",
    link: "https://kotlinlang.org/",
  },
  {
    name: "C++",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg",
    link: "https://learn.microsoft.com/en-us/cpp/?view=msvc-170",
  },
  // {
  //   name: "C#",
  //   icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg",
  //   link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  // },
  {
    name: "Python",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
    link: "https://www.python.org/",
  },
  {
    name: "Git",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
    link: "https://git-scm.com/",
  },
  {
    name: "Figma",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
    link: "https://www.figma.com/",
  },
];

const experiences = [
  {
    title: "Software Development Engineer Intern",
    company_name: "Amazon",
    icon: amazon, 
    iconBg: "#383E56",
    date: "Jun 2024 - Oct 2024",
    points: [
      "Designed and developed a web portal for internal vendors to view delivery window date ranges and improving the accuracy of delivery window queries by 100% across various supply chain operations.",
      "Automated retrieval of historical delivery window logs, eliminating the need for on-call engineers to run manual queries.",
      "Deployed a highly scalable API hosted on AWS ECS Fargate to query a DocumentDB elastic cluster, set up with AWS CDK to store delivery window calculation logs and handle up to 1000 concurrent requests per second.",
      "Built a modern frontend using ReactJS and TypeScript, introducing a 2D calendar feature to provide an intuitive visualizer of the delivery window as date ranges.",
      "Collaborated with vendor and product managers to identify key user pain points and gather technical requirements, ensuring the solution aligned with business needs."
    ],
  },
  {
    title: "Project Engineer Intern",
    company_name: "Jensen Hughes",
    icon: JH,
    iconBg: "#383E56",
    date: "Sept 2023 - Dec 2023",
    points: [
      "Collaborated with project teams in an Agile environment, interpreting stakeholder needs to deliver innovative solutions.",
      "Fostered seamless client communication, ensuring product development aligned 100% with client expectations and deadlines.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "UBC Multifaceted Innovation in NeuroTechnology",
    icon: mint,
    iconBg: "#383E56",
    date: "Sept 2022 - Present",
    points: [
      "Developed a CRUD app using the MongoDB, Express, React, Node.js (MERN) stack to process 1000+ EEG data points for multi-disciplinary engineering design project focused on medical technology.",
      "Reduced EEG data analysis time by 30%, allowing signal processing researchers to focus on interpretation and design improvements.",
      "Streamlined backend development by writing RESTful API routes and making endpoint requests using Axios.",
    ],
  },
  {
    title: "Database Developer Intern",
    company_name: "Claribase",
    icon: airops,
    iconBg: "#383E56",
    date: "Jan 2022 - Aug 2022",
    points: [
      "Built business databases and automations that streamlined client workflows, resulting in 20% increase in efficiency.",
      "Accessed APIs to migrate data from external sources and wrote scripts in JavaScript to implement custom database features.",
      "Wrote scripts using JS and Airtable’s API to retrieve data across multiple tables within a database for a retail client.",
      "Automated 40 task creations with condition-based trigger, saving an estimated 80 hours of manual work for a multi-phase retail project spanning 4 linked databases.",
    ],
  },
  {
    title: "Building Code Consultant",
    company_name: "GHL Consultants Ltd",
    icon: GHL,
    iconBg: "#383E56",
    date: "Jul 2015 - Aug 2019",
    points: [
      "Consulted with architects and engineers to interpret and apply the BC Building Code to building designs.",
      "Developed and introduced an internal software program to automate spatial interpolation calculations.",
      "Held internal onboarding sessions to instruct technical staff of 30 – 40 employees how to use the program.",
      "Increased office efficiency by reducing billable hours by 3 – 5 hours per project, equating to 500+ work hours saved annually.",
    ],
  }
];

const projects = [
  {
    name: "Project Opener",
    description:
      "A Next JS web app built for project managers to make requests for project openings, view the status of their requests, and assign to administrators for processing. ",
    date: "Jun 2023 - Aug 2023",
    points: [],
    tags: [
      {
        name: "NextJS",
        color: "#61DBFB",
      },
      {
        name: "Auth0",
        color: "green-text-gradient",
      },
      {
        name: "Nodemailer",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "red-text-gradient",
      },
    ],
    image: projectOpener,
    source_code_link: "https://github.com/jtsang02/project-opener",
  },
  {
    name: "MUSE Pet",
    description:
      "A full-stack application that interacts with an EEG headset to retrieve, analyze, and store a virtual pet's signal data.   Real time signal processing predicts the user's attentiveness.",
    date: "Jan 2023 - Mar 2023",
    points: [
      "Developed a CRUD app using the MongoDB, Express, React, Node.js (MERN) stack to retrieve, analyze and store EEG signals.",
      "Built a user intuitive interface for visualizing and interacting with EEG data using React, TypeScript and Bootstrap.",
      "Programmed an Arduino-based MCU to display score, shots and clock, and accompanying Android app controller.",
      "Assisted with backend development by writing RESTful API route methods and making endpoint requests using Axios.",
      "Demonstrated the working product at the 2022 UBC Engineering Open House to 100+ attendees.",
    ],
    tags: [
      {
        name: "TypeScript",
        color: "#61DBFB",
      },
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Axios",
        color: "red-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      }
    ],
    image: musepet1,
    source_code_link: "https://github.com/UBCMint/MUSE-Pet",
  },
  {
    name: "ScorePort",
    description:
      "An inflatable electronic scorekeeping system that compresses for compact storage. A mobile app controls the scoreboard via Bluetooth.",
    date: "Sept 2021 - Apr 2022",
    points: [
      "Developed an Android app using Kotlin to control an electronic scoreboard system.",
      "Implemented Bluetooth connection using Android Bluetooth Module to transfer data to the scoreboard on a connected thread.",
      "Programmed an Arduino-based MCU to display score, shots and clock, and accompanying Android app controller.",
      "Utilized Serial communication on the MCU to receive commands sent from Android app and update NeoPixel LED display.",
      "Designed mobile app wireframes in Figma and translated wireframes into XML code for the mobile app GUI."
    ],
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "Kotlin",
        color: "green-text-gradient",
      },
      {
        name: "C++",
        color: "pink-text-gradient",
      },
      {
        name: "Bluetooth",
        color: "pink-text-gradient",
      },
      {
        name: "XML",
        color: "red-text-gradient",
      }
    ],
    image: scoreport,
    source_code_link: "https://github.com/jtsang02/ScorePort",
  },
  {
    name: "Spatial Calculator",
    date: "Jul 2021 - Aug 2021",
    description:
      "A web app to calculate the percentage of unprotected openings and additional construction requirements for an exterior wall of a building.",
    points: [
      "Built a frontend web app with a custom domain name and hosted on GitHub Pages for engineers and architects",      "Implemented Bluetooth connection using Android Bluetooth Module to transfer data to the scoreboard on a connected thread.",
      "Wrote algorithms to search and interpolate Building Code values for percentage values stored in a 2D array.",
      "Developed a user-friendly interface using HTML, CSS, and JavaScript to allow users to input data and view results.",    ],
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: spatialcalc,
    source_code_link: "https://github.com/jtsang02/spatial-calc-js",
  },
  {
    name: "Hand Classifier",
    description:
      "Collected data from a Muse2 EEG headset and built a classifier to accurately predict if a person is using their dominant or non-dominant hand.",
    date: "Oct 2022 - Dec 2022",
    points: [
      "Conducted 90+ hand dominance tests on individuals to collect EEG brainwave signals to build a comprehensive dataset.",
      "Built and trained various machine learning classifiers including and Support Vector Machine (SVM) and K-Nearest Neighbour.",
      "Achieved an 80.65% model accuracy with a Non-Linear SVM while meeting minimum sensitivity and f-score metrics.",
    ],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "SciKit-Learn",
        color: "green-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
    ],
    image: eegheadset,
    source_code_link: "https://github.com/jtsang02/MANU-465-EEG4",
  },
  {
    name: "Ore Quality Prediction",
    description:
      "Machine learning model that predicts how much silica is in ore concentrate.  The model is used to optimize the flotation process in a mine.",
    date: "Nov 2022 - Dec 2022",
    points: [
      "Conducted 90+ hand dominance tests on individuals to collect EEG brainwave signals to build a comprehensive dataset.",
      "Built and trained various machine learning classifiers including and Support Vector Machine (SVM) and K-Nearest Neighbour.",
      "Achieved an 80.65% model accuracy with a Non-Linear SVM while meeting minimum sensitivity and f-score metrics.",
    ],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "SciKit-Learn",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: oreprediction,
    source_code_link: "https://github.com/jtsang02/Quality-Prediction-of-Iron-Ore",
  },
];

export { services, technologies, experiences, projects };
