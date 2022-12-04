import React from "react";
import { Wrap, WrapItem, Badge } from "@chakra-ui/react";

interface IWordListProps {
    words: string[];
}

const WordList = (props: IWordListProps) => {
    const { words } = props;

    // ...

    return (
        <Wrap>
            {words.map((word) => (
                <WrapItem key={word}>
                    <Badge fontSize="lg">{word.toUpperCase()}</Badge>
                </WrapItem>
            ))}
        </Wrap>
    );
};

export default WordList;
