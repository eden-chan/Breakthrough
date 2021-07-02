import { useRadio } from "@chakra-ui/radio";
import { Box } from '@chakra-ui/react';
import { useTheme } from "@chakra-ui/react";
import 'tailwindcss/tailwind.css';

export default function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props);
    const input = getInputProps();
    const checkbox = getCheckboxProps();
    const theme = useTheme();
    return (
        <Box as="label">
            <input {...input } />
            <Box
               {...checkbox}
               cursor="pointer"
               boxShadow="md"
               _checked={{
                   bg: theme.config.colors.prim_main,
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
