interface Vehicle2 {
    // name: string;
    // year: Date;
    // broken: boolean;
    summary(): string; 
}

const oldCiviv2 = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string{
        return `Name: ${this.name}`;
    }
};

//if we did not use the interface
//const printVehicle = (vehicle: {name: string; year: number; broken:boolean}): void =>{
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken: ${vehicle.broken}`);
//}
const printVehicle1 = (vehicle: Vehicle2): void =>{
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken: ${vehicle.broken}`);
    console.log(`Summary: ${vehicle.summary()}`)
}

printVehicle1(oldCiviv2);