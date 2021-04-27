'use strict'; 
// Strict mode has some reserved words that can be used by the language in the future.
// strict mode tells us about the errors that come during writing code in console panel directly.
//Example :~


// let hasDriversLicense = false;
// const passTest = true;

// if (passTest){
//     hasDriversLicense = true;
// }

// if(hasDriversLicense){
//     console.log("You Can Drive NOW");

// }


//To be noted that hasDriverLicense and hasDriversLicense are different.

//Without using strict mode its dificult to find error.. Using Strict mode erroir is displayed in Console Window

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function logger() {
//     console.log(`My Name is Akshat`)
// }

// //Calling //running //Invoking
// logger();
// logger();
// logger();
// logger();

// function fruitJuice(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `The Juice Contains ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// let finalJuice = fruitJuice(10, 5);
// console.log(finalJuice);

// finalJuice = fruitJuice(20, 16);
// console.log(finalJuice);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function ageCalculator(birthYear){
//     const age = 2021 - birthYear;
//     return age;
// }

// const finalAge = ageCalculator(2001);
// console.log(ageCalculator(2001));
// console.log(finalAge);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Arrow Functions!! [ES6]

// const yearsUntillRetirement = birthYear =>{
//     const age = 2021 - birthYear;
//     const retirementAge = 60 -age;
//     return retirementAge;
// }

// const age1 = yearsUntillRetirement(2001);
// console.log(age1);
//-----------------------------------------------------------------------------------------------------------
// const calculator = initialNumber => {
//     const exponent = initialNumber * initialNumber;
//     const add = initialNumber + exponent;
//     return add;
// }

// const finalAnswer = calculator(456);
// console.log(finalAnswer);
// //-----------------------------------------------------------------------------------------------------------

// // const infoPayment = (firstname, lastname, yearJoined) => {

// //     const salary = (yearJoined *100) + 2000;
// //     return ` The salary of ${firstname} ${lastname} of the upcoming month is calculated to be ${salary}`;
// // }
// //  console.log(infoPayment('Akshat', 'Garg', 2001));
// //  console.log(infoPayment('Deepak', 'Varshney', 2002));
// //  console.log(infoPayment('Akash', 'Saini', 2003));

// //-----------------------------------------------------------------------------------------------------------

//                               // LULLI KATAI KA CODE HAI KATWO KI

// function lulliKatai(lengthOfLulli){
//     const khatna = lengthOfLulli *0.75;
//     return khatna;
// }
//  function child(gender, bhroon){
   

//      if (gender === `hindu`){
//          const hinduMessage = console.log("Good Boy With Full LULLI");
//          return hinduMessage;
//      }
//      else if (gender === `musalman`){
            
//             if(bhroon === `boy`){
//                 const newKhatna = lulliKatai(3);
//                 console.log(`Length of Remaining Lulli is ${newKhatna}`)
//                 return newKhatna;
//             }
//             else{
//                 const Katwi = console.log("Ladkiyo ka khatna nahi hota");
//                 return Katwi;
//             }
    
//      }
//      return bhroon;
//  }
// const finalOutput = child(`musalman`, `boy`);
// console.log(finalOutput);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Resturant Payment System 
// const cutFruitPeices = fruit => {
//     const cutFruit = fruit * 4;
//     return cutFruit;
// }

// const fruitProcessor = (apples, papaya) => {
//     const applePeices = cutFruitPeices(apples);
//     const papayaPeices = cutFruitPeices(papaya);

//     const juice = `The juice consists of ${applePeices} peices of apples and ${papayaPeices} peices of papaya`;
//     return juice;
// }

// console.log(fruitProcessor(10, 16));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                        // CODING CHALLANGE 5

// const dolphin1 = 20;
// const dolphin2 = 20;
// const dolphin3 = 20;
// const koala1 = 20;
// const koala2 = 20;
// const koala3 = 20;

// const calcAvg = () =>{
    
//         const dolphinAvg = (dolphin1 + dolphin2 + dolphin3) / 3;
//         const koalaAvg = (koala1 + koala2 + koala3) / 3;

// }

// const checkWinner = (dolphinAvg, koalaAvg) =>{
 
//         if(dolphinAvg > 2 * koalaAvg){
//             console.log(`Winner is Team Dolphain`);
//         }
//         else if(koalaAvg > 2 * dolphinAvg){
//             console.log(`Winner is Team Koala`);
//         }
//         else{
//             console.log(`No WINNER`);
//         }


// }

// const calcAvg = (a, b, c) => {
//     (a+b+c)/3
// }
// const scoreDolphin = calcAvg(10, 0, 0);
// const scoreKoalas = calcAvg(70, 80, 90);

// const checkWinner = (dolphinAvg, koalaAvg) => {
     
// if(dolphinAvg > 2*koalaAvg){
//     console.log("D wins");
// }
// else if(koalaAvg > 2*dolphinAvg){
//     console.log("k is einner");
// }

// else{
//     console.log("no winner")
// }

// }
// checkWinner(scoreDolphin, scoreKoalas);
// checkWinner(565, 026);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Arrays

//old method to define many names

// const friend1 = "Michael";
// const friend2 = "Akshat";
// const friend3 = "Deepak";
// const friend4 = "Akash";

// const friend = ["Michael", "Akshat", "Deepak", "Akash"];
// const years = new Array(1990, 1991, 1992, 1993);
// console.log(friend[0]);

// console.log(friend.length)
// console.log(friend[friend.length - 3])

// friend[1] = "Sandeep"
// console.log(friend)

// // An array can contain different types of values in a single code block.. Like an array can contain numbers words functions and also an other array also.. This happens because every element of the array expects an function to be executed!

// const lastName = "Garg"
// const jonas = ["Akshat", lastName, 2021-2001, "male", friend, friend.length];
// console.log(jonas)

// const calAge = function(birthYear){
// const age = (2037 - birthYear);
// return age;
// }

// const yearAge = [1990, 1991, 2001, 2005, 2010, 2020];
// const age1 = calAge(yearAge[0]);
// const age3 = calAge(yearAge[1]);
// const age4 = calAge(yearAge[2]);
// const age5 = calAge(yearAge[3]);
// const age2 = calAge(yearAge[yearAge.length - 1]);

// const printArray = [calAge(yearAge[0]), calAge(yearAge[1]), calAge(yearAge[2]), calAge(yearAge[3]), calAge(yearAge[yearAge.length - 1])];

// console.log(printArray);
// printArray.push(57);
// console.log(printArray);
// // console.log(newLength);
// const Array1 = ["Jay","Jackson","Mike","Kick"]
// Array1.unshift('Akshat') // To add elements to the starting
// console.log(Array1)
// console.log(Array1.length)
// Array1.shift() // To remove elements from the starting
// console.log(Array1)

// const findPosition = Array1.indexOf('Jackson') //indexOf tells position of the element in array
// console.log(findPosition)
// //or
// console.log(Array1.indexOf('Mike'))

//-----------------------------------------------------------------------------------------------------------


                                    //Resturant Calculator

const billAmt = [10, 5620, 123, 785, 136, 25];
const calTipAmt = function(billAmt){

for(const i=0;i<6;i++)
{
    if (30 < billAmt[i] && billAmt[i] < 300){
        tipAmt = (billAmt[i]+(0.15* billAmt[i]));
   }
   else
   {
       tipAmt = (billAmt[i]+(0.20* billAmt[i]));
   }
}
return tipAmt;
}
const tipTotal = calTipAmt(billAmt);
console.log(tipTotal);


