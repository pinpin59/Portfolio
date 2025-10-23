import ContactForm from "./ContactForm";

const MeshGradient = () => {
  return (
    <div className="relative bg-gradient w-11/12 md:w-4/5 max-w-7xl mx-auto   p-8 lg:p-12  justify-between rounded-xl border border-white/20 shadow-lg shadow-white/10">
      <div className="wave-grid  flex flex-col 2xl:flex-row lg:items-center gap-12">
        <div className="2xl:mb-10 md:text-center 2xl:text-left">
          <h1 className="font-bold text-3xl 2xl:text-5xl text-[var(--secondary)]">
            Empowering your vision to shine. Together, let's create something
            extraordinary.
          </h1>
          <p className="text-lg 2xl:text-xl text-[var(--secondary)] mt-5">
            Interested in discussing a project or simply having a chat? I'd love
            to connect with you!
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
export default MeshGradient;
