import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import useSound from "use-sound";
import click from "./click2.mp3";

export default function Metronome() {
  useEffect(() => {
    return () => {
      clearInterval(settings.interval);
    };
  }, []);
  const [settings, setSettings] = useState({
    playing: false,
    tempo: 160,
    interval: null,
  });
  const startStop = () => {
    if (!settings.playing) {
      setSettings((settings) => {
        return { ...settings, interval: setInterval(play, 1000) };
      });
    } else {
      clearInterval(settings.interval);
    }
    setSettings((prevSettings) => {
      return { ...prevSettings, playing: !prevSettings.playing };
    });
  };
  const [play] = useSound(click);

  return (
    <div>
      <Button onClick={startStop}>{settings.playing ? "Stop" : "Start"}</Button>
    </div>
  );
}
