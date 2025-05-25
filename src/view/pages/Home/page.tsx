import { HeroSection } from "./components/HeroSection";
import { heroItems } from "./components/HeroSection/heroItems";

export function Home() {
  const hero = heroItems[0]
  return (
    <section>
      <HeroSection
        name={hero.name}
        description={hero.description}
        techs={hero.techs}
      />
    </section>
  )
}
