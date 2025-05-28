import { Link } from "react-router";
import GradientAnimationButton from "./components/ui/GradientAnimationButton";

export default function Home() {
  return (
    <div className="relative h-full w-full">
      <header className="bg-dark/50 fixed top-0 left-0 z-[9999] flex w-full items-center justify-between rounded-b-lg border-b border-white/15 px-10 py-5">
        <div className="logo flex items-center">
          <img src="/logo.svg" alt="Logo" className="size-10" />
          <p className="font-orbitron ml-3 text-lg uppercase select-none">
            Syntaesthesia
          </p>
        </div>
      </header>
      <main className="relative z-10 flex h-full flex-col items-center justify-center gap-y-4">
        <h1 className="font-title text-4xl uppercase font-semibold">
          Tired of just <i>listening?</i> Maybe it's time to <b className="font-black">see</b> it
        </h1>
        <h2 className="text-lg font-title">
          Want to see what your emotions look like when your favorite music
          plays?
        </h2>

        <h3 className="text-lg">Let us show you what it looks like.</h3>

        <Link to="/app">
          <GradientAnimationButton className="mt-10">
            Try for free
          </GradientAnimationButton>
        </Link>
        <video
          className="absolute z-[-1] h-full w-full object-cover opacity-85"
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
