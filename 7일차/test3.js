//스프레드 연산자 .....es6

let arr = [10,20,30];
let nArr = [...arr, 40,50,60] // ... 세 개 기입
console.log(nArr);


function func(...rest) {
    console.log(rest);
}
func(1,2,3,4,5);


function func2(a, ...aaa) {
    console.log(a);
    console.log(aaa);
}
func2(1,2,3,4,5);
