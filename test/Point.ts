import Point from "../src/Point";
import "should";

describe("Point", () => {
	it("Passed arguments should construct the vector array", () => new Point(1, 2).vector.should.be.eql([1, 2]));
	it("toString() should return correct result", () => {
		new Point(1).toString().should.be.equal("[1]");
		new Point(1, 1.5).toString().should.be.equal("[1, 1.5]");
	});
	describe("clone()", () => {
		it("clone() should return an object with the same data", () => new Point(1, 2).clone().vector.should.be.eql([1, 2]));
		it("clone() should return a different reference", () => {
			let p1 = new Point(1);
			let p2 = p1.clone();
			(p1 === p2).should.be.false();
		});
	});
	describe("equals()", () => {
		it("equals() should return true for equal points", () => new Point(1, 2).equals(new Point(1, 2)).should.be.true());
		it("equals() should return false for unequal points", () => new Point(1, 2).equals(new Point(2, 3)).should.be.false());
	});
	it("getDistance() should return correct result", () => {
		new Point(1, 1).getDistance(new Point(2, 2)).should.be.approximately(1.41, 0.01);
		new Point(1, 2, 3).getDistance(new Point(4, 5, 6)).should.be.approximately(5.19, 0.01);
	});
	describe("interpolate()", () => {
		it("interpolate() should return the first point when t is 0", () => Point.interpolate(new Point(0, 0, 0), new Point(5, 5, 5), 0).vector.should.be.eql([0, 0, 0]));
		it("interpolate() should return the second point when t is 1", () => Point.interpolate(new Point(0, 0, 0), new Point(5, 5, 5), 1).vector.should.be.eql([5, 5, 5]));
		it("interpolate() should return correct value", () => Point.interpolate(new Point(0, 0, 0), new Point(5, 5, 5), .2).vector.should.be.eql([1, 1, 1]));
	});
});
