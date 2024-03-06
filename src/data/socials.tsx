import { FaTelegram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

type Social = {
  href: string;
  icon: React.ReactNode;
};

export const defaultSocials: Social[] = [
  { href: "", icon: <FaTelegram /> },
  { href: "", icon: <FaLinkedin /> },
  { href: "", icon: <FaTwitterSquare /> },
];
