function Greet(name : string) : void{
    console.log(`Hello how are you ${name}`);
}

// Greet("Tanishq");
// Greet(45); // give the error only at the compile time not on the run time

// function PrintNumber(n : number) : number {
//     return n;
// }

// console.log(PrintNumber(33));

const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});