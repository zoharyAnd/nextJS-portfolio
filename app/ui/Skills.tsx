import Image from "next/image";
import { LANG, Skills as TSkills } from "@/app/lib/types";
import { FAMILIAR_TOOLS, FAMILIARITIES, SKILLS_SET } from "../lib/constants";

interface Props {
  lng: LANG
}
const Skills = ({ lng }: Props) => {
  return (
    <section id="skills" className="flex flex-col gap-10 max-w-6xl mx-auto px-6">
      <div className="glass relative py-10 px-6 md:px-10">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
          {lng === 'fr' ? 'Compétences' : 'Skills'}
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS_SET.map((skill: TSkills) => (
            <div key={skill.name} className="flex items-center gap-4 p-3 rounded-2xl bg-white/70 border border-white/60 backdrop-blur">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden ring-1 ring-white/70 shadow-sm flex-shrink-0">
                <Image
                  src={`/skills/${skill.img}`}
                  alt={skill.name}
                  fill
                  style={{ objectFit: 'cover' }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-slate-700">{skill.name}</p>
                  <span className="text-xs text-slate-500">{skill.percent}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-400 to-indigo-500" style={{ width: `${skill.percent}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glass relative py-10 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-xl md:text-2xl font-semibold mb-8">
            {lng === 'fr' ? 'Autres compétences' : 'Other Skills'}
          </h3>
          <div className="flex flex-wrap gap-3 mb-8 justify-start">
            {FAMILIARITIES.map((tag: string) => (
              <span key={tag} className="inline-flex items-center bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full text-sm border border-slate-200" >{tag}</span>
            ))}
          </div>

          <h3 className="text-left text-lg font-semibold mb-4">
            {lng === 'fr' ? 'Outils' : 'Tools'}
          </h3>
          <div className="flex flex-wrap gap-3">
            {FAMILIAR_TOOLS.map((tag: string) => (
              <span key={tag} className="inline-flex items-center bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full text-sm border border-slate-200" >{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
