const Hero = () => {
  return (
    <section className="flex items-center justify-center  p-6 square-bg">
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
              Hey, I'm <span className="gradient-text">Kevin</span> ✨
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
            <a href="mailto:kevinpintar59160@gmail.com" className="btn-primary">
              <img src="" alt="email" className="w-5 h-5" />
              Contact
            </a>
            <a href="/projects" className="btn-secondary">
              <img src="" alt="projects" className="w-5 h-5" />
              Projects
            </a>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/pinpin59" aria-label="Github">
              <img src="" alt="github" className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/kevin" aria-label="LinkedIn">
              <img src="" alt="linkedin" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
