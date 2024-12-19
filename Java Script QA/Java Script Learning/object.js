let person=
{
    firstname:"John",
    lastname:"Kenedy",
    age:50,
    weight:60
}
console.log(person["firstname"])
console.log(person.age);

//for in loop
for(let x in person)
{
    console.log(x);//prints only property name
    console.log(person[x]);//prints only values of property
    console.log(x+" "+person[x]); //prints both value and property
}