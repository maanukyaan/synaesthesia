import { motion } from "motion/react";
import { Link } from "react-router";
import Header from "./components/Header";
import Button from "./components/ui/Button";

export default function Home() {
  return (
    <div className="relative h-full w-full">
      <Header />

      <main className="relative z-10 flex h-full flex-col p-10 px-5 pt-40 lg:px-10">
        <motion.h1
          className="font-title text-2xl leading-tight font-semibold tracking-wide uppercase lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, easing: "ease-out", delay: 0.2 }}
        >
          Tired of just <i className="font-light line-through">listening</i>
          <i>?</i> <br />
          Maybe it's time to{" "}
          <b className="relative inline-block font-black">
            <motion.span
              animate={{ opacity: [1, 0.9, 1], scale: [1, 1.05, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                easing: "ease-in",
              }}
              className="text-white"
            >
              see
            </motion.span>
          </b>{" "}
          it.
        </motion.h1>

        <motion.h2
          className="font-text mt-5 mb-8 pl-1 text-sm font-light tracking-wide lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, easing: "ease-out", delay: 0.6 }}
        >
          Some feelings can't be heard. Only seen.
          <br />
          What if your emotions had shape and color?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link to="/experience" className="w-fit">
            <Button className="text-xs lg:text-base">Experience it</Button>
          </Link>
        </motion.div>

        <motion.h3
          className="absolute bottom-5 left-5 max-w-[85%] font-mono text-xs leading-relaxed text-[#ccc] lg:bottom-10 lg:left-10 lg:max-w-[45%] lg:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <strong className="font-orbitron">Synaesthesia</strong> is a rare
          phenomenon where one sense involuntarily triggers another — like{" "}
          <em>seeing color when hearing music</em>. It's not imagination — it's
          how some minds are wired. With this project, we bring that experience
          to you.
          <br />
          Upload a song. Let your eyes feel the sound.
        </motion.h3>

        <video
          className="pointer-events-none absolute top-0 left-0 z-[-1] hidden h-full w-full object-cover opacity-70 sm:block"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/home_background.mp4" type="video/mp4" />
        </video>

        <video
          className="pointer-events-none absolute top-0 left-0 z-[-1] block h-full w-full object-cover opacity-70 sm:hidden"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/home_background_mobile.mp4" type="video/mp4" />
        </video>
      </main>
    </div>
  );
}
