"use client";

import Image from "next/image";
import Room from "./room";
import Link from "next/link";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import useTypewriter from "./hooks/useTypewriter";
import ProjectComponent from "./components/ProjectComponent";
import ExperienceComponent from "./components/ExperienceComponent";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const { text: typewriterText, cursor: showCursor } = useTypewriter(
    "I'm a software developer",
    100,
    showContent // Pass showContent to start typing when content is displayed
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    const sections = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        if (sectionTop < window.innerHeight - 300 && sectionTop) {
          section.classList.add("active");
          section.classList.remove("inactive");
        } else {
          section.classList.remove("active");
          section.classList.add("inactive");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-ocean transition-opacity duration-1000 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* {showSplash && <SplashScreen />} */}
      <header>
        <Navbar />
      </header>
      <div className="m-auto">
        <main className="grid sm:px-4 md:px-10 lg:px-20">
          <section className="bg-ocean min-h-screen px-4 flex justify-start sm:pl-10 lg:pl-40">
            <div className="text-xl antialiased font-mono text-michael pt-20">
              <p>👋 Hi, my name is </p>
              <p className="text-michael-white text text-5xl mt-4 text-responsive-heading">
                Michael Ge.
              </p>
              <p className="text-michael-green text text-5xl mt-2 text-responsive-heading">
                {typewriterText}
                <span
                  className={`${
                    showCursor ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-100`}
                >
                  |
                </span>
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
            className="bg-ocean lg:px-40 md:px-20 px-6 m-auto antialiased font-mono"
          >
            <h1 className="text-michael-white text text-2xl mt-2 antialiased font-mono">
              📝About me
            </h1>
            <section
              id="aboutme"
              className="xl:grid xl:grid-cols-3 grid-cols xl:gap-10"
            >
              <div className="col-span-2 pt-8 min-w-60 text-sm space-y-4 text-gray-300">
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
                alt="That's me!"
                width={300}
                height={300}
                className="min-w-40 max-w-40 mx-auto xl:relative xl:top-[-70px] hover:scale-125 duration-300"
              />
            </section>
            {/* <Room /> */}
          </section>
          <section
            id="experience"
            className="bg-ocean min-h-screen py-20 px-4 sm:px-6 lg:px-8 antialiased font-mono"
          >
            <h2 className="text-3xl font-bold text-michael-white mb-10 text-center">
              My Experience
            </h2>
            <div className="grid grid-cols-1 gap-8">
              <ExperienceComponent
                company="UKG"
                companyUrl="https://www.ukg.com/"
                role="Full Stack Software Developer"
                tenure="June 2022 - Present"
                accomplishments={[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien.",
                ]}
                skills={[
                  "Java",
                  "JavaScript",
                  "PostgreSQL",
                  "Git",
                  "Docker",
                  "Kubernetes",
                  "Splunk",
                ]}
              />
            </div>
          </section>
          <section
            id="projects"
            className="bg-ocean min-h-screen py-20 px-4 sm:px-6 lg:px-8 antialiased font-mono"
          >
            <h2 className="text-3xl font-bold text-michael-white mb-10 text-center">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectComponent
                title="Chinese Language Flashcards"
                description="A simple flashcard app to help practice Chinese characters for the HSK exams."
                imageUrl="https://images.unsplash.com/photo-1631067557824-4a56467086a0?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                skills={["React", "Next.js", "Tailwind"]}
                githubLink="https://github.com/michcqge/HSK-Flashcards"
                liveLink="https://michcqge.github.io/HSK-Flashcards/"
              />
              <ProjectComponent
                title="Canada Olympics Database"
                description="Relational database for Canadian Athletes who participated in the Olympics."
                imageUrl="https://images.unsplash.com/photo-1686859155594-b7283e5206d6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                skills={["HTML", "PHP", "SQL"]}
                githubLink="https://github.com/michcqge/Team-Canada-Database"
              />
              <ProjectComponent
                title="NFT Art Gallery (24 hr Hackathon)"
                description="Gallery to showcase NFT art collection, using Covalent Blockchain API."
                imageUrl="https://images.unsplash.com/photo-1645731504331-72636399448e?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                skills={["React", "Covalent API"]}
                githubLink="https://github.com/nkoda/Museums"
              />
            </div>
          </section>
        </main>
        <main></main>
        <main></main>
      </div>
    </div>
  );
}
