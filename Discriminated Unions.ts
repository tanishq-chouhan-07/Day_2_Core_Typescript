interface Shape {
    kind : "circle" | "square",
    radius? : number;
    sidelength? : number
}

function GetArea (shape : Shape){
    if (shape.kind == "circle"){
        return Math.PI * shape.radius ** 2; // Error Because my be the radius got undefined or unavialable 
        // Solution is to use the ! to make solve this temporary 
    }
}

interface Circle {
    kind : "circle";
    radius : number
}
interface square {
    kind : "square";
    sidelength : number
}

type shape = Circle | square;

function GetArea1(shape:shape){
    if(shape.kind == "circle"){
        return Math.PI * shape.radius ** 2 ;
    }else {
        return shape.sidelength ** 2 ;
    }
}

let sh : shape = {
    kind : "square",
    sidelength : 4
}

let area = GetArea1(sh);
console.log(area);
