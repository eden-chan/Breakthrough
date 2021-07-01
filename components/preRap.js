import { useState } from 'react';
import { Radio, RadioGroup} from '@chakra-ui/radio';
import { Stack } from '@chakra-ui/react';

const PreRap = () => {
    const [difficulty, setDifficulty] = useState("easy");
    return (
        <RadioGroup onChange={setDifficulty} value={difficulty}>
            <Stack direction="row">
                <Radio value="easy">Easy</Radio>
                <Radio value="medium">Medium</Radio>
                <Radio value="hard">Hard</Radio>
            </Stack>
        </RadioGroup>
    )
}

export default PreRap;