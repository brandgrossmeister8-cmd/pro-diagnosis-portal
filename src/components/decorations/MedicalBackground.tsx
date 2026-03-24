import { motion } from "framer-motion";

const formulas = [
  "H₂O", "NaCl", "C₆H₁₂O₆", "Fe²⁺", "Ca²⁺", "HbA1c",
  "TSH", "T₃", "T₄", "ALT", "AST", "CRP",
  "WBC", "RBC", "PLT", "MCH", "MCV", "ESR",
  "IgG", "IgM", "pH 7.4", "pO₂", "pCO₂",
  "HDL", "LDL", "HCO₃⁻", "K⁺", "Na⁺",
];

const SvgIcons: Record<string, JSX.Element> = {
  helix: (
    <svg viewBox="0 0 40 80" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 5 Q30 20 10 35 Q-10 50 10 65 Q30 80 10 95" />
      <path d="M30 5 Q10 20 30 35 Q50 50 30 65 Q10 80 30 95" />
      <line x1="12" y1="15" x2="28" y2="15" strokeWidth="1" />
      <line x1="12" y1="35" x2="28" y2="35" strokeWidth="1" />
      <line x1="12" y1="55" x2="28" y2="55" strokeWidth="1" />
      <line x1="12" y1="75" x2="28" y2="75" strokeWidth="1" />
    </svg>
  ),
  molecule: (
    <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="30" cy="15" r="6" />
      <circle cx="15" cy="45" r="6" />
      <circle cx="45" cy="45" r="6" />
      <line x1="27" y1="21" x2="18" y2="39" />
      <line x1="33" y1="21" x2="42" y2="39" />
      <line x1="21" y1="45" x2="39" y2="45" />
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 40 60" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M15 5 L15 25 L5 50 Q3 55 8 57 L32 57 Q37 55 35 50 L25 25 L25 5" />
      <line x1="12" y1="5" x2="28" y2="5" />
      <path d="M10 42 Q20 38 30 42" strokeDasharray="2 2" />
    </svg>
  ),
  microscope: (
    <svg viewBox="0 0 50 60" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="20" cy="18" r="8" />
      <line x1="20" y1="26" x2="20" y2="45" />
      <path d="M10 45 L30 45" />
      <path d="M5 55 L35 55" />
      <line x1="20" y1="45" x2="20" y2="55" />
      <line x1="28" y1="18" x2="38" y2="8" />
    </svg>
  ),
  testTube: (
    <svg viewBox="0 0 30 70" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 5 L8 52 Q8 62 15 62 Q22 62 22 52 L22 5" />
      <line x1="5" y1="5" x2="25" y2="5" />
      <path d="M8 40 Q15 36 22 40" />
      <circle cx="13" cy="48" r="2" />
      <circle cx="18" cy="52" r="1.5" />
    </svg>
  ),
};

const iconKeys = Object.keys(SvgIcons);

interface MedicalBackgroundProps {
  density?: "light" | "medium";
  className?: string;
}

const MedicalBackground = ({ density = "light", className = "" }: MedicalBackgroundProps) => {
  const count = density === "light" ? 14 : 22;
  const items = Array.from({ length: count }, (_, i) => ({
    id: i,
    formula: formulas[i % formulas.length],
    icon: iconKeys[i % iconKeys.length],
    x: `${5 + (i * 37) % 90}%`,
    y: `${5 + (i * 23) % 85}%`,
    delay: i * 0.4,
    duration: 18 + (i % 5) * 4,
    rotation: (i * 45) % 360,
    size: 18 + (i % 4) * 8,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-primary"
          style={{
            left: item.x,
            top: item.y,
            transform: `rotate(${item.rotation}deg)`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.08, 0.04, 0.08, 0],
            y: [0, -15, 0, 15, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.id % 3 === 0 ? (
            <span
              className="font-body select-none block whitespace-nowrap"
              style={{ fontSize: `${item.size * 0.7}px` }}
            >
              {item.formula}
            </span>
          ) : (
            <div style={{ width: item.size, height: item.size }}>
              {SvgIcons[item.icon]}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default MedicalBackground;
