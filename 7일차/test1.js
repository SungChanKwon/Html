//객체
// let studentScore = {
//     koreaScore: 90,
//     englishScore: 80,
//     mathScore: 99
// }

// console.log(studentScore.koreaScore)
// console.log(studentScore.englishScore)
// console.log(studentScore.mathScore)
// console.log(studentScore['englishScore'])

// let a = 10;
// let b = "10";

// console.log(typeof a);
// console.log(typeof b);
// console.log(a == b);
// console.log(a === b);

// console.log(String(a) + b);
// console.log(a + Number(b));

// let c = [10, 20, 30, 40, "kor", "eng"];

// for (let a in c)
//     console.log(a);

// let d = {
//     a: 10,
//     b: 20,
//     c: 30
// };

//  for(let a in d)
//     console.log(d[a]);

// function fun1(a) {
//     console.log("-------------------")
// }

function fun1(n){
    for(let i=0; i<n; i++)
    console.log(i);
}

// fun1(3);

//함수 표현식
let funct = function func2(n){
    for(let i=0; i<n; i++)
    console.log(i*2);
}

// funct(3);

let funct2 = function(n){ //익명함수
    let sum = 0;
    for(let i=0; i<n; i++)
    sum += 1;
    return sum;
}

// let total = funct2(5);
// console.log("합 : " + total);

let funct3 = (n) => { //익명함수
    let sum = 0;
    for(let i=0; i<n; i++)
    sum += 1;
    return sum;
}

// let total = funct3(100);
// console.log("합 : " + total);

// let f = () => console.log("++++++++++")

// f();

// let f2 = () =>
//     console.log("----------------");
// f2();

function sum(a,b) {  // 즉시 실행 함수 사용하기
    console.log(a+b)
}

sum(10,20);

(function sum(a,b) {
    console.log(a+b)
})(10,200);

const person = {
    name : {firstName:"길동", lastName:"홍"},
    age : 29,
    address : "경기도"
};

// console.log(person.name.firstName);
// console.log(person.name['firstName']);

person.gender = "남";

person.age = 59
person.name.lastName = "김";

delete person.gender;
delete person.name;

console.log(person)

let test = [10,20,30,40,50];

console.log(test);
test.unshift(60);
console.log(test);

test.shift();
console.log(test);
