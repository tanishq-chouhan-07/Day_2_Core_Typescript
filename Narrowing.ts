// Typeof Guards for the typescript 

function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
                        
  }
  return padding + input;
           
}


function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}


// Truthiness narrowing

function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}


// In operater narrowing  Ltype Fish = { swim: () => void };
type Bird = { fly: () => void };
type Fish = { swim: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}

// Instance of Narrowing 

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
               
  } else {
    console.log(x.toUpperCase());
               
  }
}


// Assignments
let y = Math.random();
let x = y < 0.5 ? 10 : "hello world!";

console.log(y);

 
console.log(x);
           
x = "goodbye!";
 
console.log(x);
           