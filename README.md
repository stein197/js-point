# N-dimentional point implementation
This tiny package contains only one class `Point` that can be used to represen any-dimentional points.

## Installation
```
npm i @stein197/point
```

## Usage
Represents an N-dimentional point which can be applied in both two or three dimentions and more. Basic usage is:
```ts
let p = new Point<3>(0, 1, 2); // or just new Point(0, 1, 2) three-dimentional point
p.vector; // [0, 1, 2]: plain array
p.x; // 0
p.y; // 1
p.z; // 2
```
When working with two-dimentional points it's worth using static {@link Point.create()} function which excludes
redundant `z` property from the instance:
```ts
let p = Point.create(1, 2); // Automatically detects the dimention of the point which is 2
p.x; // 1
p.y; // 2
p.z; // Error - z does not exist
```
The same applies to one-dimentional points:
```ts
let p = Point.create(1);
p.x; // 1
p.y; // Error - y does not exist
```

## NPM scripts
- `build` builds the project
- `test` runs unit tests