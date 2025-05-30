import { cn } from "@/app/utils/cn";
import { Button } from "@/view/components/button";
import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface HeroSectionProps {
  name: string;
  description: string;
  techs: string[];
}

export function HeroSection({name, description, techs}: HeroSectionProps) {
  return (
    <section className="w-full h-[755px] flex flex-col items-center justify-end">
      <div className="container flex flex-col items-center justify-between sm:flex-row">
        <div className="w-1/2 flex flex-col gap-6">
          <p>Olá, meu nome é</p>
          <h2 className="text-4xl">
            {name}
          </h2>
          <p>
            {description}
          </p>
          <p className="flex items-center gap-2 flex-wrap">
            {techs.map((tech) => (
              <span
                key={tech}
                className={cn(
                  'bg-blue-500 p-2 rounded-xs hover:bg-blue-300 transition-colors'
                )}
              >
                {tech}
              </span>
            ))}
          </p>
          <div>
            <Button className="relative group">
              <p className="mr-8">Contato</p>
              <ArrowTopRightIcon className="ml-4 w-6 h-6 transition-opacity duration-1000 group-hover:opacity-0 absolute right-4" />
              <ArrowRightIcon className="w-6 h-6 transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute right-4" />
            </Button>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image width={420}
          height={404}
          src="/images/User.png"
          alt={`Foto do perfil do ${name}`}
          />
        </div>
      </div>
    </section>
  )
}
