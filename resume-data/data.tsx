export const BLUR_DELAY=0.04

export const DATA = {
  personalData:{
    name:"Yogesh Singh",
    description:"I am a Frontend Developer. I love to learn and explore new technologies and am passionate about problem-solving. I love to do most of the things using TypeScript.",
    skill:["Javascript","Python",'TypeScript',"Node.js","React.js","Next.js","Remix.js","Svelte.js","Zustand","Jotai","Express.js","MongoDB","Docker",'GraphQL'],
    email:"singhyogesh2104@gmail.com",
    phone:"+91 8850281705",
    link:[
      {
        name:"github",
        url:"https://github.com/yogesh2104/abt.yogesh"
      },
      {
        name:"linkedin",
        url:"https://www.linkedin.com/in/abt-yogesh"
      },
      {
        name:"x",
        url:"https://x.com/im_yogesh88"
      },
      {
        name:"instagram",
        url:"https://instagram.com/im.yogesh_"
      },
      {
        name:"stackoverflow",
        url:"https://stackoverflow.com/users/19811812/yogesh-singh?tab=profile"
      }
    ],
    resume: "/SinghYogesh.pdf",
    aboutMe:`I'm a 25 y/o belonging to the Homo sapiens species 🤣 — a brother, a son, a friend, and a self-taught web developer and programmer. I have completed my **MCA (Master of Computer Applications)**, but my programming journey started much earlier. Back in the second year of my BSc (because my first year passed in sports 😁). My web development journey began with frontend development, using only **HTML**, **CSS**, and simple **JavaScript**. If you're curious about the technologies I know, here&apos;s the list: - **Python** (❤️) - **JavaScript** - Frameworks: **React.js**, **Next.js**, **Tailwind CSS** - **MERN Stack** (Currently Learning 🚀) Apart from coding and programming, I enjoy: - Playing **cricket** (🏏) — because touching grass is important! - Listening to **soft music** while watching clouds drift by 😳 - Playing mobile games like **Battle Royale** games When I&apos;m not doing any of the above. 

---
That&apos;s pretty much everything about me.  
`
  },
  educations: [
    {
      id: 1,
      year: "2020-2024",
      title:"Master of Computer Applications (MCA)",
      school:"Noida Institute Of Engineering And Technology,Greater Noida",
      location:"UP. Greater Noida",
      field:"Computer Application"
    },
    {
      id: 2,
      year:"2017 - 2020",
      title:"Bachelor of Science (B.Sc IT)",
      school:"Anand Vishwa Gurukul Sr. Night College Thane West Maharashtr",
      location:"Thane, Maharashtra",
      field:"Information Technology"
    },
    {
      id: 3,
      year: "2015 - 2017",
      title:"Higher Secondary Certificate(HSC)",
      school:"Gaynodya Vidya Mandir Junior College Thane(W),Maharashtra",
      location:"Thane, Maharashtra",
      field:"Science"
    },
    {
      id: 4,
      year: "2014 - 2015",
      title:"Secondary School Certificate(SSC)",
      school:"Gaynodya Vidya Mandir Junior College Thane(W),Maharashtra",
      location:"Thane, Maharashtra",
      field:"Regular"
    },
  ],
  experiences: [
    {
      company: "Emarsun Technology",
      role: "Full Stack Developer",
      startDate: "Nov 2024",
      endDate: "Jan 2025",
      location: "Thane, IN",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS","Express.js","Mongodb", "Shadcn UI", "Zustand"]
    },
    {
        company: "Weingenious Technocrats Private Ltd",
        role: "Frontend Developer",
        startDate: "Nov 2022",
        endDate: "Oct 2024",
        location: "Surat, IN",
        technologies: ["React.js", "Next.js","Tailwind CSS", "Redux", "Zustand","Material UI","Git", "CI/CD", "Graphql"]
    },
    {
        company: "Cloud Analogy Private Ltd",
        role: "Salesforce developer Intern",
        startDate: "Feb 2022",
        endDate: "Apr 2022",
        location: "Noida, IN",
        technologies: ["Java","Apex lightning","SOQL"]
    },
  ],
  projectData: [
    {
      name: "ShapexUI",
      title: "ShapexUI",
      results: [
        { title: "This is a collection of re-usable components." },
        { title: "You can copy and paste into your web apps." },
      ],
      link: "https://www.shapexui.site",
      code:"https://github.com/yogesh2104/shapex-ui",
      image: '/project/shapexui.png',
      tools: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Shadcn/ui'],
      role: 'Maintainer',
    },
    {
      name: "Debate-AI",
      title: "Debate-AI",
      results: [
        { title: "Developed an AI-powered debate platform." },
        { title: "Debate summaries with performance scores, resource recommendations," },
      ],
      link: "https://debate-arena.vercel.app/",
      code:"",
      image: '/project/debate.png',
      tools: ['NextJs 15', 'MongoDB(Prisma ORM)', 'AuthJs'],
      role: 'Full Stack Developer',
    },
    {
      name: "Noter",
      title: "Notion clone.",
      results: [
        { title: "Noter serves as the collaborative workspace." },
        { title: "Where enhanced and more efficient work takes place." },
      ],
      link: "https://noter-steel.vercel.app/",
      code:"https://github.com/yogesh2104/noter",
      image: '/project/noter.png',
      tools: ['NextJs', 'ConvexDB', 'Clerk Auth'],
      role: 'Full Stack Developer'
    },
    {
      name: "PromptForAi",
      title: "Discover & Share AI Prompts.",
      results: [
        { title: "Discover AI Prompt and Share AI" },
        { title: "Create new prompt" },
        { title: "Also you can Search other people prompt" },
      ],
      link: "https://prompt-for-ai.vercel.app/",
      image: '/project/promtForAi.png',
      tools: ['NextJs', 'MongoDB', 'NextAuth'],
      role: 'Full Stack Developer',
      code: 'https://github.com/yogesh2104/promptForAI'
    },
    {
        name: "Smart Health Advisor",
        title: "Predicts Diseases Based On Symptoms",
        results: [
          { title: "Discover AI Prompt and Share AI" },
          { title: "Create new prompt" },
          { title: "Also you can Search other people prompt" },
        ],
        link: "https://smart-health-advisor.vercel.app/",
        image: '/project/health.png',
        tools: ['NextJs', 'Shadcn UI', 'Django','Python'],
        role: 'Frontend Developer',
        code: 'https://github.com/saurabhsharma104/Smart-Health-Advisor',
    }, 
    {
        name: "Coding InterView",
        title: "Coding-Interview-University Repo.",
        results: [
          { title: "This is simple static web page" },
          { title: "Simplified version of coding-interview-university github repo." },
        ],
        link: "https://yogesh2104.github.io/CodingInterView/",
        image: '/project/iViewer.png',
        tools: ['HTML', 'CSS','Javascript', 'Bootstrap'],
        role: 'Frontend Developer',
        code: 'https://github.com/yogesh2104/CodingInterView',
    },
    {
      name: "ThreeJs Diamond",
      title: "ThreeJs Diamond Customizer.",
      results: [
        { title: "This is 3D Dimaond Renderer." },
        { title: "Allow to change ring and diamond color" },
      ],
      link: "https://threejsdesign.vercel.app/",
      image: '/project/threejs.png',
      tools: ['Nextjs','Javascript', 'ThreeJS', 'Zustand', 'Tailwind CSS'],
      role: 'Frontend Developer',
      code: null,
    }, 
  ],
};