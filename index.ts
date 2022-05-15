import {Cloneable, Equalable} from "@stein197/ts-util";

export default class Point<N extends number> implements Cloneable<Point<N>>, Equalable<Point<N>> {

	public readonly vector: ConstArray<number, N>;

	public get x(): number {
		return this.vector[0];
	}

	public get y(): number {
		return this.vector[1];
	}

	public get z(): number {
		return this.vector[2];
	}

	public constructor(...vector: ConstArray<number, N>) {
		this.vector = vector;
	}

	public toString(): string {
		return `[${this.vector.join(", ")}]`;
	}

	public clone(): Point<N> {
		// @ts-ignore
		return new Point(...this.vector);
	}

	public equals(obj: Point<N>): boolean {
		return this.vector.length === obj.vector.length && this.vector.every((n, i) => obj.vector[i] === n);
	}

	public getDistance(point: Point<N>): number {
		return Math.sqrt(this.vector.reduce((prev, v, i) => prev + (v - point.vector[i]) ** 2, 0));
	}

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
