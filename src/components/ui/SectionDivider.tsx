import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="relative py-4 flex items-center justify-center overflow-hidden">
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute inset-0 flex items-center"
    >
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </motion.div>

    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative z-10 flex items-center gap-3 bg-background px-6"
    >
      <span className="block w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[hsl(var(--specialist))] to-[hsl(var(--teal-glow))]" />
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-[hsl(var(--teal-glow))] opacity-40">
        <path
          d="M0 6C4 6 4 1 8 1C12 1 12 11 16 11C20 11 20 6 24 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="block w-2 h-2 rounded-full bg-gradient-to-br from-[hsl(var(--teal-glow))] to-[hsl(var(--gold))]" />
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-[hsl(var(--teal-glow))] opacity-40 rotate-180">
        <path
          d="M0 6C4 6 4 1 8 1C12 1 12 11 16 11C20 11 20 6 24 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="block w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[hsl(var(--teal-glow))] to-[hsl(var(--patient))]" />
    </motion.div>
  </div>
);

export default SectionDivider;
