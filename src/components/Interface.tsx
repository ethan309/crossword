import React, { useCallback, useState } from "react";
import {
    Button,
    Flex,
    Heading,
    HStack,
    Spacer,
    Spinner,
    Text,
    VStack,
} from "@chakra-ui/react";
import Board from "./Board";
import WordList from "./WordList";

import { Coordinates, ISelection } from "../types";
import { areMatchingCoordinates } from "../api/are-matching-coordinates";

// interface ICrosswordContext extends ICrosswordSelections, ICrosswordActions {}

// export const CrosswordContext = createContext<ICrosswordContext | null>(null);

const Interface = () => {
    const [isLoading] = useState<boolean>(false);
    const [words] = useState<string[]>([
        "hippo",
        "panda",
        "silver",
        "rangoon",
        "spider",
        "december",
    ]);

    const [crosswordSelections, setCrosswordSelections] = useState<
        ISelection[]
    >([]);

    const isSpaceSelected = useCallback(
        (coordinates: Coordinates) =>
            crosswordSelections.some((selection) =>
                selection.coordinates.some((selectionCoordinates) =>
                    areMatchingCoordinates(selectionCoordinates, coordinates)
                )
            ),
        [crosswordSelections]
    );

    const addSelection = useCallback((selection: ISelection) => {
        setCrosswordSelections((currentSelections) => [
            ...currentSelections,
            selection,
        ]);
    }, []);

    const clearAllSelections = useCallback(
        () => setCrosswordSelections(() => []),
        []
    );
    const clearNSelections = useCallback(
        (n: number) =>
            setCrosswordSelections((currentSelections) =>
                currentSelections.length - n > 0
                    ? currentSelections.slice(0, currentSelections.length - n)
                    : []
            ),
        []
    );
    const clearPreviousSelection = useCallback(
        () => clearNSelections(1),
        [clearNSelections]
    );

    return (
        <Flex columnGap="2rem" padding="0.5rem">
            <VStack spacing={8} flex="7">
                {isLoading ? (
                    <Spinner />
                ) : (
                    <Board
                        rows={10}
                        cols={10}
                        includedWords={words}
                        addSelection={addSelection}
                        isSpaceSelected={isSpaceSelected}
                    />
                )}
            </VStack>
            <VStack spacing={8} flex="3">
                <Heading>{words.length} Words</Heading>
                {isLoading ? (
                    <Text>Loading...</Text>
                ) : (
                    <VStack>
                        <WordList words={words} />
                        <Spacer minH="2rem" />
                        <HStack spacing="2rem">
                            <Button onClick={clearPreviousSelection}>
                                Clear Last
                            </Button>
                            <Button onClick={clearAllSelections}>
                                Clear All
                            </Button>
                            <Button
                                onClick={() => console.log(crosswordSelections)}
                            >
                                Debug
                            </Button>
                        </HStack>
                    </VStack>
                )}
            </VStack>
        </Flex>
    );
};

export default Interface;
