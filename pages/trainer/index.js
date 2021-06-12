import WordPrompt from "../../components/wordPrompt";
import Link from 'next/link'
const Trainer = () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <WordPrompt />
    </div>
  );
};

export default Trainer;
