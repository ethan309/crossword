import React, { useMemo } from "react";
import { HStack } from "@chakra-ui/react";
import LetterSpace from "./LetterSpace";

interface IBoardRowProps {
    letters: string;
}

const BoardRow = (props: IBoardRowProps) => {
    const { letters } = props;
    const rowLetters = useMemo(() => Array.from(letters), [letters]);

    // ...

    return (
        <HStack w="100%" justifyContent="space-evenly">
            {rowLetters.map((rowLetter, index) => (
                <LetterSpace character={rowLetter} key={index} />
            ))}
        </HStack>
    );
};

export default BoardRow;
