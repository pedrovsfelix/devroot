import { HeroSection } from "./components/HeroSection";
import { heroItems } from "./components/HeroSection/heroItems";
import { Skills } from "./components/Skills";
import { skillsItems } from "./components/Skills/skillsItems";

export function Home() {
  const hero = heroItems[0]
  return (
    <section>
      <HeroSection
        name={hero.name}
        description={hero.description}
        techs={hero.techs}
      />
      <Skills
        skills={skillsItems}
      />
    </section>
  )
}
