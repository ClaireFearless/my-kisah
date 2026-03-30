"use client";
import { motion } from "framer-motion";

export default function Gallery() {
  // Data gambar galeri
  const images = [
    { src: "/gallery/foto1.jpg", alt: "Gallery 1" },
    { src: "/gallery/foto2.jpg", alt: "Gallery 2" },
    { src: "/gallery/foto3.jpg", alt: "Gallery 3" },
    { src: "/gallery/foto4.jpg", alt: "Gallery 4" },
    { src: "/gallery/foto5.jpg", alt: "Gallery 5" },
    { src: "/gallery/foto6.jpg", alt: "Gallery 6" },
  ];

  // Variasi animasi untuk grid container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Efek stagger agar gambar muncul bergantian satu per satu
        staggerChildren: 0.1, 
      },
    },
  };

  // Variasi animasi untuk setiap item gambar
  const itemVariants = {
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
    // ID 'gallery' penting untuk navigasi navbar
    <section id="gallery" className="py-24 bg-white" suppressHydrationWarning>
      <div className="max-w-6xl mx-auto px-4">
        {/* Judul Section - Pakai font standar (Montserrat) */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16 tracking-tight">
          Our Gallery
        </h2>

        {/* Grid Container dengan Animasi */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animasi jalan saat 20% section terlihat
          variants={containerVariants}
        >
          {images.map((image, index) => (
            // Item Gambar dengan Animasi & Efek Hover
            <motion.div
              key={index}
              variants={itemVariants}
              // Efek hover: sedikit membesar dan bayangan menebal
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