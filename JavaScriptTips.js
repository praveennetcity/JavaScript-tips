
/* Short Circuting */

let authorizeduser = true;

//Normal Conditonal Statement 

if(authorizedUser) {
    showGreetings(authorizeduser);
}


//Using Short Circuting

authorizeduser && showGreetings(authorizeduser);

/* ----------------------------------------------------------------------------------- */

// Pretty-Print your JSON Data

const object = {"name" : "test"};

JSON.stringify(object) //Normal JSON

JSON.stringify(object, null , 2) // Beautified JSON

/* ------------------------------------------------------------------------------------ */


//Boost  Math.floor()

// Simple JavaScript 

Math.floor(2.2) // 2

~~2.2 // 2

/* 
    Double tide operator will aviod the performance caused by Math.floor() 
    It will work with only positive float numbers 
    
*/

/* ------------------------------------------------------------------------------- */

