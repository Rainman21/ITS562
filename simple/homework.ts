enum Direction {
    Up,
    Down,
    Left,
    Right,
}

interface MySettings{
    name:string;
    calculateCost():number;
}
namespace ITS562{

   export enum Response{
        No,
        Yes,
    }

   export class Greeter implements MySettings {
        greeting: string;
        name: string;
        calculateCost():number{
            return 5;
        }
        constructor(message: string) {
            this.greeting = message;
            this.name = "Somethignn";
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }
    
   
}

function respond(recipient: string, message: ITS562.Response): void {
  
}

function product(settings:MySettings):void{
    let x = settings.name;
    respond(x,ITS562.Response.Yes);
}

respond("Princess Caroline", ITS562.Response.Yes);

let greeter = new ITS562.Greeter("2");
console.log(greeter.greet());
let worldGreeterasdajvoijasdvijasd = new ITS562.Greeter("World");
console.log(worldGreeterasdajvoijasdvijasd.greet());