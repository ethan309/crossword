import React, { useMemo } from "react";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Board from "./components/Board";
import { generateBoardContent } from "./api/generate-board-content";

export const App = () => {
    const rows = useMemo(() => generateBoardContent(30, 15), []);

    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <VStack spacing={8}>
                        <Board rows={rows} />
                    </VStack>
                </Grid>
            </Box>
        </ChakraProvider>
    );
};
