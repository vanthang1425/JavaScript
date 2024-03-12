//Closures scope
var sayBye = function (name) {
    var text = 'Bye, ' + name;
    return () =>{
        console.log(text);
    }
}
sayBye('Me');
var calledMe = sayBye('Me');
calledMe();

// Curry
function add(a,b,c) {
    return a+b+c;
}

console.log(add(1,2,3));
function addCurries(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}
console.log(addCurries(1)(2)(3));
const ad1 = addCurries(1);
const ad2 = ad1(2);
const ad3 = ad2(4);

console.log(ad3);

//This

var student = {
    name: 'Vo Van Thang',
    getName: function() {
        console.log(this.name);
        return this.name;
    }
};
var _destudent = student.getName();

//Scope chain
function step1 () {
    console.log(te);
}

function step2 () {
    var te = 2;
    console.log(te);
    //step1();
}
step2();
var te = "Global variables"

//scopes, bind

var checkNumericRange = function(value){
    if(typeof value !== 'number'){
        return false;
    }
    else 
    return value >= this.minimum && value <= this.maximum;
}
var range = {minimum: 10, maximum: 20};
var boundCheckNumericRange = checkNumericRange.bind(range);
var result = boundCheckNumericRange(12);
console.log(result);

// nested (Lexical scope)

function fOuter(){
    var x = "Hello";
    function fInner(){
        x = "World";
    }
    fInner();
    return x;
}
console.log(fOuter());


// Lexical scope
var myFunction = function () {
    var name = 'Van Thang';
    var myOtherFunction = function (){
        console.log('I am ' + name);
    };
    console.log(name);
    myOtherFunction();
};

myFunction();

//Closures

function outerF(){
    var x = "World";
    function innerFsetX(val){
        x = val;
    }
    return innerFsetX;
}
var a = outerF();
console.log(a("Hello"));

//functional inheritance
// function square(width) {
//     var squareObject = {};
//     squareObject.getArea = function () {
//         if(width>0) return width*width;
//     }
//     return squareObject;
// }
// var myBox = square(5);
// console.log(myBox.getArea() + "<br/>")
// console.log(myBox.width + "<br/>")

// function cube(width){
//     var cubeObject = square(width);
//     var squareArea = cubeObject.getArea;
//     cubeObject.getVolume = function () {
//         if(width>0) return squareArea() * width;
//     }
//     cubeObject.getArea = function () {
//         if(width>0) return squareArea() * 6;
//     }
//     return cubeObject;
// }
// var myCube = cube(5);
// console.log(myCube.getArea() + "<br/>");
// console.log(mycube.getVolume() + "<br/>");

// funcitonal inheritance

class square{
    constructor(width){
        this.width = width;
    }
    getArea(){
        console.log(`Square of this ${this.width * this.width}`);
        return this.width * this.width;
    }
}

class cube extends square{
    constructor(width){
        super(width);
    }

    squareArea = this.getArea();
    getVolume(){
        console.log(`Volume of this ${this.squareArea * this.width}`);
        return this.squareArea * this.width;
    }
}

var myCube = new cube(5);
myCube.getVolume();

// Bài tập về nhà

// callback

function myDisplayer(something){
    document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCall){
    let sum = num1 + num2;
    myCall(sum);
}
myCalculator(5,5,myDisplayer);

// Tạo ra 1 lớp Pet có tham số về name, tiếng kêu method :
// Introduce() => in ra tôi tên là name., talk(tiếng kêu), => in ra tiếng kêu
// Lớp dog extends từ lớp Pet, có thêm tham số là loại vật,
// và thêm method loại vật => tôi là động vật $(loại vật),
// gọi hàm introduce(), và gọi lại hàm talk( tiếng kêu dog)

class Pet {
    constructor(name){
        this.name = name;
    }

    petSound(talk){
        this.talk = talk;
        console.log(`Tiếng kêu: ${this.talk}`);
    }

    introduce(){
        console.log(`Tôi tên là ${this.name}`);
    }
}

class Dog extends Pet{
    constructor(name,type){
        super(name);
        this.type = type;
        //super.petSound(talk);
    }

    typeAnimal(){
        console.log(`Tôi là động vật ${this.type}`)
    }

    
    getSound(talk){
        super.petSound(talk)
        //console.log(`${this.talk}`);
    }
    
}

var dog = new Dog(`Golden`,`Lông xù`);
dog.introduce();
dog.typeAnimal();
dog.getSound(`ấu ấu`);



// -------------------------------trang 50--------------------------------
class Car{
    constructor(speed){
        this.speed = speed;
    }
    printSpeed(){
        console.log(`Speed: ${this.speed}`);
    }

    instanceMethod(){
        console.log("An instance method");
    };
}

var car = new Car(50);
car.printSpeed();
car.instanceMethod();

class Cabriolet extends Car{
    constructor(speed){
        super(speed);
    }

    printSpeedOf(){
        this.printSpeed();
    }

    stopState = `closed`;
    openTop(){
        this.topState = `opened`;
        console.log(`Top: ${this.topState}`);
    }
    closeTop(){
        this.stopState = `closed`;
        console.log(`Top: ${this.topState}`);
    }
};

var cabriolet = new Cabriolet(120);
cabriolet.printSpeedOf();
cabriolet.openTop();
cabriolet.closeTop();

class TeslaCabriolet extends Cabriolet{
    constructor(){
        super();
        this.name = `Tesla http://www.teslamotors.com/roadster`;
    }

    sayName(){
        console.log(`${this.name}`);
    }
}

var tesla = new TeslaCabriolet();
tesla.openTop();
tesla.sayName();

// -------------------------------trang 37--------------------------------

class Rect{
    constructor(x,y,w,h){
        this.x = x; this.y = y;
        this.w = w; this.h = h;
    };

    calcArea(){
        return this.w * this.h;
    };
}

var  rect1 = new Rect(5,6,5,2);
console.log(`Diện tích hcn ${rect1.calcArea()}`);



function Rect(x,y,w,h){
    this.x = x; this.y = y;
    this.w = w; this.h = h;
    this.calcArea = function(){
        return this.w*this.h;
    }
    return this;
}

var rect = new Rect(1,2,3,4);
console.log(`${rect.constructor.name} ${rect.constructor.prototype} ${rect.calcArea()}`);































