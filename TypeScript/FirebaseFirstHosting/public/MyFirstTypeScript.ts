//Data Types

var str:string = "Hello World";
var num:number = 0;
var flag:boolean = false;

//Enum

enum myConstants{
  pi = 3.14,
}

var radius:number = 20;

console.log('Calculating radius')
console.log(2 * myConstants.pi * radius);

//Functions

function addNumbers(num1:number, num2:number):number{
  return num1 + num2;
}

var num1:number = 45;
var num2:number = 55;

console.log(addNumbers(num1, num2));

// Function overloading

function areaOfQuad(side1:number);
function areaOfQuad(side1:number, side2:number);
function areaOfQuad(side1:number,side2:number,side3:number,side4:number);
function areaOfQuad(side1:number,side2?:number,side3?:number,side4?:number): number{
  if(side2 === undefined && side3=== undefined && side4 === undefined){
    side4 = side3 = side2 = side1;
  }
  else if(side3=== undefined && side4 === undefined)
  {
    side3 = side1;
    side4 = side2;
  }
  return side1 * side2 * side3 * side4;
}

console.log(areaOfQuad(num1));
console.log(areaOfQuad(num1, num2));
console.log(areaOfQuad(num1, num2,num2, num1 ));

//Classes and interfaces

interface PlayerInterface{
  run():void;
}

class Player implements PlayerInterface{
  static point:number;
  runDiv:HTMLElement
  constructor(){
    if(document.cookie != "")
    {
      Player.point = parseInt(document.cookie.split(":")[1]);
      if(isNaN(Player.point))
      {
        Player.point = 0;
      }
    }
    else{
      Player.point = 0;
    }
    this.runDiv = document.getElementById("run");
  }
  run():void{

    setInterval(
        () => {
          ++Player.point;
          this.runDiv.innerHTML = Player.point.toString();
        }
      ,1000);
  }

}

let x: [string, number];
x = ["hello", 10];
x[3] = "World";
console.log(x);

window.onunload = () =>{
    document.cookie = "TimerValue:" + Player.point;
}
