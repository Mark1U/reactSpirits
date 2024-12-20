import { Link } from "react-router";
import Logo from "../assets/Logo";

const Footer = () => {
  return (
    <Link to={"/"}>
      <footer className="bg-[#FFCA41] w-full h-16 fixed bottom-0 flex items-center justify-center p<-4 ">
        <Logo />
      </footer>
    </Link>
  );
};

export default Footer;
