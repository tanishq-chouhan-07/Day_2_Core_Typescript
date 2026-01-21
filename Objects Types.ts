// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
// printCoord({ x: 3, y: 7 });

// Optional Properties

// The parameter's type annotation is an object type
function printCoord1(pt: { x: number; y?: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord1({ x: 3 });
printCoord1({ x: 5 ,y:4 });