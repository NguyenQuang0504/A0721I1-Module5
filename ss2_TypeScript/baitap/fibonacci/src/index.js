"use strict";
exports.__esModule = true;
function fibonacci(count) {
    var a = 1;
    var b = 2;
    var c;
    var array = [];
    array.push(a);
    array.push(b);
    for (var i = 3; i <= count; i++) {
        c = a + b;
        array.push(c);
        a = b;
        b = c;
    }
    return array;
}
var sum = 0;
var array = fibonacci(10);
for (var i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log("Cac so fibonacci la " + array);
console.log("tong cua 10 so fibonacci dau tien la" + sum);
