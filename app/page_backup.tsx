import Image from "next/image";
import Room from "./room";

export default function Home() {
  return (
    <>
      <main className="grid lg:grid-cols-2">
        <section className="bg-ocean min-h-screen flex justify-center items-center">
          <div className="text-2xl antialiased font-mono text-michael p-32">
            <p>
              👋 Hey, I'm <span className="text-michael-white">Michael.</span>
            </p>
            <p>
              I'm a{" "}
              <span className="text-michael-white">
                {" "}
                full stack software developer{" "}
              </span>
              that works on HCM and WFM solutions
            </p>
            <p className="text-sm">
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
        <section className="bg-ocean min-h-screen flex items-center justify-center">
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
        <section className="bg-ocean-lite min-h-screen flex items-center justify-center">
          <div>
            <p>Get in touch</p>
          </div>
        </section>
      </main>
      <main>
        <section className="bg-ocean-lite min-h-screen">
          <div></div>
        </section>
      </main>
    </>
    // <main className="min-h-screen">
    //   <section className="bg-ocean h-screen w-screen text-michael flex items-center  ">
    //     <div className="w-1/2 pl-48 text-2xl antialiased font-mono">
    //       <p>
    //         👋 Hey, I'm <span className="text-michael-white">Michael.</span>
    //       </p>
    //       <p>
    //         I'm a{" "}
    //         <span className="text-michael-white">
    //           {" "}
    //           full stack software developer{" "}
    //         </span>
    //         that works on HCM and WFM solutions
    //       </p>
    //       <p className="text-sm">
    //         Currently working at{" "}
    //         <a
    //           href="https://www.ukg.com/"
    //           className="text-michael-white no-underline hover:underline"
    //         >
    //           UKG
    //         </a>
    //       </p>
    //     </div>
    //     <div>
    //       {/* <div className="w-1/2 firework"></div>
    //       <div className="w-1/2 firework"></div>
    //       <div className="w-1/2 firework"></div> */}
    //     </div>
    //   </section>
    //   <section className="h-screen w-screen bg-ocean-lite flex items-center">
    //     <div className="flex mx-48">
    //       {" "}
    //       <div>
    //         <img
    //           src="profile.jpg"
    //           alt="That's me!"
    //           className="max-w-60 filter hue-rotate-15"
    //         ></img>
    //       </div>
    //       <div>
    //         <p className="text-michael px-10 text-sm">About me</p>
    //       </div>
    //     </div>
    //   </section>
    //   <div className="h-screen w-screen bg-ocean">Projects</div>
    //   <div>
    //     <Room />
    //   </div>
    //   <div className="h-screen w-screen bg-ocean-lite">Contacts</div>
    // </main>
  );
}
