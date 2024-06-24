const drink = {
    color: 'brown',
    carbonated: true,
    sugar:40
};
// Type alias - you can use in csv file
type Drink = [string, boolean, number];


const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 10];


const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower: 400,
    weight: 3354
};