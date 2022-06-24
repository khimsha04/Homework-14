//მასივის შექმნა

let myArr = [2, 3, 4, 5, 6];


//საშუალო არითმეტიკულის გამოთვლა
let myArrSum = myArr[0] + myArr[1] + myArr[2] + myArr[3] + myArr[4];
let myArrLength = myArr.length;

//console.log(myArrLength, "myArrLength");
//console.log(myArrSum," myArrSumm");

let middleNum = myArrSum / myArrLength;

console.log( "middleNum is",middleNum);

//მასივი რომლის თიოთეული ელემენტი არის ობიექტი

let myArr2 = [{ name: "zuka", age: "20" , nickname : "khimsha ", surname: " " , address: " " }];

console.log(myArr2);

//ობიეტქი

let person = {

    firstName :"zuka",
    lastName: "khimsha",
    address: ["kombinati", "chala"],
    age: 20,
    phoneNumbers : [123456789,987654321]

};
console.log(person);

let firstAddress = person.address[0];




// console.log ში გამოიტანეთ სტრინგი "My name is (#3 დავალების firstName  მნიშვნელობა)"
//, My age is(#3 დავალების age - ის მნიშვნელობა)",
//"My address is(#3 დავალების address - ის პირველი ელემენტის მნიშვნელობა)"

let text = ` My name is ${person.firstName},My age is ${person.age},My address is ${firstAddress} `;

console.log(text);

