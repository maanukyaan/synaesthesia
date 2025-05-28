export default function App() {
  return (
    <div className="bg-dark text-light w-full h-full font-text relative">
      <header className="py-5 px-10 flex items-center justify-between sticky top-0 left-0 bg-dark/10 border-b border-white/15 rounded-b-lg w-full">
        <div className="logo flex items-center">
          <img src="/logo.svg" alt="Logo" className="size-10" />
          <p className="ml-3 font-unbounded uppercase text-lg">Syntaesthesia</p>
        </div>
      </header>
      <main className="flex flex-col items-center pt-20 gap-y-3">
        <h1 className="font-title text-3xl">
          Wanna' see how you feel inside when <b>your favorite</b> music plays?
        </h1>
        <h2 className="text-xl">Let us show you what it look like.</h2>

        <button>Try now</button>
      </main>
    </div>
  );
}
