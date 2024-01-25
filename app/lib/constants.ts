import { Skills, Work } from "@/app/lib/types";

export const BANNER_FR = `
  <p class="py-4">
    Développeuse web et mobile motivée, je suis en quête d'un parcours constructif et enrichissant. Mon objectif principal est de constamment monter en compétences et accumuler le plus d'expérience tout en produisant un travail minutieux et de bonne qualité.
  </p>
  <p>
    Je suis spécialisée dans le dévelopement UI,<br /> la construction d'APIs basées sur les Frameworks JS (NodeJS, NestJS), <br /> l'implémentation de tests (front et back) et la configuration de pipelines/CI pour s'assurer du bon fonctionnement des tests, build... et s'assurer que les meilleures pratiques sont respectées.
  </p>
`;

export const BANNER_EN = `
  <p class="py-4">
    I am a motivated web and mobile application developer, striving for a constructive journey. My objectives are to constantly nurture new skills and gather experiences, meanwhile producing meticulous and great-quality of work.
  </p>
  <p>
    My specialties are building UI interfaces,<br /> building APIs to later use them in frontend interfaces, <br /> and implementing tests and pipelines to ensure good practices are respected.
  </p>
`;

export const TIMELINE_FR: Work[]
  = [
    {
      job: 'Développeuse Application Mobile et Web',
      date: 'Juin 2022 - Actuellement',
      place: 'Exponent.ch - Switzerland - Remote',
      skills: ['NextJs', 'Typescript', 'Python', 'GraphQL', 'ERPNext', 'Frappe', 'Docker', 'Playwright'],
      logo: 'exponent.svg'
    },
    {
      job: 'Consultante, Web Développeuse',
      date: 'Décembre 2020 - Actuellement',
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
    skills: ['NextJs', 'Typescript', 'Python', 'GraphQL', 'ERPNext', 'Frappe', 'Docker', 'Playwright', 'React Native'],
    logo: 'exponent.svg'
  },
  {
    job: 'Consultant, Web Developer',
    date: 'December 2020 - Current',
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
  { name: "NodeJS", percent: 90, img: "nodejs.png" },
  { name: "NestJS", percent: 85, img: "nestjs.jpg" },
  { name: "ERPNext & Frappe", percent: 65, img: "erpnext.png" },
  { name: "Python", percent: 55, img: "python.png" },
  { name: "Vue 2 & 3", percent: 80, img: "vuejs.jpg" },
  { name: "Flutter", percent: 60, img: "flutter.jpg" },
  { name: "React Native", percent: 70, img: "reactnative.png" },
  { name: "GraphQL", percent: 90, img: "graphql.png" },
];

export const FAMILIARITIES: string[] = [
  "Typescript", "Github", "GitLab", "Notion", "Figma", "JIRA", "Composing Docker containers", "Playwright tests", "Gleap integration", "Stripe integration", "Heroku", "Github Actions", "Testing Pipelines"
]