let cars=["saab","volvo","BMW"];
//let cars=new Array("saab","Volvo","BMW");
console.log(cars);
console.log(cars[2]);

//we can have objects in an Array
let person1={
    name:"john",
    age:30
};
let person2={
    name:"David",
    age:40
};
let myarray=[person1,person2];
console.log(myarray);
console.log(myarray[0]);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

//For loop
for(let i=0; i<=fruits.length-1;i++)
{
    console.log(fruits[i]);
}
//For of loop
for(ele of fruits)
{
    console.log(ele);
}

//Recognize an Array
console.log(typeof fruits);
console.log(Array.isArray(fruits));