import Image from "next/image";
import { LANG, Skills } from "@/app/lib/types";
import { FAMILIARITIES, SKILLS_SET } from "../lib/constants";

interface Props {
  lng: LANG
}
const Skills = ({ lng }: Props) => {
  return (
    <section id="skills" className="relative py-20 px-10 md:px-20 md:py-24">
      <h2 className="text-center text-xl md:text-2xl font-medium mb-20">
        {lng === 'fr' ? 'Expertise' : 'Skills'}
      </h2>
      <div className="grid gap-8 grid-cols-2 md:grid-cols-3 max-w-2xl mx-auto">
        {SKILLS_SET.map((skill: Skills) => (
          <div key={skill.name} className="text-center">
            <div className="bg-white relative w-28 h-28 rounded-full overflow-hidden mx-auto mb-2 shadow-lg">
              <Image src={`/skills/${skill.img}`} alt={skill.name} fill style={{ objectFit: 'cover' }} />
            </div>
            <p className="text-base">{skill.percent} %</p>
          </div>
        ))}
      </div>
      <h3 className="text-center text-lg md:text-xl font-medium my-10">
        {lng === 'fr' ? 'Autres compétences' : 'Other skills set'}
      </h3>
      <div className="flex flex-wrap my-4 max-w-4xl mx-auto">
        {FAMILIARITIES.map((tag: string) => (
          <span key={tag} className="bg-gray-100 mr-3 mb-4 px-3 py-2 rounded-full text-gray-500 text-base" >{tag}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;