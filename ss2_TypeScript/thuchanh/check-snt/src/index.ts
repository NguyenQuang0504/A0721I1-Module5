// Tim cac so nguyen to va tinh tong cac so nguyen to
// Function kiem tra so nguyen to
function check(number: number) :boolean {
    let status:boolean=true;
    if (number<2){
        status = false;
    }
    else if(number>2){
        for (let i:number =2;i<=Math.sqrt(number);i++){
            if (number%i==0){
                status = false;
                break;
            }
        }
    }
    return status;
}
let array:Array<number> =[1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
let total:number = 0;
for (let number of array) {
    if (check(number)) {
        total += number;
    }
}
console.log(total);