import {finished} from "stream";
// function tra ve cac so fibonacci dau tien
function  fibonacci(count:number) {
    let a:number =1;
    let b:number =2;
    let c:number;
    let array:Array<number>=[];
    array.push(a);
    array.push(b);
    for (let i:number=3;i<=count;i++){
        c=a+b;
        array.push(c);
        a=b;
        b=c;
    }
    return array;
}
let sum:number=0;
let array:Array<number> = fibonacci(10);
for (let i:number=0;i<array.length;i++){
   sum += array[i];
}
console.log("Cac so fibonacci la " +array);
console.log("tong cua 10 so fibonacci dau tien la " +sum);