// pages/index.tsx (or .js depending on setup)

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: 'easeOut'
    }
  })
};

const sections = [
  {
    title: 'Welcome to EchoSoul',
    text: 'This is the beginning of your digital echo—crafted from your conversations, reflections, and thoughts.'
  },
  {
    title: 'Live Integration',
    text: 'EchoSoul isn’t just for the afterlife. Track mental health, physical patterns, and emotional shifts in real-time.'
  },
  {
    title: 'Wearable Compatibility',
    text: 'Connect your Fitbit, Oura, or Apple Watch to track stress, sleep, and more.'
  },
  {
    title: 'Family Knowledge Hub',
    text: 'Ask your EchoSoul questions like “Who was Grandma’s brother?” and get memory-backed answers.'
  },
  {
    title: 'Daily Reflections',
    text: 'Use AI-enhanced journaling to preserve insights and recognize behavior patterns.'
  },
  {
    title: 'Privacy and Control',
    text: 'You decide what is remembered, shared, and when—alive or after.'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={i}
            variants={fadeIn}
            className="mb-20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.title}</h2>
            <p className="text-lg md:text-xl text-gray-300">{section.text}</p>
          </motion.div>
        ))}
        <div className="text-center">
          <Link href="/start">
            <a className="inline-block mt-8 px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
              Start My Echo
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}
