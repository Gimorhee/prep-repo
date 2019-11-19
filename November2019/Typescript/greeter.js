var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Danny", lastName: "Rhee" };
document.body.textContent = greeter(user);
// ------------------------------------------------------------------- //
var notSure;
notSure = 3;
var isDone = false;
var list = [1, 2, 3];
var x = ["1", 2];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
var c = Color.Red;
var colorName = Color[2];
create({ pop: 0 });
create(null);
