import React from 'react';
import { Box, Input, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

export default function ExternalPlayer() {
  const [url, setUrl] = useState('');
  return (
    <Box key="external_player">
      <Input
        placeholder="Youtube/Soundcloud URL"
        onChange={(e) => setUrl(e.target.value)}
      ></Input>
      <ReactPlayer url={url} playing={true} />
    </Box>
  );
}
