"use client";
import { Bike, Bus, Car, Truck } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const HeroSection = ({ onAuthRequired }: { onAuthRequired: () => void }) => { 

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/heroImage.jpg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white font-extrabold text-4xl sm:text-5xl md:text-7xl"
        >
          Book any Vehicle
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 max-w-xl mx-auto text-gray-300"
        >
          Experience the freedom of seamless vehicle rentals with Rydex. 
          Book your next adventure today!
        </motion.p>

        {/* Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex justify-center gap-8 text-gray-300"
        >
          <Bike size={30} />
          <Car size={30} />
          <Bus size={30} />
          <Truck size={30} />
        </motion.div>

        {/* Button */}
        <motion.button
          whileHover={{scale:1.05}}
          whileTap={{scale:0.95}}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="cursor-pointer mt-12 px-10 py-4 bg-white text-black rounded-full font-semibold shadow-xl"
        onClick={onAuthRequired} >
          Book Now
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;