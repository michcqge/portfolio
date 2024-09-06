"use client";

import Image from "next/image";
import Room from "./room";
import Link from "next/link";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import useTypewriter from "./hooks/useTypewriter"; // Add this import

export default function Home() {
  const { text: typewriterText, cursor: showCursor } = useTypewriter(
    "I'm a software developer",
    100
  );

  useEffect(() => {
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
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-ocean transition-opacity duration-1000">
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
                className="min-w-40 max-w-40 mx-auto xl:relative xl:top-[-70px]"
              />
            </section>
            {/* <Room /> */}
          </section>
          <section
            id="experience"
            className="bg-ocean min-h-screen flex items-center justify-center antialiased font-mono"
          >
            <div>
              <h1>Experience</h1>
              <p className="text-xl">Work in progress 🚧</p>
            </div>
          </section>
          <section
            id="projects"
            className="bg-ocean min-h-screen flex items-center justify-center antialiased font-mono"
          >
            <div>
              <h1>Projects</h1>
              <p className="text-xl">Work in progress 🚧</p>
            </div>
          </section>
        </main>
        <main></main>
        <main></main>
      </div>
    </div>
  );
}
