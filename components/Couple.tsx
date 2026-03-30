"use client";
import { motion } from "framer-motion";

export default function Couple() {
  const partners = [
    {
      name: "Onyy",
      role: "The Main Character",
      image: "/pria.jpg",
      description: "A man who loves Ye Shunguang with all his heart. His loyalty is unwavering, and his charm is matched only by the sincerity of his soul."
    },
    {
      name: "Ye Shunguang",
      role: "The Void Hunter",
      image: "/wanita.jpg",
      description: "Onyy’s beloved and his greatest source of joy. A woman of elegance and strength, she is dedicated to a lifetime of grace, love, and the beautiful journey that lies ahead."
    }
  ];

  // Gunakan : any untuk menghindari error type check di Vercel
  const cardVariants: any = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8
      }
    }
  };

  return (
    <section id="couple" className="py-32 bg-[#f3f4f6] flex flex-col items-center" suppressHydrationWarning>
      <h2 className="text-4xl font-bold text-gray-800 mb-16 tracking-tight">The Couple</h2>
      
      <div className="flex flex-col md:flex-row gap-8 px-4 max-w-5xl w-full justify-center">
        {partners.map((partner, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center text-center flex-1 max-w-sm border border-gray-100 cursor-pointer"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ 
              once: true,
              amount: 0.3 
            }} 
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03,
              y: -5,
              transition: { duration: 0.2 }
            }}
            suppressHydrationWarning
          >
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
              <img 
                src={partner.image} 
                alt={partner.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{partner.name}</h3>
            <p className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-widest">{partner.role}</p>
            <p className="text-gray-600 leading-relaxed text-sm">
              {partner.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}