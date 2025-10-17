import contactme from "@/assets/contactme.svg";
import { Button } from "../ui/button";

export const WorkTogether: React.FC = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div>
        <img className="w-20" src={contactme} alt="" />
      </div>
      <div className="flex justify-center items-center flex-col gap-3 mt-5">
        <h3>Let's Work Together!</h3>
        <p>Have a project in mind? Let's talk about it.</p>
      </div>
      <Button className="mt-5" variant={"outline"} asChild>
        <a href="mailto:kevinpintar59160@gmail.com">Contact me</a>
      </Button>
    </div>
  );
};
