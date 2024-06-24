interface Reportable2 {
    summary(): string; 
}

const oldCivic4 = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string{
        return `Name: ${this.name}`;
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}

const printSummary = (item: Reportable2): void =>{
    console.log(`${item.summary()}`)
}


printSummary(oldCivic4);
printSummary(drink);

/*
The TS type System 
-> Help us catch errors during development
-> Uses 'type annotations' to analyze our code
-> Only active during development
-> Doesn't provide any performance optimization
*/