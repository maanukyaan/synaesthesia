import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import { useState } from "react";
import { intro, tips } from "./config/onboardingTips";

export default function App() {
  const [isFileLoaded, setIsFileLoaded] = useState(false);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsFileLoaded(true);
    }
  };

  return (
    <div
      className={`relative h-full w-full ${isFileLoaded ? "bg-dark" : "bg-[hsl(230,_80%,_40%)]"} transition-colors duration-1000`}
    >
      <motion.div
        className={`absolute inset-0 z-0 ${isFileLoaded ? "opacity-0" : "opacity-80"} blur-[200px] transition-opacity duration-1000`}
        style={{
          backgroundImage: `
      linear-gradient(
        130deg,
        hsl(230, 80%, 40%),
        hsl(260, 100%, 60%),
        hsl(200, 100%, 65%),
        hsl(240, 90%, 50%)
      )
    `,
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <main
        className={`relative z-10 flex h-full flex-col items-center justify-center px-4 text-center ${isFileLoaded ? "opacity-0" : "opacity-100"} transition-opacity duration-1500`}
      >
        <motion.h1
          className="font-title text-3xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {intro.title}
        </motion.h1>

        <motion.h2
          className="text-muted-foreground mt-4 text-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {intro.subtitle}
        </motion.h2>

        {/* tips */}
        <ul className="mt-6 space-y-4">
          {tips.map((tip, i) => (
            <motion.li
              key={i}
              className="flex items-center justify-center space-x-3 text-base"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 1 + i * 0.2 }}
            >
              <tip.icon size={20} className="text-muted-foreground" />
              <span>{tip.text}</span>
            </motion.li>
          ))}
        </ul>

        <motion.p
          className="text-md mt-8 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 + tips.length * 0.2 + 0.3 }}
        >
          {intro.callToAction}
        </motion.p>

        <motion.label
          className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 px-6 py-3 transition hover:bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 + tips.length * 0.2 + 0.6 }}
        >
          <Upload size={18} />
          <span>{intro.uploadLabel}</span>
          <input
            type="file"
            accept=".mp3,.wav,.ogg,.webm,.m4a,.flac"
            className="hidden"
            onChange={handleUpload}
          />
        </motion.label>
      </main>
    </div>
  );
}
