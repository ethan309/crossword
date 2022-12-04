import { Coordinates } from "../types";

export function buildWordFromSelection(
    board: string[],
    selection: Coordinates[]
): string {
    return selection
        .map((coordinates) => board[coordinates[1]][coordinates[0]])
        .join("");
}
