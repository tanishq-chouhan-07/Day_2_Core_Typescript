function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}
 
function printToConsole(s: string) {
  console.log(s);
}
 
greeter(printToConsole);

type GreetFunction = (s : string) => void;

function Greet(func:GreetFunction){
    func("Hello World")
}

function printData(s : string)  {
    console.log(s);
    
}
Greet(printData)


// Call Signatures 

