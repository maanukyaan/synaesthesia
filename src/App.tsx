import GradientAnimationButton from "./components/ui/GradientAnimationButton";

export default function App() {
  return (
    <div className="bg-dark text-light font-text relative h-full w-full">
      <header className="bg-dark/10 fixed top-0 left-0 flex w-full items-center justify-between rounded-b-lg border-b border-white/15 px-10 py-5">
        <div className="logo flex items-center">
          <img src="/logo.svg" alt="Logo" className="size-10" />
          <p className="font-orbitron ml-3 text-lg uppercase select-none">
            Syntaesthesia
          </p>
        </div>
      </header>
      <main className="flex h-full flex-col items-center justify-center gap-y-3">
        <h1 className="font-title text-4xl">
          Wanna' see how you feel inside when <b>your favorite</b> music plays?
        </h1>
        <h2 className="text-xl">Let us show you what it look like.</h2>

        <GradientAnimationButton className="font-orbitron mt-10">
          Try now
        </GradientAnimationButton>
      </main>
    </div>
  );
}
