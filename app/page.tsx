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
            <div className="text-xl antialiased font-mono text-michael pl-20 pt-20 ease-in duration-700 transition-opacity opacity-30 hover:opacity-100">
              <p>👋 Hi, my name is </p>
              <p className="text-michael-white text text-5xl mt-4 text-responsive-heading">
                Michael Ge.
              </p>
              <p className="text-michael-green text text-5xl mt-2 text-responsive-heading">
                I\'m a software developer
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
          <section id="about" className="bg-ocean px-60 py-10 m-auto">
            <h1 className="text-michael-white text text-4xl mt-2 text-responsive-heading">
              📝About me
            </h1>
            <section
              id="aboutme"
              className="grid xl:grid-cols-3 grid-cols gap-10"
            >
              <div className="col-span-2 pt-8 min-w-60 text-sm space-y-4 pl-4 text-gray-300">
                <p>
                  Hi! My name is Michael. I work as a full-stack developer at
                  UKG. I like to experiment with AI tools and develop web
                  technologies. I mainly code in Java, Typescript and
                  PostgreSQL, but I am always learning about emerging tech.
                </p>
                <p>
                  Some tools I use to deliver headlines include Docker,
                  Kubernetes, Jenkins CI/CD, Copilot, Git and Github.
                </p>
                <p>
                  I strive to foster a friendly and inclusive environment where
                  everyone feels comfortable contributing. Because of this,
                  people describe me as overly patient and understanding.{" "}
                </p>
              </div>
              <Image
                src="MichaelAvatar.svg"
                alt="That\'s me!"
                width={300}
                height={300}
                className="min-w-40 max-w-40 relative top-[-70px]"
              />
            </section>
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
