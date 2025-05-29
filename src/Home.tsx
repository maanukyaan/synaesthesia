import { Link } from "react-router";
import Button from "./components/ui/Button";

export default function Home() {
  return (
    <div className="relative h-full w-full">
      <header className="fixed top-0 left-0 z-[9999] flex w-full items-center justify-between rounded-b-lg border-b border-white/15 px-10 py-5 backdrop-blur-md">
        <div className="logo flex items-center">
          <img src="/logo.svg" alt="Logo" className="size-10" />
          <p className="font-orbitron ml-3 text-lg uppercase select-none">
            Syntaesthesia
          </p>
        </div>
      </header>
      <main className="relative z-10 flex h-full flex-col p-10 pt-40">
        <h1 className="font-title text-6xl leading-tight font-semibold tracking-wide uppercase">
          Tired of just <i className="font-light line-through">listening</i>
          <i>?</i> <br />
          Maybe it's time to <b className="font-black">see</b> it.
        </h1>
        <h2 className="font-text mt-5 mb-8 pl-1 text-lg font-light tracking-wide">
          Some feelings can't be heard. Only seen.
          <br />
          What if your emotions had shape and color?{" "}
        </h2>

        <Link to="/app" className="w-fit">
          <Button>Experience it</Button>
        </Link>

        <h3 className="absolute bottom-10 left-10 max-w-[45%] font-mono leading-relaxed text-[#ccc]">
          <strong className="font-orbitron">Synaesthesia</strong> is a rare
          phenomenon where one sense involuntarily triggers another — like{" "}
          <em>seeing color when hearing music</em>. It's not imagination — it's
          how some minds are wired. With this project, we bring that experience
          to you.
          <br />
          Upload a song. Let your eyes feel the sound.
        </h3>

        <video
          className="pointer-events-none absolute top-0 left-0 z-[-1] h-full w-full object-cover opacity-70"
          autoPlay
          loop
          muted
        >
          <source src="/home_background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>
    </div>
  );
}
