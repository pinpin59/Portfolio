import { ContactMeButton } from "@/components/generic/ContactMebutton";
import { Icon } from "@/components/generic/Icon";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, View } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex relative items-center justify-center mt-20 p-6 square-bg">
      <div className="mesh-gradient"></div>
      <div className="space-y-8 ">
        {/* Header section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            alt="Profile Avatar"
            src="/src/assets/react.svg"
            className="w-32 h-32 rounded-full"
          />
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Hey, I'm Kevin ✨
            </h1>
            <h2 className="text-4xl md:text-3xl mt-2">
              A <span className="gradient-text">Full Stack Developer</span>
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg max-w-3xl">
          Working in the <strong>JavaScript ecosystem</strong> with modern tools
          like <strong>React</strong>, <strong>Angular</strong>, and{" "}
          <strong>Node.js</strong>.
          <br />
          Passionate about building solutions that solve real problems and
          create genuine value for users and businesses.
        </p>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex gap-4">
            <Button variant={"outline"}>
              <Icon icon={View} />
              View Projects
            </Button>
            <ContactMeButton />
          </div>

          {/* Separator */}
          <div className="bg-border h-[1px] w-16 md:w-[1px] md:h-8"></div>

          <div className="flex gap-6">
            <Icon
              icon={Linkedin}
              size={26}
              href="https://linkedin.com/in/kpintar"
              target="_blank"
              ariaLabel="Profil LinkedIn de Kevin"
              title="Voir mon profil LinkedIn"
              hoverClassName="hover:opacity-70"
            />
            <Icon
              icon={Github}
              size={26}
              href="https://github.com/pinpin59"
              target="_blank"
              ariaLabel="Profil GitHub de Kevin"
              title="Voir mon profil GitHub"
              hoverClassName="hover:opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
