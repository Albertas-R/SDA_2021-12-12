// PIRMA UŽDUOTIS

//function sum
//function mult
//function minus

//function b

// var a = b(7, 10, sum); //17
// var c = b(7, 10, mult); //70
// var d = b(7, 10, minus); //3

// function sum(a, b) {
//   return a + b;
// }

// function mult(a, b) {
//   return a * b;
// }

// function minus(a, b) {
//   return a - b;
// }

// function b(a, b, callback) {
//   return callback(a, b);
// }

// console.log(a);
// console.log(c);
// console.log(d);

// ANTRA UŽDUOTIS

// var a = b(7, 10, function (a, b) {
//   return a + b;
// });
// //17

// var c = b(7, 10, function (a, b) {
//   return a * b;
// });
// //70

// var d = b(7, 10, function (a, b) {
//   if (b > a) {
//     return b - a;
//   }
//   return a - b;
// });
// //3

// function b(a, b, callback) {
//   return callback(a, b);
// }

// console.log(a);
// console.log(c);
// console.log(d);

// TREČIA UŽDUOTIS

// var countFactory = function () {
//   var counter = 0;
//   return function () {
//     return (counter += 1);
//   };
// };

// var count = countFactory();
// var anotherCount = countFactory();

// var count1 = count();
// console.log(count1);

// var count2 = anotherCount();
// console.log(count2);

// var count3 = count();
// console.log(count3);

// KETVIRTA UŽDUOTIS

// var countFactory = function (x) {
//   var counter = 0;
//   return function () {
//     return (counter += x);
//   };
// };

// var count = countFactory(10);
// var anotherCount = countFactory();

// var count1 = count();
// console.log(count1);

// var count2 = anotherCount();
// console.log(count2);

// var count3 = count();
// console.log(count3);

// PENKTA UŽDUOTIS

// var accountFactory = function () {
//   var balance = 0;
//   return function (x) {
//     return (balance += x);
//   };
// };

// var addToAccount = accountFactory();
// console.log(accountFactory);
// console.log(addToAccount);

// var count1 = addToAccount(10);
// console.log(count1);

// var count3 = addToAccount(5);
// console.log(count3); // 15

// 2021-12-13

// var person = {
//   firstName: "Petras",
//   lastName: "Petraitis",
//   age: 25,
// };
// var x = 30;

// function change(person, newAge) {
//   person.age = newAge;
//   newAge = 0;
// }

// function change(person, newAge) {
//   newAge = 0;
//   person.age = newAge;
// }

// function change(person, newAge) {
//   person.age = newAge;
//   newAge = x;
//   // x = x - 1;
//   // x -= 1;
//   x--;
// }

// change(person, x);
// console.log(person);
// console.log(x);

// 2 užduotis

// var obj = { name: "pencil", price: 10 };
// var x = 15;

// function change(product, newPrice) {
//   product.price = newPrice;
// }

// function cloneWithNewPrice(product, newPrice) {
//   var newObj = {};
//   newObj.name = product.name;
//   newObj.price = newPrice;
//   return newObj;

//   // return {
//   //   name: product.name,
//   //   price: newPrice,
//   // };
// }

// var clonedObject = cloneWithNewPrice(obj, x);

// console.log(obj);
// console.log(clonedObject);

// 3 užduotis

// var obj = { name: "pencil", price: 10 };
// var x = 15;
// var arr = [1, 2, 3, 4];
// arr.push(5);
// // for (var i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// function cloneArrayWithNewValue(arrayToClone, newValue) {
//   var newArr = [];
//   for (var i = 0; i < arrayToClone.length; i++) {
//     var currentElement = arrayToClone[i];
//     newArr.push(currentElement);
//   }
//   newArr.push(newValue);
//   return newArr;
// }

// var newArray = cloneArrayWithNewValue(arr, 7);
// console.log(arr);
// console.log(newArray);

// 4 užduotis

var arr = [1, 2, 3, 4];

function cloneArrayWithNewValue(arrayToClone, newValue) {
  var newArray = [];
  for (var i = 0; i < arrayToClone.length; i++) {
    var currentElement = arrayToClone[i];
    newArray.push(currentElement);
  }
  newArray.push(newValue);
  return newArray;
}

function cloneArrayWithModifiedValues(arrayToClone, callback) {
  var newArray2 = [];
  for (var i = 0; i < arrayToClone.length; i++) {
    var currentElement2 = arrayToClone[i];
    newArray2.push(callback(currentElement2));
  }
  return newArray2;
}

var add4 = function (a) {
  return a + 4;
};

var newArray = cloneArrayWithModifiedValues(arr, add4);
console.log(arr); // [1,2,3,4]
console.log(newArray); // [5,6,7,8]

var arr2 = cloneArrayWithModifiedValues([10, 20], add4);
console.log(arr2); //[14,24]
