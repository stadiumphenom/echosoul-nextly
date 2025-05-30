import { useState } from 'react';

export default function StartMyEcho() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", goal: "", memory: "" });

  const prompts = [
    { question: "What name should your EchoSoul remember you by?", field: "name" },
    { question: "What do you want your Echo to help you with right now?", field: "goal" },
    { question: "What's one memory or thought you'd like to save forever?", field: "memory" }
  ];

  const handleChange = (e) => {
    setForm({ ...form, [prompts[step].field]: e.target.value });
  };

  const next = () => {
    if (step < prompts.length - 1) {
      setStep(step + 1);
    } else {
      console.log("Echo initialized:", form);
      // later: save to database or session
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-xl w-full text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">{prompts[step].question}</h2>
        <input
          type="text"
          value={form[prompts[step].field]}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none"
        />
        <button
          onClick={next}
          className="mt-6 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-300 transition"
        >
          {step === prompts.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
