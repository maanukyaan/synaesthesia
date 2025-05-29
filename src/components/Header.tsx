import { motion } from "motion/react";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 1,
        easing: "ease-out",
      }}
      className="fixed top-0 left-0 z-[9999] flex w-full items-center justify-between rounded-b-lg border-b border-white/15 px-5 py-3 backdrop-blur-md lg:px-10 lg:py-5"
    >
      <motion.div
        className="logo flex items-center"
        initial={{ x: -15, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 1.4,
          easing: "ease-out",
        }}
      >
        <motion.img
          src="/logo.svg"
          alt="Logo"
          className="size-8 lg:size-10"
          initial={{ scale: 0.8, rotate: -4, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 1.7,
            easing: "ease-out",
          }}
        />
        <motion.p
          className="font-orbitron ml-2 uppercase select-none lg:ml-3 lg:text-lg"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.9,
            easing: "ease-out",
          }}
        >
          Syntaesthesia
        </motion.p>
      </motion.div>
    </motion.header>
  );
}
