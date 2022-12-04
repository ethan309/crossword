import { AdjacentDirectionOffset, Coordinates, Direction } from "../types";

/**
 * Get vertical and horizontal offset for direction.
 * @param dir offset direction.
 * @returns [vertical offset, horizontal offset]
 */
function parseDirectionDeltas(
    dir: Direction
): [AdjacentDirectionOffset, AdjacentDirectionOffset] {
    let v: AdjacentDirectionOffset = dir.includes("up") ? -1 : 0;
    if (dir.includes("down")) {
        v = 1;
    }
    let h: AdjacentDirectionOffset = dir.includes("left") ? -1 : 0;
    if (dir.includes("left")) {
        h = 1;
    }
    return [v, h];
}

/**
 * Given row/column numbers and a direction on a board of spaces, gets row/column coordinates for the adjacent space in the given direction.
 * @param row row number (zero indexed).
 * @param col column number (zero indexed).
 * @param dir direction in which to find adjacent space.
 * @returns the coordinates of the adjacent space, or null if it does not exist
 */
export function getAdjacentIndexes(
    row: number,
    col: number,
    dir: Direction
): Coordinates | null {
    const [vOffset, hOffset] = parseDirectionDeltas(dir);
    const coordinates: Coordinates = [row + vOffset, col + hOffset];

    if (coordinates.some((coordinate) => coordinate < 0)) {
        return null;
    }

    return coordinates;
}
