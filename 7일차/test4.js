//콜백함수

let f = function() {
    console.log("1번");
}

setTimeout(
    f,1000
);
console.log("-----------------") //출력 순서 1. "--------"        2."1번" 

function double(num) {
    setTimeout(
        function() {
            const doubleNum = num*2;
            console.log(doubleNum);
        }, 1000
    )
}

double(10);
