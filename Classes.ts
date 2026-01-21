class Point {
    x = 0 
    y = 0 

    constructor(x : number , y : number){
        this.x = x
        this.y = y
    }
}

let pt = new Point(2,4);
// console.log(pt.x, pt.y);


class Base {
    k = 10;
}

class Derived extends Base {
    super.this.k = 40
}


class Thing {
  _size = 0;
 
  get size(): number {
    return this._size;
  }
 
  set size(value: string | number | boolean) {
    let num = Number(value);
 
    // Don't allow NaN, Infinity, etc
 
    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }
 
    this._size = num;
  }
}







interface Pingable {
    ping : ()=> void;
}

class Ping implements Pingable {
    ping(){
        console.log("Hello Ping");        
    }
}

class Pong implements Pingable{
    pong(){
        console.log("Hello Pong");
        
    }
}





interface checkAble {
    check(s:string) : Boolean;
}

class NameChecker implements checkAble{
    check(s){
        return s.toLocaleLowerCase() == "ok;
    }
}


interface A {
  x: number;
  y?: number;
}
class C implements A {
  x = 0;
}
const c = new C();
c.y = 10;

