import React, { useState, useEffect } from 'react';
import {
  Button,
  Box,
  Flex,
  HStack,
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Collapse,
  useDisclosure,
  Text,
} from '@chakra-ui/react';

import {
  //MenuIcon,
  PlayIcon,
  PauseIcon,
  VolumeDownIcon,
  VolumeUpIcon,
} from './icons';
import useSound from 'use-sound';

export default function Metronome(props) {
  const [settings, setSettings] = useState({
    isPlaying: false,
    tempo: props.tempo ? props.tempo : 160,
    beatsPerMeasure: props.beatsPerMeasure ? props.beatsPerMeasure : 4,
    beat: 1,
    volume: 0.5,
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
        interval: prevSettings.isPlaying
          ? -1
          : window.setInterval(tick, frequency),
      };
    });
  };
  const [playClick] = useSound('/audio/click2.mp3', {
    volume: settings.volume,
  });
  const [playFirstClick] = useSound('/audio/click1.mp3', {
    volume: settings.volume,
  });

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
        interval: prevSettings.isPlaying
          ? window.setInterval(tick, frequency)
          : -1,
        tempo: bpm,
      };
    });
  };
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <HStack
        pt="10px"
        width="100%"
        alignItems="center"
        justifyItems="space-between"
        spacing="true"
      >
        {/* <IconButton
          aria-label="Menu"
          w="50px"
          h="50px"
          objectFit="scale-down"
          isRound={true}
          icon={<MenuIcon w="100%" h="100%" />}
        /> */}
        <IconButton
          onClick={startStop}
          aria-label="Start and Pause"
          m="auto"
          boxSize="80px"
          objectFit="scale-down"
          justifySelf="center"
          isRound={true}
          icon={
            settings.isPlaying ? (
              <PauseIcon w="100%" h="100%" />
            ) : (
              <PlayIcon w="100%" h="100%" />
            )
          }
        />
      </HStack>
      <Flex>
        <VolumeDownIcon boxSize="40px" />
        <Slider
          defaultValue={settings.volume}
          colorScheme="yellow"
          min={0}
          max={1}
          step={0.1}
          onChange={(value) => {
            setSettings((prevSettings) => {
              return { ...prevSettings, volume: value };
            });
          }}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <VolumeUpIcon boxSize="40px" />
      </Flex>
      <Slider
        defaultValue={settings.tempo}
        min={30}
        max={300}
        step={1}
        onChange={(value) => {
          changeTempo(value);
        }}
        onChangeStart={onToggle}
        onChangeEnd={onToggle}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Collapse in={isOpen}>
        <Text align="center" size="64px" decoration="bold">
          {settings.tempo}bpm
        </Text>
      </Collapse>
    </Box>
  );
}
