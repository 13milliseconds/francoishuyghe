import { motion } from "framer-motion";
import { forwardRef } from "react";

export default function Layout({ children }) {
    
  return <motion.div
    initial={{ x: 500, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
    transition={{
        type: "tween",
        duration: .5
    }}
  >
    {children}
  </motion.div>
}