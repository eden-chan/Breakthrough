import { useState } from "react";
import { HStack, Center } from "@chakra-ui/react";
import { useRadioGroup } from "@chakra-ui/radio";
import RadioCard from "./RadioCard";

const PreRap = () => {
  const [difficulty, setDifficulty] = useState("easy");
  const difficulties = ["easy", "medium", "hard"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "difficulty",
    defaultValue: "easy",
    onChange: setDifficulty
  });
  const group = getRootProps();
  return (
    <Center>
      <HStack {...group}>
        {difficulties.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </HStack>
    </Center>
  );
};

export default PreRap;
