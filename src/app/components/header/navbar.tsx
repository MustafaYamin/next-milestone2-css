import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar">
      <Image
        className="logo"
        src="/logo.png"
        alt="Logo for Mustafa company"
        width={240}
        height={0}
      />






      <ul className="navigation">
        <li className="nav-link" ><Link className="links" href="/">Home</Link></li>
        <li className="nav-link" ><Link className="links" href="/about">About</Link></li>
        <li className="nav-link" ><Link className="links" href="/skills">Skills</Link></li>
        <li className="nav-link" ><Link className="links" href="contact">Contact</Link></li>
      </ul>
    </div>
  );
}
