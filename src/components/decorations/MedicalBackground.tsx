import { motion } from "framer-motion";

const formulas = [
  "H₂O", "NaCl", "C₆H₁₂O₆", "Fe²⁺", "Ca²⁺", "HbA1c",
  "TSH", "T₃", "T₄", "ALT", "AST", "CRP",
  "WBC", "RBC", "PLT", "MCH", "MCV", "ESR",
  "IgG", "IgM", "pH 7.4", "pO₂", "pCO₂",
  "HDL", "LDL", "HCO₃⁻", "K⁺", "Na⁺",
];

const MedicalIcon = ({ type, className, style }: { type: string; className?: string; style?: React.CSSProperties }) => {
  switch (type) {
    case "helix":
      return (
        <svg viewBox="0 0 40 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 5 Q30 20 10 35 Q-10 50 10 65 Q30 80 10 95" />
          <path d="M30 5 Q10 20 30 35 Q50 50 30 65 Q10 80 30 95" />
          {[15, 35, 55, 75].map(y => (
            <line key={y} x1="12" y1={y} x2="28" y2={y} strokeWidth="1" />
          ))}
        </svg>
      );
    case "molecule":
      return (
        <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="30" cy="15" r="6" />
          <circle cx="15" cy="45" r="6" />
          <circle cx="45" cy="45" r="6" />
          <line x1="27" y1="21" x2="18" y2="39" />
          <line x1="33" y1="21" x2="42" y2="39" />
          <line x1="21" y1="45" x2="39" y2="45" />
        </svg>
      );
    case "flask":
      return (
        <svg viewBox="0 0 40 60" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 5 L15 25 L5 50 Q3 55 8 57 L32 57 Q37 55 35 50 L25 25 L25 5" />
          <line x1="12" y1="5" x2="28" y2="5" />
          <path d="M10 42 Q20 38 30 42" strokeDasharray="2 2" />
        </svg>
      );
    case "microscope":
      return (
        <svg viewBox="0 0 50 60" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="20" cy="18" r="8" />
          <line x1="20" y1="26" x2="20" y2="45" />
          <path d="M10 45 L30 45" />
          <path d="M5 55 L35 55" />
          <line x1="20" y1="45" x2="20" y2="55" />
          <line x1="28" y1="18" x2="38" y2="8" />
        </svg>
      );
    case "testTube":
      return (
        <svg viewBox="0 0 30 70" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 5 L8 52 Q8 62 15 62 Q22 62 22 52 L22 5" />
          <line x1="5" y1="5" x2="25" y2="5" />
          <path d="M8 40 Q15 36 22 40" />
          <circle cx="13" cy="48" r="2" />
          <circle cx="18" cy="52" r="1.5" />
        </svg>
      );
    default:
      return null;
  }
};

const iconTypes = ["helix", "molecule", "flask", "microscope", "testTube"];

interface MedicalBackgroundProps {
  density?: "light" | "medium";
  className?: string;
}

const MedicalBackground = ({ density = "light", className = "" }: MedicalBackgroundProps) => {
  const count = density === "light" ? 12 : 20;
  const items = Array.from({ length: count }, (_, i) => ({
    id: i,
    formula: formulas[i % formulas.length],
    icon: iconTypes[i % iconTypes.length],
    x: `${5 + (i * 37) % 90}%`,
    y: `${5 + (i * 23) % 85}%`,
    delay: i * 0.3,
    duration: 15 + (i % 5) * 3,
    rotation: (i * 45) % 360,
    scale: 0.6 + (i % 4) * 0.15,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.07, 0.04, 0.07, 0],
            y: [0, -20, 0, 20, 0],
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
              className="text-primary font-body select-none block"
              style={{
                fontSize: `${10 + (item.id % 4) * 3}px`,
                transform: `rotate(${item.rotation}deg) scale(${item.scale})`,
              }}
            >
              {item.formula}
            </span>
          ) : (
            <MedicalIcon
              type={item.icon}
              className="text-primary"
              style={{
                width: `${20 + (item.id % 4) * 8}px`,
                height: `${20 + (item.id % 4) * 8}px`,
                transform: `rotate(${item.rotation}deg) scale(${item.scale})`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default MedicalBackground;
