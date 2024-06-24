const apples:number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch:null = null;
let nothing:undefined = undefined;

//built in objects
let now:Date = new Date();

//Array
let color:string[] = ['red','green', 'blue'];
let myNumbers: number[] = [1,2,3]
let truths: boolean[] = [true, true, false];

//Classes
class Car {

}
let car:Car = new Car();

// Object literal
let point: {x:number; y:number} = {
    x:10,
    y:10
}

// Function
const logNumber: (i:number)=> void = (i:number)=>{
    console.log(i)
}


// 3) Variable whose type cannot be inferred correctly
let numbers  = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for(let i = 0; i<numbers.length; i++){
    if (numbers[i]>0){
        numberAboveZero = numbers[i];
    }
}

//labeling functions to variables

