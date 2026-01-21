let changingString = "Hello World";
changingString = "Olá Mundo";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
changingString;
       
const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
constantString;


let something: "hello" = "hello";
// OK
something = "hello";
// ...
something = "howdy";


function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");


function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}


interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
configure("automatic");




const obj = { counter: 0 };
if (true) {
  obj.counter = 1;
}

function handleRequest(url : String , method : "GET" | "POST") : void{}

const req = {url  : "example.com" , method : "GET"};

handleRequest(req.url, req.method) // Gives Error because it will treat this the method as string not as the GET

// Solutions includes these two Methods : 

// Change 1
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req.url, req.method as "GET");

const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
