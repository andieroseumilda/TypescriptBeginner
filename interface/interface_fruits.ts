interface Fruits {
    name: string;
    year: number;
    fresh: boolean;
}

const Citrus = {
    name: 'lemon',
    year: 1,
    fresh: true
};

const Fruits = (fruit: Fruits): void =>{
    console.log(`Name: ${fruit.name}`);
    console.log(`Year: ${fruit.year}`);
    console.log(`Broken: ${fruit.fresh}`);
}

// printVehicle(oldCivic);

/*
Interfaces 
-> creates a new type, describing the property names and values of an object
*/