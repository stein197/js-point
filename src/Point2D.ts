import Point from "./Point";

// TODO: Docs
export = class Point2D extends Point {

	public get x(): number {
		return this.vector[0];
	}

	public set x(value: number) {
		this.vector[0] = value;
	}

	public get y(): number {
		return this.vector[1];
	}

	public set y(value: number) {
		this.vector[1] = value;
	}

	public constructor(x: number, y: number) {
		super(x, y);
	}

	public toPlain(): {x: number; y: number;} {
		return {x: this.x, y: this.y};
	}
}
