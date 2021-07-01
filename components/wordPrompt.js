import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const WordPrompt = () => {
  useEffect(() => {
    fetchWords();
  }, []);
  const changeWordHandler = () => {
    if (words.length <= 3) {
      fetchWords();
    }
    setWords((lastWords) => {
      lastWords.shift()
      return [...lastWords];
    });
  };
  const [words, setWords] = useState([]);
  const fetchWords = () => {
    fetch("https://random-word-api.herokuapp.com/word?number=10", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setWords((lastWords) => {
          return [...lastWords, ...data];
        });
      });
  };

  return (
    <div className="flex flex-col m-10">
      <p className="text-center text-5xl">{words[0]}</p>
      <p className="text-center text-3xl">Words left: {words.length}</p>
      <button
        onClick={changeWordHandler}
        className="text-center border-5 border-black-600 border-solid"
      >
        Change Word
      </button>
      <button onClick={fetchWords}>Fetch Words</button>
    </div>
  );
};

export default WordPrompt;
