import Point3D from "../src/Point3D";
import "should";

describe("Point3D", () => {
	describe("Point3D.z", () => {
		it("Should return correct value", () => new Point3D(1, 2, 3).z.should.be.eql(3));
		it("Should set value correctly", () => {
			const p = new Point3D(1, 2, 3);
			p.z = 5;
			p.z.should.be.eql(5);
		});
	});
	describe("Point3D.toPlain()", () => {
		it("Should return correct object", () => new Point3D(1, 2, 3).toPlain().should.be.deepEqual({x: 1, y: 2, z: 3}));
	});
});
