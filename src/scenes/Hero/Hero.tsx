import Link from "@/components/generic/Link";

const Hero = () => {
  return (
    <section className="flex relative items-center justify-center mt-20 p-6 square-bg">
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
            <h2 className="text-2xl md:text-3xl mt-2">
              A <span className="gradient-text">Software Developer</span>
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg max-w-3xl">
          A <strong>fullstack developer</strong> with solid foundations in{" "}
          <strong>design</strong>.
          <br />
          Passionate about crafting seamless user experiences at the
          intersection of creativity and functionality.
        </p>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex gap-4">
            <Link
              href="mailto:kevinpintar59160@gmail.com"
              imgAlt="email"
              imgSrc="../"
              title="Email"
            />
            <Link
              href="/projects"
              imgAlt="projects"
              imgSrc="../"
              title="Projects"
            />
          </div>

          <div className="flex gap-6">
            <Link
              href="https://github.com/pinpin59"
              imgAlt="github"
              imgSrc="../"
              title="Github"
            />
            <Link
              href="https://linkedin.com/in/kevin"
              imgAlt="linkedin"
              imgSrc="../"
              title="Linkedin"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
