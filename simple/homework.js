var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var ITS562;
(function (ITS562) {
    var Response;
    (function (Response) {
        Response[Response["No"] = 0] = "No";
        Response[Response["Yes"] = 1] = "Yes";
    })(Response = ITS562.Response || (ITS562.Response = {}));
    var Greeter = /** @class */ (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    }());
    ITS562.Greeter = Greeter;
})(ITS562 || (ITS562 = {}));
function respond(recipient, message) {
}
function product(settings) {
    var x = settings.name;
    respond(x, ITS562.Response.Yes);
}
respond("Princess Caroline", ITS562.Response.Yes);
var greeter = new ITS562.Greeter(2);
