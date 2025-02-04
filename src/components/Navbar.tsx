import { Github, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { twMerge } from "tailwind-merge";
import CopyButton from "./CopyButton";

function Navbar() {
  return (
    <nav
      className={twMerge(
        "w-32 mx-auto fixed top-5 left-1/2 -translate-x-16  px-2 py-1",
        "flex justify-center items-center gap-4",
        "border border-gray-200 bg-white/50 hover:bg-white/100 transition-all duration-300 rounded-lg z-50"
      )}
    >
      <div className="flex gap-2">
        <Button variant={"link"} size={"icon"}>
          <a
            href={"https://github.com/GEHAD001"}
            className="flex flex-col justify-center items-center"
            target="_blank"
          >
            <Github />
            <span className="text-[0.8rem] ">Github</span>
          </a>
        </Button>
        <CopyButton copyValue="eng.jihadjadallah@gmail.com">
          <span
            className="flex flex-col justify-center items-center"
            title="eng.jihadjadallah@gmail.com"
          >
            <Mail />
            <span className="text-[0.8rem] ">Email</span>
          </span>
        </CopyButton>
      </div>
    </nav>
  );
}

export default Navbar;
