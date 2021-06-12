import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const WordPrompt = () => {
    const changeWordHandler = () => {
        setWords((lastWords) => {
            if (lastWords.nextWords.length != 0) {
                return {
                    ...lastWords,
                    currentWord: lastWords.nextWords.shift()
                }
            } else {
                return {
                    ...lastWords,
                    currentWord: "Out of words!"
                }
            }
        })
      };
      const [words, setWords] = useState({
          currentWord: "Drop",
          nextWords: ["Bucket", "Foxtrot", "Elephant"]
      })
      const fetchWords = () => {
          fetch("https://random-word-api.herokuapp.com/word?number=10", {
              method: 'GET'
          })
          .then(response => response.json())
          .then(data => {
              setWords((lastWords) => {
                lastWords.nextWords.push(...data);
                  return {...lastWords};
              }
            )})
            .catch((error) => {
                console.log(error);
            });
      }

      return (
        <div className="flex flex-col m-10">
        <p className="text-center text-5xl">{words.currentWord}</p>
        <p className="text-center text-3xl">Words left: {words.nextWords.length} </p>
        <button onClick={changeWordHandler} className="text-center border-5 border-black-600 border-solid">
          Change Word
        </button>
        <button onClick={fetchWords}>
            Fetch Words
        </button>
      </div>
      )
}


export default WordPrompt;