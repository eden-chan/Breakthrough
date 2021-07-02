import { useRadio } from "@chakra-ui/radio";
import { Box } from '@chakra-ui/react';
import 'tailwindcss/tailwind.css';

export default function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props);
    const input = getInputProps();
    const checkbox = getCheckboxProps();
    return (
        <Box as="label">
            <input {...input } />
            <Box
               {...checkbox}
               cursor="pointer"
               boxShadow="md"
               _checked={{
                   bg: "primary.main",
                   color: "white"
               }}
               px={5}
               py={3}
            >
               {props.children}
            </Box>
        </Box>
    )
}
