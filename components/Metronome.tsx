import { useState, useEffect } from "react";
import {
  Button,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import useSound from "use-sound";
import firstClick from "./click1.mp3";
import click from "./click2.mp3";

export default function Metronome(props) {
  const [settings, setSettings] = useState({
    isPlaying: false,
    tempo: props.tempo ? props.tempo : 160,
    beatsPerMeasure: props.beatsPerMeasure ? props.beatsPerMeasure : 4,
    beat: 1,
    interval: -1,
  });
  useEffect(() => {
    // Cleanup Service Worker on Component Dismount
    return () => {
      clearInterval(settings.interval);
    };
  }, [settings.interval]);

  const startStop = async () => {
    if (settings.isPlaying) {
      clearInterval(settings.interval);
    }
    setSettings((prevSettings) => {
      const frequency = 60000 / settings.tempo;
      return {
        ...prevSettings,
        isPlaying: !prevSettings.isPlaying,
        interval: prevSettings.isPlaying ? -1 : setInterval(tick, frequency),
      };
    });
  };
  const [playClick] = useSound(click);
  const [playFirstClick] = useSound(firstClick);

  const tick = () => {
    setSettings((prevSettings) => {
      if (prevSettings.beat == 1) {
        playFirstClick();
      } else {
        playClick();
      }
      return {
        ...prevSettings,
        beat: (prevSettings.beat % prevSettings.beatsPerMeasure) + 1,
      };
    });
  };
  const changeTempo = (bpm) => {
    clearInterval(settings.interval);
    const frequency = 60000 / bpm;
    setSettings((prevSettings) => {
      return {
        ...prevSettings,
        interval: prevSettings.isPlaying ? setInterval(tick, frequency) : -1,
        tempo: bpm,
      };
    });
  };
  return (
    <Box>
      <Button onClick={startStop}>
        {settings.isPlaying ? "Stop" : "Start"}
      </Button>
      <Slider
        defaultValue={60}
        min={10}
        max={300}
        step={1}
        onChangeEnd={(value) => {
          changeTempo(value);
        }}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <p>Tempo: {settings.tempo}bpm</p>
    </Box>
  );
}
