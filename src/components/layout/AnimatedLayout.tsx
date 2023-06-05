"use client";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function AnimatedLayout({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
