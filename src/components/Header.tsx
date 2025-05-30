import { motion } from "motion/react";
import { cn } from "../lib/utils";

export default function Header({
  delay = true,
  className,
}: {
  delay?: boolean;
  className?: string;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{
        duration: 0.8,
        delay: delay ? 1 : 0,
        easing: "ease-out",
      }}
      className={cn(
        "fixed top-0 left-0 z-[9999] flex w-full items-center justify-between rounded-b-lg border-b border-white/15 px-5 py-3 backdrop-blur-md lg:px-10 lg:py-5",
        className,
      )}
      onClick={() => {
        document.location.href = "/";
      }}
    >
      <motion.div
        className="logo flex items-center"
        initial={{ x: -15, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: delay ? 1.4 : 0.4,
          easing: "ease-out",
        }}
      >
        <motion.img
          src={`${import.meta.env.BASE_URL}/logo.svg`}
          alt="Logo"
          className="size-8 lg:size-10"
          initial={{ scale: 0.8, rotate: -4, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: delay ? 1.7 : 0.7,
            easing: "ease-out",
          }}
        />
        <motion.p
          className="font-orbitron ml-2 uppercase select-none lg:ml-3 lg:text-lg"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: delay ? 1.9 : 0.9,
            easing: "ease-out",
          }}
        >
          Syntaesthesia
        </motion.p>
      </motion.div>
    </motion.header>
  );
}
