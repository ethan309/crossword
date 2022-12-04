import React, { createContext, useCallback, useMemo, useState } from "react";
import { Container, VStack } from "@chakra-ui/react";
import BoardRow from "./BoardRow";

import { generateBoardContent } from "../api/generate-board-content";
import {
    Coordinates,
    IBoardSpaceActions,
    IBoardState,
    ISelection,
} from "../types";
import { buildWordFromSelection } from "../api/build-word-from-selection";
import { areMatchingCoordinates } from "../api/are-matching-coordinates";

export interface IBoardContext extends IBoardState, IBoardSpaceActions {}

export const BoardContext = createContext<IBoardContext | null>(null);

interface IBoardProps {
    rows: number;
    cols: number;
    includedWords: string[];
    addSelection(selection: ISelection): void;
    isSpaceSelected(coordinates: Coordinates): boolean;
}

const Board = (props: IBoardProps) => {
    const {
        rows,
        cols,
        includedWords,
        addSelection,
        isSpaceSelected: isSpaceInSelections,
    } = props;

    const [isSelecting, setIsSelecting] = useState(false);
    const [currentSelection, setCurrentSelection] = useState<Coordinates[]>([]);

    const startSelection = useCallback(() => {
        setCurrentSelection([]);
        setIsSelecting(true);
    }, []);

    const boardRows = useMemo(
        () => generateBoardContent(cols, rows, includedWords),
        [rows, cols, includedWords]
    );

    const addToCurrentSelection = useCallback(
        (coordinates: Coordinates) =>
            setCurrentSelection((currentlySelected) => [
                ...currentlySelected,
                coordinates,
            ]),
        []
    );

    const isSpaceSelected = useCallback(
        (coordinates: Coordinates) =>
            isSpaceInSelections(coordinates) ||
            currentSelection?.some((selectedCoordinates) =>
                areMatchingCoordinates(selectedCoordinates, coordinates)
            ),
        [currentSelection, isSpaceInSelections]
    );

    const endCurrentSelection = useCallback(() => {
        if (isSelecting && currentSelection.length > 0) {
            const completedSelection: ISelection = {
                coordinates: currentSelection,
                word: buildWordFromSelection(boardRows, currentSelection),
            };
            addSelection(completedSelection);
            setCurrentSelection([]);
            setIsSelecting(false);
        }
    }, [isSelecting, currentSelection, boardRows, addSelection]);

    return (
        <BoardContext.Provider
            value={{
                isSelecting,
                addToCurrentSelection,
                currentSelection,
                isSpaceSelected,
            }}
        >
            <Container
                display="contents"
                onMouseDown={startSelection}
                onMouseUp={endCurrentSelection}
                onMouseLeave={endCurrentSelection}
            >
                <VStack>
                    {boardRows.map((rowLetters, index) => (
                        <BoardRow
                            rowIndex={index}
                            letters={rowLetters}
                            key={index}
                        />
                    ))}
                </VStack>
            </Container>
        </BoardContext.Provider>
    );
};

export default Board;
