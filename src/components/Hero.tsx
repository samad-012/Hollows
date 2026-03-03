"use client";

import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight-new";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Button } from "./ui/button";

export default function Hero() {
  // Removed unused refs that were causing TS errors
  
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black">
      {/* Premium Animated Background Beams */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeamsWithCollision>
          {/* Note: If the component requires children, 
            put the content inside here, or leave it empty 
            if the component allows it. 
          */}
          <span className="hidden" /> 
        </BackgroundBeamsWithCollision>
      </div>

      {/* Spotlight overlay */}
      <div className="absolute inset-0 z-10 opacity-40 pointer-events-none">
        {/* Removed the nested div child that caused the error */}
        <Spotlight />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-20 max-w-4xl px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
          Truth. Clarity. Confidence.
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-8 drop-shadow">
          At <span className="font-semibold">HOLLOWS</span>, we uncover the truth 
          with professionalism, confidentiality, and precision — replacing 
          uncertainty with verified facts.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-amber-400 to-yellow-600 text-black font-semibold px-8 py-3 hover:scale-105 transition-transform shadow-lg"
        >
          <a href="#services">Explore Our Services</a>
        </Button>
      </motion.div>
    </section>
  );
}