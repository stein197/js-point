import {Cloneable, Equalable} from "@stein197/ts-util";

export default class Point implements Cloneable<Point>, Equalable<Point> {

	public constructor(public readonly vector: number[]) {}

	public toString(): string {
		return `[${this.vector.join(", ")}]`;
	}

	public clone(): Point {
		return new Point(this.vector.slice());
	}

	public equals(obj: Point): boolean {
		if (this.vector.length !== obj.vector.length)
			return false;
		return this.vector.every((n, i) => obj.vector[i] === n);
	}
}
