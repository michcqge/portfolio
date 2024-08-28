// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-ocean antialiased font-mono text-michael-white text-sm font-bold py-2 px-4 sm:px-14 md:px-20 sticky top-0 flex justify-between items-center">
      <div>
        <Link href={"/"} className="text-xl min-h-40 py-8">
          <button className="py-2">🥯</button>
        </Link>
      </div>
      <div>
        <ul className="container flex justify-between items-center space-x-10">
          <div className="lg:flex justify-between items-center hidden space-x-10">
            <li>
              <Link
                href="#about"
                className="hover:text-michael-green duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className="hover:text-michael-green duration-300"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="hover:text-michael-green duration-300"
              >
                Projects
              </Link>
            </li>
          </div>

          <li>
            <Link href="/Software-Resume.pdf" locale={false}>
              <button className="border-2 border-michael-green hover:bg-michael-green duration-300 text-michael-white font-bold py-2 px-4 rounded">
                Resume
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
