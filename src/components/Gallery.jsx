import React from "react";
import { motion } from "framer-motion";
import img1 from "../utils/img1.jpg";
import img3 from "../utils/img3.jpg";
import img4 from "../utils/img4.jpg";
import img5 from "../utils/img5.jpg";
import business from "../utils/business.jpg";
import hackathon from "../utils/internal Hackathon.jpg";

const Gallery = () => {
  const images = [img4,img1, hackathon, img3, img5, business];

  return (
    <section
      className="w-full bg-[#080808] text-white px-6 py-16"
      id="gallery"
    >
      <div className="border-b-1 border-white mx-auto mb-20 w-[80%]"></div>
      <div className="w-[80%] mx-auto">
        <h2 className="text-center text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-20 decoration-green-400">
          Highlights  
        </h2>

        {/* Horizontal Scroll Container */}
        <motion.div
          className="flex space-x-6 overflow-x-scroll no-scrollbar px-2"
          whileTap={{ cursor: "grabbing" }}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative min-w-[300px]  sm:min-w-[350px] md:min-w-[400px] h-[250px] rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15}}
            >
            <img
  src={src}
  alt={`Image ${index + 1}`}
  className="w-full h-full object-cover object-center group-hover:opacity-80 transition duration-300"
/>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
