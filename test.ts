import Point from ".";
import mocha from "mocha";
import "should";

mocha.describe("Point", () => {
	mocha.it("Passed arguments should construct the vector array", () => new Point<2>(1, 2).vector.should.be.eql([1, 2]));
	mocha.it("toString() should return correct result", () => {
		new Point<1>(1).toString().should.be.equal("[1]");
		new Point<2>(1, 1.5).toString().should.be.equal("[1, 1.5]");
	});
	mocha.it("clone() should return an object with the same data", () => new Point<2>(1, 2).clone().vector.should.be.eql([1, 2]));
	mocha.it("clone() should return a different reference", () => {
		let p1 = new Point(1);
		let p2 = p1.clone();
		(p1 === p2).should.be.false();
	});
	mocha.it("equals() should return true for equal points", () => new Point<2>(1, 2).equals(new Point(1, 2)).should.be.true());
	mocha.it("equals() should return false for unequal points", () => new Point<2>(1, 2).equals(new Point(2, 3)).should.be.false());
	mocha.it("getDistance() should return correct result", () => {
		new Point<2>(1, 1).getDistance(new Point(2, 2)).should.be.approximately(1.41, 0.01);
		new Point<3>(1, 2, 3).getDistance(new Point(4, 5, 6)).should.be.approximately(5.19, 0.01);
	});
	mocha.it("create() works the same as the constructor", () => Point.create<2>(2, 3).vector.should.be.eql([2, 3]));
});
