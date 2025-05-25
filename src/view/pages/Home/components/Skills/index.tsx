interface Skill {
  language: string;
  experience: number;
}

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="container">
        <div>
          <h3>../competências</h3>
          <h2>Conhecimentos</h2>
        </div>

        <div className="p-4 flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill.language}
              className="w-[264px] flex flex-col items-start bg-blue-300 p-6"
            >
              <h4 className="font-bold">{skill.language}</h4>
              <p className="text-sm text-gray-700">
                {skill.experience} {skill.experience === 1 ? "ano" : "anos"} de
                experiência
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
