import { IconType } from "react-icons/lib";
import { PiTelegramLogoLight } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";

export interface ContactType {
  name: string;
  user: string;
  Icon: IconType;
}

export const contacts: ContactType[] = [
  {
    name: "Email",
    user: "eng.jihadjadallah@gmail.com",
    Icon: AiOutlineMail,
  },
  {
    name: "Telegram",
    user: "092-2478039",
    Icon: PiTelegramLogoLight,
  },
  {
    name: "Github",
    user: "https://github.com/GEHAD001",
    Icon: FaGithub,
  },
];
