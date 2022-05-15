import {Cloneable, Equalable} from "@stein197/ts-util";

/**
 * Represents an N-dimentional point which can be applied in both two or three dimentions and more. Basic usage is:
 * ```ts
 * let p = new Point<3>(0, 1, 2); // or just new Point(0, 1, 2) three-dimentional point
 * p.vector; // [0, 1, 2]: plain array
 * p.x; // 0
 * p.y; // 1
 * p.z; // 2
 * ```
 * When working with two-dimentional points it's worth using static {@link Point.create()} function which excludes
 * redundant `z` property from the instance:
 * ```ts
 * let p = Point.create(1, 2); // Automatically detects the dimention of the point which is 2
 * p.x; // 1
 * p.y; // 2
 * p.z; // Error - z does not exist
 * ```
 * The same applies to one-dimentional points:
 * ```ts
 * let p = Point.create(1);
 * p.x; // 1
 * p.y; // Error - y does not exist
 * ```
 * @typeParam N Dimention of the point.
 */
export default class Point<N extends number> implements Cloneable<Point<N>>, Equalable<Point<N>> {

	/** Plain data. */
	public readonly vector: ConstArray<number, N>;

	/** The first number of the vector */
	public get x(): number {
		return this.vector[0];
	}

	/** The second number of the vector */
	public get y(): N extends 1 ? never : number {
		// @ts-ignore
		return this.vector[1];
	}

	/** The third number of the vector */
	public get z(): N extends 1 | 2 ? never : number {
		// @ts-ignore
		return this.vector[2];
	}

	/**
	 * Creates a point.
	 * @param vector An array of coordinates.
	 */
	public constructor(...vector: ConstArray<number, N>) {
		this.vector = vector;
	}

	/**
	 * Returns the point as a string. For example for `new Point(1, 2)` it will return `"[1, 2]"`.
	 * @returns String representation of the point.
	 */
	public toString(): string {
		return `[${this.vector.join(", ")}]`;
	}

	/**
	 * Creates a clone of the point.
	 * @returns A clone.
	 */
	public clone(): Point<N> {
		// @ts-ignore
		return new Point(...this.vector);
	}

	/**
	 * Checks if the passed point is equal to the current one. Equals points have the same coordinates.
	 * @param obj Point to compare.
	 * @returns `true` if two points are equal.
	 */
	public equals(obj: Point<N>): boolean {
		return this.vector.length === obj.vector.length && this.vector.every((n, i) => obj.vector[i] === n);
	}

	/**
	 * Resolves the distance length between two points.
	 * @param point The point to which resolve the distance.
	 * @returns The distance between points.
	 */
	public getDistance(point: Point<N>): number {
		return Math.sqrt(this.vector.reduce((prev, v, i) => prev + (v - point.vector[i]) ** 2, 0));
	}

	/**
	 * Creates a point. Works the same way as the plain constructor except for that the method excludes redundant `y` or
	 * `z` properties from the instance. For example:
	 * ```ts
	 * let p1 = new Point(1, 2);
	 * p1.z; // Ok despite that this makes no sense
	 * let p2 = Point.create(1, 2);
	 * p2.y; // Ok
	 * p2.z; // Compile-time error
	 * ```
	 * @param vector An array of coordinates.
	 * @returns The point with excluded properties.
	 */
	public static create<N extends number>(...vector: ConstArray<number, N>): PointExclude<N> {
		// @ts-ignore
		return new Point(...vector);
	}
}

type ConstArray<T, L extends number> = Array<T> & {
	0: T,
	readonly length: L
}

type PointExclude<N extends number> = Omit<Point<N>, N extends 0 ? (
	"x" | "y" | "z"
) : N extends 1 ? (
	"y" | "z"
) : N extends 2 ? (
	"z"
) : never>;
