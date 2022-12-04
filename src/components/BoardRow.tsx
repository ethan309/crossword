import React, { useMemo } from "react";
import { HStack } from "@chakra-ui/react";
import LetterSpace from "./LetterSpace";

interface IBoardRowProps {
    letters: string;
    rowIndex: number;
}

const BoardRow = (props: IBoardRowProps) => {
    const { letters, rowIndex } = props;
    const rowLetters = useMemo(() => Array.from(letters), [letters]);

    return (
        <HStack w="100%" justifyContent="space-evenly">
            {rowLetters.map((rowLetter, index) => (
                <LetterSpace
                    coordinates={[index, rowIndex]}
                    character={rowLetter}
                    key={index}
                />
            ))}
        </HStack>
    );
};

export default BoardRow;
