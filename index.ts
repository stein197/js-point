import {Cloneable, Equalable} from "@stein197/ts-util";

export default class Point implements Cloneable<Point>, Equalable<Point> {

	public readonly vector: number[];

	public constructor(...vector: number[]) {
		this.vector = vector;
	}

	public toString(): string {
		return `[${this.vector.join(", ")}]`;
	}

	public clone(): Point {
		return new Point(...this.vector.slice());
	}

	public equals(obj: Point): boolean {
		return this.vector.length === obj.vector.length && this.vector.every((n, i) => obj.vector[i] === n);
	}
}
