// Toán tử ba ngôi

const x = 20;
const result = (x < 500) ? console.log("Nhỏ hơn 500") : console.log("Lớn hơn 500")

// Shorthand Evaluated

const variable1 = 'Hello world';

const variable2 = variable1 || '';

console.log(variable2);

// Variable declaration – If Comparison

var x1, y1 = 20;
x1 = (y1) ? y1 + 10 : y1 - 10;
console.log(x1);

// For loop – For loop with decimal base

const a = [1, 2, 3, 4];

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

for (let i = 0; i < 14; i++) {
    console.log(i);
}

// Object property

const x1 = 5, y1 = 9;
const obj = { x1,y1 };

console.log(obj);

// Rút gọn định nghĩa function

const helloword = name => console.log('Hello', name);
helloword('Thang');

setTimeout(() => console.log('Loaded'), 2000);

const list = [1,2,3,4,5];
list.forEach(console.log);

// Set default value for parameter in function

getValue = (a,b = 2, c =5) => (a * b + c);

console.log(getValue(7));

// Template list

const first = 'Hello', last = 'World';
const helloworld = `${first} ${last}`;

console.log(helloworld);

// Destructuring Assignment




//Spead Operator

const odd = [1,3,5];
const nums = [2,4,6, ...odd];
console.log(nums);

const arr = [1,2,3,4,5,6];
const arr2 = [...arr];
console.log(arr2);

const nums2 = [0, ...arr2,7,8];
console.log(nums2);

// Constraint Param

param = () => { throw new Error('Thiếu tham số!');}
sample = (so = param()) => so

console.log(sample());

// find() in arrays

const employees = [
    { name: 'Emp A', age: 20 },
    { name: 'Emp B', age: 28 },
    { name: 'Emp C', age: 38 }
];

const name = 'Emp B'

emp = employees.find(item => item.name === name)
console.log(emp);

// Object[key]

const rule = {
    firstName: {required: true},
    lastName : {required: true},
}

const validate = (rule, values) => {
    for(prop in rule) {
        if(rule[prop].required) {
            if(!values[prop]){
                return false;
            }  
        }
    }
    return true;
}

console.log(validate(rule, {firstName:'Thang', lastName:'Vo'})); 
console.log(validate(rule, {firstName:'Thang'})); 


// Bitwise NOT double

Math.floor(6.9) === 6
~~6.9 === 6









