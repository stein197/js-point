import Point2D from "../src/Point2D";
import "should";

describe("Point2D", () => {
	describe("Point2D.x", () => {
		it("Should return correct value", () => new Point2D(1, 2).x.should.be.eql(1));
		it("Should set value correctly", () => {
			const p = new Point2D(1, 2);
			p.x = 3;
			p.x.should.be.eql(3);
		});
	});
	describe("Point2D.y", () => {
		it("Should return correct value", () => new Point2D(1, 2).y.should.be.eql(2));
		it("Should set value correctly", () => {
			const p = new Point2D(1, 2);
			p.y = 3;
			p.y.should.be.eql(3);
		});
	});
	describe("Point2D.toPlain()", () => {
		it("Should return correct object", () => new Point2D(1, 2).toPlain().should.be.deepEqual({x: 1, y: 2}));
	});
});
