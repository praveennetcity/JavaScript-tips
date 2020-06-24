
//Function declartion it will be hoisted

function test() {
//statments
}

//Function Expression it will not be hoisted

var x = function test() {
//statements
}

//Detecting Objects 

var  person1 = {
    firstName: "Steven",
    lastName: "Hancock",
    email: "shancock@allthingsjavascript.com",
    type: "admin",
    active: true,
    address: {
        street: "100 N. Main",
        zip: 10001
    }
};

for (var prop in person1) {
    console.log("Name: " + prop);
    console.log("Value: " + person1[prop]);
}

var properties = Object.keys(person1);

object.propertyIsEnumberable()

//Define Object Property 

Object.defineProperty(obj, "type", {enumerable:false})

Object.defineProperty(obj, "type", {configurable:false})

for (var prop in pres) {
    if (pres.hasOwnProperty(prop)) {
        console.log(prop + "  " + typeof pres[prop]);
    }
}

//  Immutable 
//Cannot be changed 

//Writable attributes of Objects 
Object.defineProperty(obj, "type", {writable:false})

//Sealing a object cahnge the existing values but cannot add or delete objects

Object.seal(obj)

//Freezing a object

Object.freeze()

//Mutable :

//can be changed

//Concise Property 
var multiple =5
let obj = {
start : 1,
end : 100,
multiple
}

//Cobmine two objects 

Object.setPrototypeof(obj, objProto);
Object.assign(obj, obj1,obj2,obj3)


