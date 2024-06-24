class Pet{
    name:string;

    constructor(name:string){
        this.name = name    
        console.log(this.name)
    }

    getName(){
        return this.name;
    }
}
class Vehicles{
    driver: string;  //class variable
    plateNumber: string;
    
    constructor(driver: string, plateNumber: string) {  //parameter ng constructor
        this.driver = driver;
        this.plateNumber = plateNumber; 
    }

    drive(): void {
        console.log('Driver name:', this.driver);
        console.log('Plate Number:', this.plateNumber);
    }
    honk(): void{
        console.log('beep')
    }
}
class ECar extends Vehicles{
    
    drive(): void {
        console.log('Driver name:', this.driver);
        console.log('Driving using battery');
    }
}
class FuelCar extends Vehicles{
    // drive(driver: string): void {
    //     console.log('Driver name:', driver);
    //     console.log('Driving using fuel');
    // }
}
const ecar: ECar = new ECar('Rose', 'abc123');
const v1: Vehicles = new Vehicles('Andie', 'QWERTY1');
// v1.drive();
// ecar.drive();

const pet1: Pet = new Pet('Yuki');
const pet2: Pet = pet1;

console.log(pet2.getName());
console.log(pet1.getName());

