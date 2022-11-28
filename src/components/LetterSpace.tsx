import React, { useMemo } from "react";
import { Center, Square } from "@chakra-ui/react";

interface ILetterSpaceProps {
    character: string;
}

const LetterSpace = (props: ILetterSpaceProps) => {
    const { character } = props;

    const LetterSpace = useMemo(
        () => (character.length > 0 ? character.charAt(0).toUpperCase() : " "),
        [character]
    );

    return (
        <Square size="2rem">
            <Center>{LetterSpace}</Center>
        </Square>
    );
};

export default LetterSpace;
