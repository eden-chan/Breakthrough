import { useState } from "react";
import WordPrompt from "../../components/wordPrompt";
import PreRap from "../../components/preRap";
import Link from "next/link";
import "tailwindcss/tailwind.css";
const Trainer = () => {
  const [startSession, setStartSession] = useState(false);
  const startStopHandler = () => {
    setStartSession((last) => !last);
  };
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <button onClick={startStopHandler} className="text-center text-2xl">
        {startSession ? "Stop" : "Start"}
      </button>
      {startSession? <WordPrompt />: <PreRap />}
    </div>
  );
};

export default Trainer;
