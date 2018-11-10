interface IPoint {
    readonly x: number;
    readonly y: number;
}

interface IShapeCalcs {
    area() : number;
    perimeter() : number;
}
enum shapeType {
    circle,
    square,
    rectangle
}

class Circle implements IPoint, IShapeCalcs {
    readonly x: number;
    readonly y: number;
    radius: number;
    static type:shapeType = shapeType.circle;
    static numberOfSides:number = 1;
    
    area():number{
        return Math.PI * this.radius * this.radius;
    }
    perimeter():number{
        return 2* Math.PI * this.radius;
    }
    constructor(center: IPoint, radius: number) {
        this.x = center.x;
        this.y = center.y;
        this.radius = radius;
        Circle.type = shapeType.circle;
    }
}

