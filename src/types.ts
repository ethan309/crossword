/// LETTER

export const LETTERS = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

/**
 * [v, h]
 */
export type Coordinates = [number, number];

export interface IBoardSpaceActions {
    /**
     * Add a letter from the board to the current selection.
     * @param coordinates coordinates of newest letter space on board to add.
     */
    addToCurrentSelection(coordinates: Coordinates): void;
    /**
     * Check if a given board space is selected.
     * @param coordinates corrdinates of space on board.
     */
    isSpaceSelected(coordinates: Coordinates): boolean;
}

/// BOARD

/**
 * 4 directions: vertical, horizontal, or either diagonal.
 */
export enum SelectionDirection {
    Vertical = "|",
    Horizontal = "—",
    SlantedLeft = "\\",
    SlantedRight = "/",
}
export type HDirection = "left" | "right";
export type VDirection = "up" | "down";
export type Direction =
    | VDirection
    | HDirection
    | "up left"
    | "up right"
    | "down left"
    | "down right";
export type AdjacentDirectionOffset = -1 | 0 | 1;

export type BoardDimension = number;
export type BoardDimensions = [BoardDimension, BoardDimension];

export interface ISelection {
    word?: string;
    coordinates: Coordinates[];
}

export interface IBoardState {
    isSelecting: boolean;
    currentSelectionDirection?: SelectionDirection;
    currentSelection: Coordinates[];
}

export interface IBoardActions {
    /**
     * Complete/end the current selection and add to selection record.
     */
    endCurrentSelection(): void;
}

/// INTERFACE

export interface ICrosswordActions {
    /**
     * Remove all current selections.
     */
    clearSelections: VoidFunction;
    /**
     * Remove N number of selections.
     * @param n number of selections to clear. Ex: 2 clears the most recently 2 selected words.
     */
    clearLastNSelections(n: number): VoidFunction;
}

export interface ICrosswordSelections {
    selectedSpaces: ISelection[];
}
