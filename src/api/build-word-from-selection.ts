import { Coordinates } from "../types";

export function buildWordFromSelection(
    board: string[],
    selection: Coordinates[]
): string {
    return selection
        .map((coordinates) => board[coordinates[0]][coordinates[1]])
        .join("");
}
