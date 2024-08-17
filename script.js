// String |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// TASK 1 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/*
uzunligi kamida 3 bo'ladi.
middleThree("Candy") â†’ "and"
middleThree("and") â†’ "and"
middleThree("solving") â†’ "lvi"
-------------------------------------------------*/

// let a = 'Candy';

// const pickTheMiddleThree = (a) => {
//     let result = '';
//     let stp = Math.floor(a.length / 2 - 1);
//     for (let i = stp; i < stp + 3; i++) {
//         result += a[i];
//     }
//     return result;
// }
// console.log(pickTheMiddleThree(a));









// TASK 2 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/*
lastChars("last", "chars") â†’ "ls"
lastChars("yo", "java") â†’ "ya"
lastChars("hi", "") â†’ "h@"
-------------------------------------------------*/

// let a = 'last';
// let b = 'chars';

// if (a === '') {
//     a = '@';
// }
// if (b === '') {
//     b = '@';
// }

// let newStr = a[0] + b[b.length - 1];
// console.log(newStr);









// TASK 3 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/*
red yoki blue ranglarni topish
seeColor("redxx") â†’ "red"
seeColor("xxred") â†’ ""
seeColor("blueTimes") â†’ "blue"
-------------------------------------------------*/

// let a = "xxbluexx";

// const findTheColor = (a) => {
//   let result = "No Color Found";
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === "r" && a[i + 1] == "e" && a[i + 2] == "d") {
//       result = a[i] + a[i + 1] + a[i + 2];
//     } else if (a[i] === 'b' && a[i + 1] === 'l' && a[i + 2] == 'u' && a[i + 3] == 'e'){
//         result = a[i] + a[i + 1] + a[i + 2] + a[i + 3];
//     }
//   }
//   return result;
// };

// console.log(findTheColor(a));









// TASK 4 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/*
satir boshidagi 2 ta harifni 3 marrta chiqarish
extraFront("Hello") â†’ "HeHeHe"
extraFront("ab") â†’ "ababab"
extraFront("H") â†’ "HHH"
*/

// Using repeat method and a for-in
// let a = "Hello";

// const repeatTheFirstTwoLetters = (a) => {
//   let repeated;
//   for (i in a) {
//     if (a.length > 1) {
//       repeated = (a[0] + a[1]).repeat(3);
//     } else{
//         repeated = a[0].repeat(3);
//     }
//   }
//   return repeated;
// };
// console.log(repeatTheFirstTwoLetters(a));




// Using for-classic without method (repeat)

// let a = "Hello";

// const repeatTheFirstTwoLetters = () => {
//   let repeated = "";
//   for (let i = 0; i < 3; i++) {
//     if (a.length > 1) {
//       repeated += a[0] + a[1];
//     } else {
//       repeated += a[0];
//     }
//   }
//   return repeated;
// }

// console.log(repeatTheFirstTwoLetters(a));



















// Objects ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// TASK 1 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 1. constructor function da user shakillantirish ism yosh va qolgan malumotlar bo'lish kerak va enga kamida 
// 2 ta method bo'lishi kerak 


// function User(name, age, country, program, fname, fage, fNationality, fFieldOfStudy) {
//   this.name = name;
//   this.age = age,
//     this.nationality = country,
//     this.fieldOfStudy = program,

//     this.greet = function () {
//       return `My name is ${this.name}, ${this.age} years old student from ${this.nationality} studying in the field of ${this.fieldOfStudy}.`;
//     };
//   this.friends = {
//     fname: fname,
//     fage: fage,
//     fNationality: fNationality,
//     fFieldOfStudy: fFieldOfStudy,

//     fGreet: greet = function () {
//       return `My name is ${this.fname}, ${this.fage} years old student from ${this.fNationality} studying in the field of ${this.fFieldOfStudy}.`
//     }
//   }
// }

// const user1 = new User('Abdulaziz', 18, 'Uzbekistan', 'Computer Science', 'Muhammadjon', 18, 'Uzbekistan',
//   'Accounting & Business');

// console.log(user1.greet());
// console.log(user1.friends.fGreet());


// (this.) cannot leave out its own object scope if he cannot find the object key name given.
// But if do not put (this.) in front of object key and it can leave out to other objects and take their value









// TASK 2 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 2. user shakillantirish qancha user yaratilishi so'raladi va uni qiymatlari niham kiritishi kerak misol ism yosh location 



// const getTheUserInfo = () => {
//   let userCount = +prompt('How many users do you want to build up ?');
//   let userName;
//   let userAge;
//   let userId;
//   let arr = [];
//   let count = 1;
//   for (let i = 0; i < userCount; i++) {
//     let obj = {};
//     userName = prompt(`Enter the user${count} name:`);
//     obj.name = userName;
//     userAge = prompt(`Enter the user${count} age`);
//     obj.age = userAge;
//     userId = prompt(`Enter user${count} ID number`);
//     obj.id = userId;
//     arr.push(obj);
//     count++;
//   }
//   return arr;
// }

// console.log(getTheUserInfo());









// TASK 3 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 3. function yozing va arrey ichidagi user lar maoshini hisoblovchi algaritm yozing

// This function finds the total monthly salary of all the three employees given;
// const findTheMonthlySalary = () => {
//     let monthlySalary = 0;
//     let employeeInfo = [
//         { name: 'Jude', age: 20, dailySalary: 500, nationality: 'England'},
//         { name: 'Mbappe', age: 25, dailySalary: 700, nationality: 'France'},
//         { name:  'Vini', age: 24, dailySalary: 600, nationality: 'Brasil'},
//     ];
//     for (let i = 0; i < employeeInfo.length; i++){
//         monthlySalary += employeeInfo[i].dailySalary * 30; // employeeInfo[i].dailySalary == 500, 700, 600
//     }
//     return monthlySalary;
// }

// console.log(findTheMonthlySalary());









// TASK 4 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 2 ta object ni solishtirib ko'ring yani ichidagi qiymatlari bo'lsa true yoki false va bu key ga nisbatan tekshiriladi 

// const findTheKeys = () => {
//     let obj1 = {
//         name: 'Abdulaziz',
//         age: 18,
//         nationality: 'Uzbekistan'
//     };

//     let obj2 = {
//         name: 'Abdulaziz',
//         age: 18,
//         nationality: 'Uzbekistan'
//     }

//     keys1 = Object.keys(obj1); // Object.keys bu yerda ikkita objectni keylarini arrayga joylab beradi;
//     keys2 = Object.keys(obj2); // ya'ni [name, age, nationality] 

//     if (keys1.length == keys2.length){
//         result =  true;
//     } else {
//         result = false;
//     }
//     return result;
// }

// console.log(findTheKeys());