import Point2D from "./Point2D";

// TODO: Docs
export = class Point3D extends Point2D {

	public get z(): number {
		return this.vector[2];
	}

	public set z(value: number) {
		this.vector[2] = value;
	}

	public constructor(x: number, y: number, z: number) {
		super(x, y);
		this.vector.push(z);
	}

	public toPlain(): { x: number; y: number; z: number; } {
		return {x: this.x, y: this.y, z: this.z};
	}
}
