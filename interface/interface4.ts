interface Reports {
    summary(): string; 
}

const oldSedan = {
    name: 'sedan',
    year: new Date(),
    broken: true,
    summary(): string{
        return `Name: ${this.name}`;
    }
};

const drinks = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}

const printSummary = (item: Reports): void =>{
    console.log(`${item.summary()}`)
}


printSummary(oldSedan);
printSummary(drinks);

/*
The TS type System 
-> Help us catch errors during development
-> Uses 'type annotations' to analyze our code
-> Only active during development
-> Doesn't provide any performance optimization
*/