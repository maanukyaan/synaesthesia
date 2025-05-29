export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-[9999] flex w-full items-center justify-between rounded-b-lg border-b border-white/15 px-5 lg:px-10 py-3 lg:py-5 backdrop-blur-md">
      <div className="logo flex items-center">
        <img src="/logo.svg" alt="Logo" className="size-8 lg:size-10" />
        <p className="font-orbitron ml-2 lg:ml-3 lg:text-lg uppercase select-none">
          Syntaesthesia
        </p>
      </div>
    </header>
  );
}
