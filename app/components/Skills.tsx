import Image from "next/image";

interface Skills {
  name: string;
  percent: number;
  img: string;
}

const Skills = () => {
  const skillsSet: Skills[] = [
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

  const familiarities = [
    "Typescript", "Github", "GitLab", "Notion", "Figma", "JIRA", "Composing Docker containers", "Playwright tests", "Gleap integration", "Stripe integration", "Heroku", "Github Actions", "Testing Pipelines"
  ];


  return (
    <section id="skills" className="relative p-20 md:px-20 md:py-24">
      <h2 className="text-center text-xl md:text-2xl font-medium mb-20">Skills</h2>
      <div className="grid gap-8 grid-cols-2 md:grid-cols-3 max-w-2xl mx-auto">
        {skillsSet.map((skill: Skills) => (
          <div key={skill.name} className="text-center">
            <div className="bg-white relative w-28 h-28 rounded-full overflow-hidden mx-auto mb-2 shadow-lg">
              <Image src={`/skills/${skill.img}`} alt={skill.name} fill style={{ objectFit: 'cover' }} />
            </div>
            <p className="text-base">{skill.percent} %</p>
          </div>
        ))}
      </div>
      <h3 className="text-center text-lg md:text-xl font-medium my-10">Other skills set</h3>
      <div className="flex flex-wrap my-4">
        {familiarities.map((tag: string) => (
          <span key={tag} className="bg-gray-100 mr-3 mb-4 px-3 py-2 rounded-full text-gray-500 text-base" >{tag}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;