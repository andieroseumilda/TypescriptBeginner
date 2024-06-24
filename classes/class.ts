class Vehicle{
    drive(): void {
        console.log('Sample')
    }
    honk(): void{
        console.log('beep')
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();