import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4, duration: 0.8 }
    })
  };

  const sections = [
    {
      title: "Welcome to EchoSoul",
      text: "You are more than memory. This is the beginning of your digital echo—crafted from your conversations, reflections, and thoughts."
    },
    {
      title: "Live Integration",
      text: "EchoSoul isn’t just for the afterlife. It helps you track mental health, physical patterns, and emotional shifts in real-time."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans px-4 py-10">
      {sections.map((section, i) => (
        <motion.div
          key={i}
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={i}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.title}</h2>
          <p className="text-lg md:text-xl text-gray-300">{section.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
    
