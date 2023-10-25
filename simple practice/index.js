// let name = "Rup"
// console.log(name);


// var num = 0.3;
// num = 2;       ///// vallue can be change in let or var keyword for declaring variable
// console.log(num);




// const num1 = 0.3;
// //num = 2;       ///// vallue can not be change in const keyword for declaring variable
// console.log(num1);


/* =========================note=================
                  primitive / value type

string 
number
boolean
undefined
null
*/

// let nam = "Rup"; //string literal
// let age = 30; //number literal
// let isApproved = false; // boolean literal
// let firstName; // undefine
// // or
// let firstName2 = undefined; //undefine
// let selecedColor = null; //null


/*==============note===================

its a dynamic language 
value can be change ever after initialize


all number are number no float or something float is also a number
type of null is object
type of undefine is undefine

*/

// console.log(typeof(name));
// name = 2;
// console.log(typeof(name));


// console.log(typeof(firstName2)); // type of undefine is undefine
// console.log(typeof(selecedColor)); // type of null is object


/*==================note===============
                 reference type

object
array
function
 */


//object

let person = { //person object 
    name : 'Rup',  //properties of person objsc
    age : 25,
    city: "tangail"
};

// change property value

//dot notation
person.name = 'Mohaiminul'

//bracket notation
person['age'] = 27;

let changeCIty = 'city';
person[changeCIty] = 'dhaka'

console.log(person);
console.log(person.name)



//object
// array is an object in javascript
//array type object


let selecedColor = ['red', 'blue']; 
selecedColor[2] = 'green'; //adding more value in next length
selecedColor[3] = 1
console.log(selecedColor);
console.log(selecedColor[2]);//show specific value
console.log(selecedColor.length);


//function

function sample()
{
    console.log('sample function')
}

sample();

function hello(name, age)
{
    console.log('my name is ' + name + ', age ' + age)
}

hello ("Rup", 25);
hello ("mohaiminul" , 27)

function square(number)
{
    return number * number;
}

console.log(square(8))















// var name = "Mohaiminul Islam <br/>";
// var age = 27;
// document.write(name);
// document.write(age);




// var name;
// var age;

// name = "Mohaiminul Islam";
// age = 27;

// document.write(name);
// document.write(age);

// var name, age, country;

// name = "mohaiminul <br/>";
// age = 26 ;
// country = " <br/> bd <br/>";
// console.log (name);
// console.log(age);
// console.log(country); 


// var num1 = 20; // variable declare
// console.log(typeof(num)); //view type in console
// console.log(typeof(num1)); // view type in doc write
// numm = toString(num1);  //convert number to string
// console.log(typeof(numm)); 

// var string = "20"; // variable declare
// num3 = parseInt(string); //convert string to int
// console.log(typeof(num3));

// var float = "20.5";
// num4 = parseFloat(float); // doshomik string ke number e convert krte float
// console.log(typeof(num4));

// var num5 = 2.623456;

// console.log(num5.toFixed(2)) // doshomik er por koyta ghor jabe sheta == eta string return krbe
// console.log(num5.toPrecision(3)) // number er length hishabe dekhabe prothom theke ==== eta string return krbe

// console.log(Number("12")) //Number method er kaj string ba onno kono data type ke number e convert kora
// console.log(typeof(Number("13"))) // data type dekhar jonno
// console.log(Number("14.5"))
// console.log(Number(true)) // number 1
// console.log(Number(false)) //number 0

//////////////////////   string  concatenate    /////////////////////////////


// document.write ("java " + "script <br/> ");

// var firstName = "Mohaiminul "
// var lastName = "Islam "
// var nickName = "Rup "
// var fullName = firstName + lastName + nickName;

// document.write("My Name Is " + fullName);












