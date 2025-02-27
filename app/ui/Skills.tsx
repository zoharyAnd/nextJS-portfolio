import Image from "next/image";
import { LANG, Skills as TSkills } from "@/app/lib/types";
import { FAMILIAR_TOOLS, FAMILIARITIES, SKILLS_SET } from "../lib/constants";

interface Props {
  lng: LANG
}
const Skills = ({ lng }: Props) => {
  return (
    <section id="skills" className="gap-y-10 flex flex-col max-w-5xl mx-auto">
      <div className="bg-white bg-opacity-50 relative py-10 px-10  rounded-3xl">
        <h2 className="text-center text-xl md:text-3xl font-medium mb-12">
          {lng === 'fr' ? 'Expertise' : 'Skills'}
        </h2>
        <div className="grid gap-8 grid-cols-2 md:grid-cols-4 mx-auto">
          {SKILLS_SET.map((skill: TSkills) => (
            <div key={skill.name} className="text-center">
              <div className="bg-white relative w-28 h-28 rounded-full overflow-hidden mx-auto mb-2 shadow-lg">
                <Image
                  src={`/skills/${skill.img}`}
                  alt={skill.name}
                  fill
                  style={{ objectFit: 'cover' }} />
              </div>
              <p className="text-base">{skill.percent} %</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white bg-opacity-50 relative py-10 px-10 w-full mx-auto rounded-3xl">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-xl md:text-3xl font-medium mb-12">
            {lng === 'fr' ? 'Autres compétences' : 'Other skills set'}
          </h3>
          <div className="flex flex-wrap my-4">
            {FAMILIARITIES.map((tag: string) => (
              <span key={tag} className="bg-gray-100 mr-3 mb-4 px-3 py-2 rounded-full text-gray-500 text-base" >{tag}</span>
            ))}
          </div>

          <h3 className="text-left text-xl font-medium mb-6">
            {lng === 'fr' ? 'Outils' : 'Tools'}
          </h3>
          <div className="flex flex-wrap my-4">
            {FAMILIAR_TOOLS.map((tag: string) => (
              <span key={tag} className="bg-gray-100 mr-3 mb-4 px-3 py-2 rounded-full text-gray-500 text-base" >{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;