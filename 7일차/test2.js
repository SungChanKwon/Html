//구조 분해 할당.

let arr = [10, 20, 30];

let a = arr[0];
let b = arr[1];
let c = arr[2];
console.log(a,b,c);

let[d,e,f] = arr;
console.log(d,e,f);

function test(narr) {
    console.log("narr : " + narr[0], narr[1], narr[2]);
}
test(arr);

function test2(narr) {
    console.log("narr : " + a,b,c);
}
test2(arr);