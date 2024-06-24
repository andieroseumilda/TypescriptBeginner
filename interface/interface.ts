interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

//if we did not use the interface
//const printVehicle = (vehicle: {name: string; year: number; broken:boolean}): void =>{
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken: ${vehicle.broken}`);
//}
const printVehicle = (vehicle: Vehicle): void =>{
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
}

// printVehicle(oldCivic);

/*
Interfaces 
-> creates a new type, describing the property names and values of an object

*/