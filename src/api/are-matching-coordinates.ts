import { Coordinates } from "../types";

/**
 * ...
 * @param A first coordinate
 * @param B second coordinate
 * @returns is coordinates match
 */
export function areMatchingCoordinates(
    A: Coordinates,
    B: Coordinates
): boolean {
    return !A.some((entry, index) => B[index] !== entry);
}
