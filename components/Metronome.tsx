import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import useSound from "use-sound";
import click from "./click2.mp3";

export default function Metronome(props) {
  const [settings, setSettings] = useState({
    tempo: 160,
    interval: -1,
  });
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    return () => {
      clearInterval(settings.interval);
    };
  }, [settings.interval]);
  
  const startStop = async () => {
    if (!playing) {
      let serviceidx = setInterval(play, 1000);
      setSettings((prevSettings) => {
        return { ...prevSettings, interval: serviceidx };
      });
    } else {
      clearInterval(settings.interval);
    }
    setPlaying((isPlaying) => !isPlaying);
    
  };
  const [play] = useSound(click);

  return (
    <div>
      <Button onClick={startStop}>{settings.playing ? "Stop" : "Start"}</Button>
      <p>{settings.interval}</p>
    </div>
  );
}
