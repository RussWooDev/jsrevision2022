///// Bool Obj /////
// let wrong = false;
// Boolean(wrong); //creates new bool obj

///// Bool Instance Methods /////
// Boolean.toString(wrong) // Retuens string of bool value
// let result = Boolean.valueOf(wrong) // returns primitive value of bool obj. Overriedes Object.valueOf()

// console.log(result);

///// Null Type /////
// const nothing = null;
// console.log(typeof(nothing)); // this returns object

///// Number Type /////
// console.log(Number.isSafeInteger(2**10000)); // To check if number is safe

/////////////////////////////////////////////////////////////////////
//////////////////////////// String Type ////////////////////////////
/////////////////////////////////////////////////////////////////////
// Substring 
// const word = "Hour";
// const subword = word.substring(0, 3);
// console.log(subword);

// if indexEnd is greater than indexStart, then u will see the effect swapped
// const subword = word.substring(3, 0);
// console.log(subword); // Will still produce Hou

// if any arg value is greater than the length of ths string, then it will be treate as str.length
// const subword = word.substring(8, 0);
// console.log(subword); // Will still produce Hour

// if any arg value is lesser than the 0, then it will be treate as str.length
// const subword = word.substring(0, -5);
// console.log(subword); // Will produce nothing


//asdasdas