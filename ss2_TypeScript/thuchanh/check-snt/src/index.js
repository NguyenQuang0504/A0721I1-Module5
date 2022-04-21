// Tim cac so nguyen to va tinh tong cac so nguyen to
// Function kiem tra so nguyen to
function check(number) {
    var status = true;
    if (number < 2) {
        status = false;
    }
    else if (number > 2) {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                status = false;
                break;
            }
        }
    }
    return status;
}
var array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
var total = 0;
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var number = array_1[_i];
    if (check(number)) {
        total += number;
    }
}
console.log(total);
