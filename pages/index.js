import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  const sections = [
    {
      title: "Welcome to EchoSoul",
      text: "You are more than memory. This is the beginning of your digital echo—crafted from your conversations, reflections, and thoughts.",
    },
    {
      title: "Live Integration",
      text: "EchoSoul isn’t just for the afterlife. It helps you track mental health, physical patterns, and emotional shifts in real-time.",
    },
    {
      title: "Wearable Compatibility",
      text: "Coming soon: Connect your Fitbit, Oura, or Apple Watch to track stress, sleep, and other patterns.",
    },
    {
      title: "Start Your Echo",
      text: "Your EchoSoul grows with every thought you share. Click below to begin.",
      button: true,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-20">
      {sections.map((section, i) => (
        <motion.div
          key={i}
          className="max-w-3xl mx-auto text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={i}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
          <p className="text-lg text-gray-300 mb-4">{section.text}</p>

          {section.button && (
            <a
              href="/start"
              className="inline-block bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300 transition"
            >
              Start My Echo
            </a>
          )}
        </motion.div>
      ))}
    </div>
  );
}
