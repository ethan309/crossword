import React, { useCallback, useContext, useMemo } from "react";
import { Center, Square } from "@chakra-ui/react";
import { BoardContext, IBoardContext } from "./Board";

import { Coordinates } from "../types";

interface ILetterSpaceProps {
    character: string;
    coordinates: Coordinates;
}

const defaultBoardContext: IBoardContext = {
    isSelecting: false,
    addToCurrentSelection: () => {},
    isSpaceSelected: () => false,
    currentSelection: [],
};

const LetterSpace = (props: ILetterSpaceProps) => {
    const { isSelecting, isSpaceSelected, addToCurrentSelection } =
        useContext(BoardContext) ?? defaultBoardContext;
    const { character, coordinates } = props;

    const onTryToSelect = useCallback(() => {
        if (isSelecting) {
            addToCurrentSelection(coordinates);
        }
    }, [addToCurrentSelection, coordinates, isSelecting]);

    const isSelected = useMemo(
        () => isSpaceSelected(coordinates),
        [coordinates, isSpaceSelected]
    );

    const letter = useMemo(
        () => (character.length > 0 ? character.charAt(0).toUpperCase() : "+"),
        [character]
    );

    return (
        <Square
            size="2rem"
            backgroundColor={isSelected ? "purple" : "transparent"}
            onMouseEnter={onTryToSelect}
            onMouseDown={onTryToSelect}
            userSelect="none"
        >
            <Center>{letter}</Center>
        </Square>
    );
};

export default LetterSpace;
