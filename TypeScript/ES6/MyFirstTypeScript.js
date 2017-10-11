//Data Types
var str = "Hello World";
var num = 0;
var flag = false;
//Enum
var myConstants;
(function (myConstants) {
    myConstants[myConstants["pi"] = 3.14] = "pi";
})(myConstants || (myConstants = {}));
var radius = 20;
console.log('Calculating radius');
console.log(2 * myConstants.pi * radius);
//Functions
function addNumbers(num1, num2) {
    return num1 + num2;
}
var num1 = 45;
var num2 = 55;
console.log(addNumbers(num1, num2));
function areaOfQuad(side1, side2, side3, side4) {
    if (side2 === undefined && side3 === undefined && side4 === undefined) {
        side4 = side3 = side2 = side1;
    }
    else if (side3 === undefined && side4 === undefined) {
        side3 = side1;
        side4 = side2;
    }
    return side1 * side2 * side3 * side4;
}
console.log(areaOfQuad(num1));
console.log(areaOfQuad(num1, num2));
console.log(areaOfQuad(num1, num2, num2, num1));
var Player = (function () {
    function Player() {
        if (document.cookie != "") {
            Player.point = parseInt(document.cookie.split(":")[1]);
        }
        else {
            Player.point = 0;
        }
        this.runDiv = document.getElementById("run");
    }
    Player.prototype.run = function () {
        var _this = this;
        setInterval(function () {
            ++Player.point;
            _this.runDiv.innerHTML = Player.point.toString();
        }, 1000);
    };
    return Player;
}());
var x;
x = ["hello", 10];
x[3] = "World";
console.log(x);
window.onunload = function () {
    document.cookie = "TimerValue:" + Player.point;
};
