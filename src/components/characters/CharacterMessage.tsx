import { motion } from "framer-motion";
import analisaImg from "@/assets/analisa.png";
import aureliaImg from "@/assets/aurelia.png";
import analytiaImg from "@/assets/analytia.png";

type Character = "analisa" | "aurelia" | "analytia";

const characterData: Record<Character, { name: string; img: string; color: string }> = {
  analisa: { name: "Аналиса", img: analisaImg, color: "border-primary" },
  aurelia: { name: "Аурелия", img: aureliaImg, color: "border-patient" },
  analytia: { name: "Аналития", img: analytiaImg, color: "border-specialist" },
};

interface CharacterMessageProps {
  character: Character;
  message: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const CharacterMessage = ({ character, message, size = "md", className = "" }: CharacterMessageProps) => {
  const data = characterData[character];
  const imgSize = size === "sm" ? "w-10 h-10" : size === "lg" ? "w-20 h-20" : "w-14 h-14";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-start gap-3 p-4 rounded-xl bg-card border ${data.color}/30 ${className}`}
    >
      <img
        src={data.img}
        alt={data.name}
        className={`${imgSize} rounded-full border-2 ${data.color} object-cover flex-shrink-0`}
        loading="lazy"
      />
      <div>
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{data.name}</span>
        <p className={`mt-1 text-foreground ${size === "sm" ? "text-sm" : "text-base"}`}>{message}</p>
      </div>
    </motion.div>
  );
};

export default CharacterMessage;
