import { cn } from "../../lib/utils";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-full border border-white/15 bg-white/5 px-6 py-2 text-sm font-light tracking-wide text-white/80 backdrop-blur-sm transition duration-300 ease-out hover:scale-[1.02] hover:bg-white/10 hover:text-white hover:shadow-md focus:ring-2 focus:ring-white/20 focus:outline-none active:scale-[0.98]",
        className,
      )}
    >
      {children}
    </button>
  );
}
