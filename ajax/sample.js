//Deniz Sariaslan
var Types;
(function (Types) {
    Types[Types["Neapolitan"] = 1] = "Neapolitan";
    Types[Types["Chicago"] = 2] = "Chicago";
    Types[Types["Newyork"] = 3] = "Newyork";
    Types[Types["Sicilian"] = 4] = "Sicilian";
    Types[Types["Mediterranean"] = 5] = "Mediterranean";
})(Types || (Types = {}));
var Typesa;
(function (Typesa) {
    Typesa["xname"] = "Neapolitan";
    Typesa["size"] = "16 inc";
    Typesa["Xtype"] = "thin crust";
})(Typesa || (Typesa = {}));
var PizzaMaker = /** @class */ (function () {
    function PizzaMaker() {
    }
    PizzaMaker.prototype.create = function (event) {
        return { xname: event.xname, size: event.size, Xtype: event.Xtype };
    };
    return PizzaMaker;
}());
var pizzaMaker = new PizzaMaker();
var pizza = pizzaMaker.create({
    xname: 'Newyork',
    size: '12 inc',
    Xtype: 'Gluten free'
});
console.log(Types);
console.log(pizza);
console.log(Typesa);
function greeters(Pizza) {
    return " Order Name:" + pizza.xname + ", Size:" + pizza.size + ", Type: " + pizza.Xtype;
}
document.body.innerHTML = greeters(0);
