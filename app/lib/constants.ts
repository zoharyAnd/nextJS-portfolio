import { Skills, Work } from "@/app/lib/types";

export const BANNER_FR = `
  <p class="text-xl lg:text-3xl text-center font-semibold">Développeuse Web et Mobile</p>
  <p class="mb-8 text-center">Full remote enthousiaste</p>
  <p>Passionnée par la création d'UX fluides sur les plateformes web et mobiles,</p>
  <p class="pb-4">Je suis spécialisée dans le développement d'UI, d'API backend robustes et la réalisation de tests complets.</p>
  <p>Je suis déterminée à fournir des solutions de haute qualité tout en adoptant la flexibilité du travail à distance.</p> 
`;

export const BANNER_EN = `
  <p class="text-xl lg:text-3xl text-center font-semibold">Web and Mobile developer</p>
  <p class="mb-8 text-center">Full remote enthousiast</p>
  <p>Passionate about crafting seamless user experiences across web and mobile platforms,</p>
  <p class="pb-4">I am proficient in building UI interfaces, developing robust backend APIs, and implementing thorough testing.</p>
  <p>I am dedicated to delivering high-quality solutions while embracing the flexibility of remote work.</p>
`;

export const TIMELINE_FR: Work[]
  = [
    {
      job: 'Développeuse Application Mobile et Web',
      date: 'Juin 2022 - Actuellement',
      place: 'Exponent.ch - Switzerland - Remote',
      skills: ['NextJs', 'Typescript', 'Python', 'GraphQL', 'ERPNext', 'Frappe', 'Docker', 'Playwright', 'React Native'],
      logo: 'exponent.svg'
    },
    {
      job: 'Consultante, Web Développeuse',
      date: 'Décembre 2020 - Février 2024',
      place: 'Maasil Inc - Antananarivo, Madagascar',
      skills: ["NextJS", "ReactJS", 'NodeJS', 'NestJS', 'Typescript'],
      logo: "maasil.jpg"
    },
    {
      job: `Développeuse d'Applications Web`,
      date: 'Octobre 2021 - Juillet 2023',
      place: 'Astek - Antananarivo, Madagascar',
      skills: ['ReactJS', 'AngularJS'],
      logo: 'astek_madagascar.jpeg'
    },
    {
      job: `Développeuse d'Application Web`,
      date: 'Mai 2021 - Juillet 2021',
      place: 'ESA - Antananarivo, Madagascar',
      skills: ['ReactJS', 'NodeJs', 'Express'],
      logo: 'esa.jpeg'
    },
    {
      job: 'Web Développeuse - Remote',
      date: 'Avril 2021 - Décembre 2021',
      place: 'Opcadia - Lyon, France',
      skills: ['NextJS'],
      logo: 'optedif.jpg'
    },
    {
      job: 'Web Développeuse - Temps partiel',
      date: 'Novembre 2020',
      skills: ['VueJS', 'Laravel'],
      place: 'Inforce Madagascar, Antananarivo',
    },
    {
      job: 'Web Développeuse - Remote',
      date: 'Juillet 2020 - Novembre 2020',
      place: 'Esokia Web Agency, Mauritius',
      logo: 'esokia.jpeg'
    },
    {
      job: 'Développeuse ReactJs - Remote',
      date: 'Mai 2020 - Septembre 2020',
      place: 'Datadict Ltd, Paris, France',
      logo: 'datadict.jpeg'
    },
    {
      job: 'Développeuse Web et Designer - Remote',
      date: 'Avril 2020 - Septembre 2020',
      place: 'Sedeco Ltd, Mauritius',
      logo: 'sedeco.jpeg'
    },
    {
      job: 'Web Développeuse - Stage',
      date: 'Décembre 2018 - Août 2019',
      place: 'Esokia Web Agency, Mauritius',
      logo: 'esokia.jpeg'
    },
  ];

export const TIMELINE_EN: Work[] = [
  {
    job: 'Web and Mobile application developer',
    date: 'June 2022 - Current',
    place: 'Exponent.ch - Switzerland - Remote',
    skills: ['NextJs', 'Typescript', 'GraphQL', "PayloadCMS", "PWA", "Push notifications", 'Docker', 'Playwright', 'React Native', 'Python'],
    logo: 'exponent.svg'
  },
  {
    job: 'Consultant, Web Developer',
    date: 'December 2020 - February 2024',
    place: 'Maasil Inc - Antananarivo, Madagascar',
    skills: ["NextJS", "ReactJS", 'NodeJS', 'NestJS', 'Typescript'],
    logo: "maasil.jpg"
  },
  {
    job: 'Web application Developer',
    date: 'October 2021 - July 2023',
    place: 'Astek - Antananarivo, Madagascar',
    skills: ['ReactJS', 'AngularJS'],
    logo: 'astek_madagascar.jpeg'
  },
  {
    job: 'Web Application Developer',
    date: 'May 2021 - July 2021',
    place: 'ESA - Antananarivo, Madagascar',
    skills: ['ReactJS', 'NodeJs', 'Express'],
    logo: 'esa.jpeg'
  },
  {
    job: 'Web Developer - Remote',
    date: 'April 2021 - December 2021',
    skills: ['NextJS'],
    place: 'Opcadia - Lyon, France',
    logo: 'optedif.jpg'
  },
  {
    job: 'Web Developer - Part time',
    date: 'November 2020',
    skills: ['VueJS', 'Laravel'],
    place: 'Inforce Madagascar, Antananarivo',
  },
  {
    job: 'Web Developer - Remote',
    date: 'July 2020 - November 2020',
    place: 'Esokia Web Agency, Mauritius',
    logo: 'esokia.jpeg'
  },
  {
    job: 'ReactJs Developer - Remote',
    date: 'May 2020 - September 2020',
    place: 'Datadict Ltd, Paris, France',
    logo: 'datadict.jpeg'
  },
  {
    job: 'Web Developer and Designer - Remote',
    date: 'April 2020 - September 2020',
    place: 'Sedeco Ltd, Mauritius',
    logo: 'sedeco.jpeg'
  },
  {
    job: 'Web Developer - Internship',
    date: 'December 2018 - August 2019',
    place: 'Esokia Web Agency, Mauritius',
    logo: 'esokia.jpeg'
  },
];

export const SKILLS_SET: Skills[] = [
  { name: "ReactJS", percent: 95, img: "reactjs.png" },
  { name: "NextJS incl. Next13", percent: 96, img: "nextjs.jpg" },
  { name: "PayloadCMS", percent: 65, img: "payloadcms.png" },
  { name: "NodeJS", percent: 90, img: "nodejs.png" },
  { name: "GraphQL", percent: 90, img: "graphql.png" },
  { name: "Vue 2 & 3", percent: 70, img: "vuejs.jpg" },
  { name: "Nuxt", percent: 75, img: "nuxt.png" },
  { name: "Plasmic", percent: 90, img: "plasmic.png" },
  { name: "NestJS", percent: 65, img: "nestjs.jpg" },
  { name: "Flutter", percent: 60, img: "flutter.jpg" },
  { name: "React Native", percent: 70, img: "reactnative.png" },
  { name: "Python", percent: 55, img: "python.png" },
];

export const FAMILIARITIES: string[] = [
  "Typescript", "Composing Docker containers", "Playwright tests", "Gleap integration", "Stripe integration", "Datatrans integration", "Github Actions", "Implementing CI/CD Pipelines", "Tailwind", "Storybook", "Postgres", "MongoDB", "Firebase", "Web Push notifications", "Firebase push notifications", "PWA apps"
]

export const FAMILIAR_TOOLS: string[] = [
  "Github", "GitLab", "Notion", "Figma", "JIRA", "Linear", "Heroku", "Vercel", "Netlify", "Ngrok"
]