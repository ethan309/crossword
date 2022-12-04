import { LETTERS } from "../types";

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

function getRandomLetter(): string {
    return LETTERS[getRandomInt(LETTERS.length)];
}

/**
 * ...
 * @param rowLength ...
 * @param rowCount ...
 * @returns ...
 */
function generateRandomBoard(rowLength: number, rowCount: number): string[] {
    if (rowLength <= 0 || rowCount <= 0) {
        return [];
    }
    const boardContent: string[] = [];

    for (let rowNumber = 0; rowNumber < rowCount; rowNumber++) {
        let rowContent: string = "";
        for (let entryNumber = 0; entryNumber < rowLength; entryNumber++) {
            rowContent += getRandomLetter();
        }
        boardContent.push(rowContent);
    }

    return boardContent;
}

/**
 * ...
 * @param rowLength ...
 * @param rowCount ...
 * @returns ...
 */
export function generateBoardContent(
    rowLength: number,
    rowCount: number,
    includedWords: string[] = []
): string[] {
    if (rowLength <= 0 || rowCount <= 0) {
        return [];
    }
    const boardContent: string[] = generateRandomBoard(rowLength, rowCount);

    return boardContent;
}
