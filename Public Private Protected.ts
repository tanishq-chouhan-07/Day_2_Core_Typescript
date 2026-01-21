class Greeter {
    public Greet(){
        console.log(" this is Public ");
    }

    protected protectedGreet(){
        console.log(" this is protected Greet ");
        
    }
    private privateGreet(){
        console.log(" this is protected Greet ");
        
    }
}

class SpecialGreeter extends Greeter {
    public Hoowdy(){
        console.log("Hoowdy Boss");
    }
}

let she : Greeter = new Greeter();
let he : SpecialGreeter = new SpecialGreeter();
he.Greet()
he.Hoowdy()

she.Greet()