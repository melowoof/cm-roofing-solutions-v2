"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function GenericButton({
  children,
  onclick,
}: {
  children: React.ReactNode;
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <button
      className="rounded-sm text-white font-bold duration-500 hover:text-black transition-colors relative bg-black"
      onClick={onclick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="bg-white h-full w-full absolute top-0 left-0 rounded-sm origin-left"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.15}}
          ></motion.div>
        )}
      </AnimatePresence>
      <div className="h-full w-full p-3 relative">{children}</div>
    </button>
  );
}

export function GenericButtonInverted({
  children,
  onclick,
}: {
  children: React.ReactNode;
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <button
      className="rounded-sm text-black font-bold duration-500 hover:text-white transition-colors relative bg-white"
      onClick={onclick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="bg-black h-full w-full absolute top-0 left-0 rounded-sm origin-left"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.15 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <div className="h-full w-full p-3 relative">{children}</div>
    </button>
  );
}
