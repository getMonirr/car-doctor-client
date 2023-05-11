import { Link } from "react-router-dom";
import Logo from "../../../assets/logo-dark.svg";
const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-10 md:p-32 md:justify-items-end gap-10 bg-cd-d1 text-cd-d6">
      <div className="space-y-5">
        <img src={Logo} alt="Logo" />
        <p>
          Edwin Diaz is a software and web technologies engineer, a life coach
          trainer who is also a serial .
        </p>
      </div>
      <div className="flex flex-col font-normal text-base text-cd-d7">
        <span className="mb-4 text-2xl font-semibold md:mb-10 text-cd-white">Services</span>
        <Link className="link link-hover">Branding</Link>
        <Link className="link link-hover">Design</Link>
        <Link className="link link-hover">Marketing</Link>
        <Link className="link link-hover">Advertisement</Link>
      </div>
      <div className="flex flex-col font-normal text-base text-cd-d7">
        <span className="mb-4 text-2xl font-semibold md:mb-10 text-cd-white0">Company</span>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Jobs</Link>
        <Link className="link link-hover">Press kit</Link>
      </div>
      <div className="flex flex-col font-normal text-base text-cd-d7">
        <span className="mb-4 text-2xl font-semibold md:mb-10 text-cd-white-10">Legal</span>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
      </div>
    </div>
  );
};

export default Footer;
