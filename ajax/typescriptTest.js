var shapeType;
(function (shapeType) {
    shapeType[shapeType["circle"] = 0] = "circle";
    shapeType[shapeType["square"] = 1] = "square";
    shapeType[shapeType["rectangle"] = 2] = "rectangle";
})(shapeType || (shapeType = {}));
var Circle = (function () {
    function Circle(center, radius) {
        this.x = center.x;
        this.y = center.y;
        this.radius = radius;
        this.type = shapeType.circle;
    }
    Circle.prototype.area = function () {
        return Math.PI * radius * this.radius;
    };
    return Circle;
}());
Circle.type = shapeType.circle;
Circle.numberOfSides = 1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdFRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0eXBlc2NyaXB0VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQSxJQUFLLFNBSUo7QUFKRCxXQUFLLFNBQVM7SUFDViw2Q0FBTSxDQUFBO0lBQ04sNkNBQU0sQ0FBQTtJQUNOLG1EQUFTLENBQUE7QUFDYixDQUFDLEVBSkksU0FBUyxLQUFULFNBQVMsUUFJYjtBQUVEO0lBVUksZ0JBQVksTUFBYyxFQUFFLE1BQWM7UUFDdEMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDakMsQ0FBQztJQVJELHFCQUFJLEdBQUo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMxQyxDQUFDO0lBT0wsYUFBQztBQUFELENBQUMsQUFoQkQ7QUFJVyxXQUFJLEdBQWEsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUNsQyxvQkFBYSxHQUFVLENBQUMsQ0FBQyJ9