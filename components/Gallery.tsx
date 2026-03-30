"use client";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = Array.from({ length: 6 }).map((_, i) => ({
    src: `/gallery/foto${i + 1}.jpg`,
    alt: `Gallery ${i + 1}`
  }));

  // Gunakan : any untuk menghindari error type check di Vercel
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      },
    },
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="gallery" className="py-24 bg-white" suppressHydrationWarning>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16 tracking-tight">
          Our Gallery
        </h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, zIndex: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="aspect-square rounded-3xl overflow-hidden shadow-lg border-4 border-white cursor-pointer transition-shadow hover:shadow-2xl"
              suppressHydrationWarning
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}