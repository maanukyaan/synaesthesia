import { Link } from "react-router";
import GradientAnimationButton from "./components/ui/GradientAnimationButton";

export default function Home() {
  return (
    <div className="relative h-full w-full">
      <header className="bg-dark/10 fixed top-0 left-0 flex w-full items-center justify-between rounded-b-lg border-b border-white/15 px-10 py-5">
        <div className="logo flex items-center">
          <img src="/logo.svg" alt="Logo" className="size-10" />
          <p className="font-orbitron ml-3 text-lg uppercase select-none">
            Syntaesthesia
          </p>
        </div>
      </header>
      <main className="flex h-full flex-col items-center justify-center gap-y-4">
        <h1 className="font-title text-4xl uppercase">
          Tired of just <i>listening?</i> Maybe it's time to <b>see</b> it
        </h1>
        <h2 className="text-2xl">
          Wanna' see how you feel inside when <b>your favorite</b> music plays?
        </h2>

        <h3 className="text-lg">Let us show you what it look like.</h3>

        <Link to="/app">
          <GradientAnimationButton className="font-orbitron mt-10">
            Try now
          </GradientAnimationButton>
        </Link>
      </main>
    </div>
  );
}
