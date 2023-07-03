import {Cloneable, Equalable} from "@stein197/type";

/**
 * Represents an N-dimentional point which can be applied in both two or three dimentions and more. Basic usage is:
 * ```ts
 * let p = new Point<3>(0, 1, 2); // three-dimentional point
 * p.vector; // [0, 1, 2]: plain tuple
 * ```
 */
export = class Point implements Cloneable<Point>, Equalable<Point> {

	/**
	 * Plain data.
	 */
	public readonly vector: number[];

	/**
	 * Creates a point.
	 * @param vector An array of coordinates.
	 */
	public constructor(...vector: number[]) {
		this.vector = vector;
	}

	/**
	 * Returns the point as a string.
	 * @returns String representation of the point.
	 * @example
	 * ```ts
	 * new Point(1, 2, 3).toString(); // "[1, 2, 3]"
	 * ```
	 */
	public toString(): string {
		return `[${this.vector.join(", ")}]`;
	}

	public clone(): Point {
		return new Point(...this.vector);
	}

	public equals(obj: Point): boolean {
		return this.vector.length === obj.vector.length && this.vector.every((n, i) => obj.vector[i] === n);
	}

	/**
	 * Resolves the distance length between two points.
	 * @param point The point to which resolve the distance.
	 * @returns The distance between points.
	 */
	public getDistance(point: Point): number {
		return Math.sqrt(this.vector.reduce((prev, v, i) => prev + (v - point.vector[i]) ** 2, 0));
	}

	/**
	 * Returns a new point at {@link t} between points {@link p1} and {@link p2}.
	 * @param p1 The first point.
	 * @param p2 The second point.
	 * @param t Interpolation point that accepts values in range [0, 1].
	 * @returns An interpolated point vetween passed two.
	 */
	public static interpolate(p1: Point, p2: Point, t: number): Point {
		if (p1.vector.length !== p2.vector.length)
			throw new TypeError(`Incompatible points: p1 is ${p1.vector.length}-dimensional and p2 is ${p2.vector.length}-dimensional`);
		return new Point(...p1.vector.map((n, i) => n + (p2.vector[i] - n) * t));
	}
}
