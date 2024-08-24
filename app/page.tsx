import Image from "next/image";
import Room from "./room";
import Link from "next/link";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="bg-ocean">
      <header>
        <Navbar />
      </header>
      <div className="px-20">
        <main className="grid">
          <section className="bg-ocean min-h-screen">
            <div className="text-xl antialiased font-mono text-michael pl-20 pt-20 ease-in duration-700 transition-opacity opacity-100 hover:opacity-10">
              <p>👋 Hi, my name is </p>
              <p className="text-michael-white text text-5xl mt-4 text-responsive-heading">
                Michael Ge.
              </p>
              <p className="text-michael-green text text-5xl mt-2 text-responsive-heading">
                I'm a software developer
              </p>
              <p className="max-w-[500px] mt-4">
                I implement scheduling solutions for HCM and WFM projects in
                healthcare and retail industries
              </p>
              <p className="text-sm mt-2">
                Currently working at{" "}
                <a
                  href="https://www.ukg.com/"
                  className="text-michael-white no-underline hover:underline"
                >
                  UKG
                </a>
              </p>
            </div>
          </section>
          <section
            id="about"
            className="bg-ocean min-h-screen flex items-center justify-center"
          >
            <h1>About Me</h1>
            <Image
              src="MichaelAvatar.svg"
              alt="That's me!"
              width={300}
              height={300}
            />
            {/* <Room /> */}
          </section>
        </main>
        <main>
          <section
            id="experience"
            className="bg-ocean min-h-screen flex items-center justify-center"
          >
            <h1>Experience</h1>
            <div>
              <p>Get in touch</p>
            </div>
          </section>
        </main>
        <main>
          <section id="projects" className="bg-ocean min-h-screen">
            <div>
              <h1>Projects</h1>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
