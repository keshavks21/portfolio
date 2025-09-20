import React from "react";
import { motion } from "framer-motion";
import cert1 from "../utils/NamasteNodejs.jpg";
import cert2 from "../utils/pragyancertificate.jpg";
// 👆 import your certificate images here

const Certificates = () => {
  const certificates = [cert1, cert2];

  return (
    <section className="w-full bg-[#080808] text-white px-6 py-16" id="certificates">
      <div className="border-b-1 border-white mx-auto mb-20 w-[80%]"></div>
      <div className="w-[80%] mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-center text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-20 decoration-green-400">
          Certificates
        </h2>

        {/* Horizontal Scroll Container */}
        <motion.div
          className="flex space-x-6 overflow-x-scroll no-scrollbar px-2"
          whileTap={{ cursor: "grabbing" }}
        >
          {certificates.map((src, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="flex items-center justify-center bg-black">
                <img
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  className="h-[350px] w-auto object-contain group-hover:opacity-90 transition duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
