import { VStack } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { LETTERS } from "../types";
import BoardRow from "./BoardRow";

interface IBoardProps {
    rows: string[];
}

const Board = (props: IBoardProps) => {
    const { rows } = props;

    const targetRowLength = useMemo(
        () => (rows && rows.length > 0 ? rows[0].length - 1 : 0),
        [rows]
    );
    const rowStrings = useMemo(
        () =>
            rows.map((row) =>
                Array.from(row)
                    .map((l) => l.toUpperCase())
                    .filter((l) => LETTERS.includes(l))
                    .join("")
                    .padEnd(targetRowLength, row[row.length - 1])
                    .slice(0, targetRowLength)
            ),
        [rows, targetRowLength]
    );

    return (
        <VStack>
            {rowStrings.map((rowLetters, index) => (
                <BoardRow letters={rowLetters} key={index} />
            ))}
        </VStack>
    );
};

export default Board;
