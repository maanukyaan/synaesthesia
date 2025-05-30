import type { LucideIcon } from "lucide-react";
import { EyeOff, Headphones, Moon, VolumeOff } from "lucide-react";

export interface OnboardingTip {
  icon: LucideIcon;
  text: string;
}

export const tips: OnboardingTip[] = [
   {
    icon: Headphones,
    text: "Use headphones — feel every detail.",
  },
  {
    icon: Moon,
    text: "Night works best. Dim the lights.",
  },
  {
    icon: VolumeOff,
    text: "Silence your notifications.",
  },
  {
    icon: EyeOff,
    text: "Eliminate distractions.",
  },
];

export const intro = {
  title: "Ready to feel something real?",
  subtitle: "Quick tips before starting your journey:",
  callToAction: "Now… let’s see how it feels.",
  uploadLabel: "Upload your track",
};
