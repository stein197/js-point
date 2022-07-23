import Point from ".";
import mocha from "mocha";
import "should";

mocha.describe("Point", () => {
	mocha.it("Passed arguments should construct the vector array", () => new Point<2>(1, 2).vector.should.be.eql([1, 2]));
	mocha.describe("Getters", () => {
		mocha.it("Point.x should return the first number", () => Point.create<1>(1).x.should.be.eql(1));
		mocha.it("Point.y should return the second number", () => Point.create<2>(1, 2).y.should.be.eql(2));
		mocha.it("Point.z should return the third number", () => Point.create<3>(1, 2, 3).z.should.be.eql(3));
	});
	mocha.describe("Setters", () => {
		mocha.it("Point.x should set the value to the first number", () => {
			const p = Point.create<1>(1);
			p.x = 10;
			p.x.should.be.eql(10);
		});
		mocha.it("Point.y should set the value to the second number", () => {
			const p = Point.create<2>(1, 2);
			p.y = 10;
			p.y.should.be.eql(10);
		});
		mocha.it("Point.z should set the value to the third number", () => {
			const p = Point.create<3>(1, 2, 3);
			p.z = 10;
			p.z.should.be.eql(10);
		});
	});
	mocha.it("toString() should return correct result", () => {
		new Point<1>(1).toString().should.be.equal("[1]");
		new Point<2>(1, 1.5).toString().should.be.equal("[1, 1.5]");
	});
	mocha.describe("clone()", () => {
		mocha.it("clone() should return an object with the same data", () => new Point<2>(1, 2).clone().vector.should.be.eql([1, 2]));
		mocha.it("clone() should return a different reference", () => {
			let p1 = new Point(1);
			let p2 = p1.clone();
			(p1 === p2).should.be.false();
		});
	});
	mocha.describe("equals()", () => {
		mocha.it("equals() should return true for equal points", () => new Point<2>(1, 2).equals(new Point(1, 2)).should.be.true());
		mocha.it("equals() should return false for unequal points", () => new Point<2>(1, 2).equals(new Point(2, 3)).should.be.false());
	});
	mocha.it("getDistance() should return correct result", () => {
		new Point<2>(1, 1).getDistance(new Point(2, 2)).should.be.approximately(1.41, 0.01);
		new Point<3>(1, 2, 3).getDistance(new Point(4, 5, 6)).should.be.approximately(5.19, 0.01);
	});
	mocha.it("create() works the same as the constructor", () => Point.create<2>(2, 3).vector.should.be.eql([2, 3]));
	mocha.describe("interpolate()", () => {
		mocha.it("interpolate() should return the first point when t is 0", () => Point.interpolate(new Point<3>(0, 0, 0), new Point<3>(5, 5, 5), 0).vector.should.be.eql([0, 0, 0]));
		mocha.it("interpolate() should return the second point when t is 1", () => Point.interpolate(new Point<3>(0, 0, 0), new Point<3>(5, 5, 5), 1).vector.should.be.eql([5, 5, 5]));
		mocha.it("interpolate() should return correct value", () => Point.interpolate(new Point<3>(0, 0, 0), new Point<3>(5, 5, 5), .2).vector.should.be.eql([1, 1, 1]));
	});
});
