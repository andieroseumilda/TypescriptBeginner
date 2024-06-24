interface Reportable {
    summary(): string; 
}

const oldToyota = {
    name: 'toyota',
    year: new Date(),
    broken: true,
    summary(): string{
        return `Name: ${this.name}`;
    }
};

const printCar = (item: Reportable): void =>{
    console.log(`${item.summary()}`)
}

printCar(oldToyota);

/*
The TS type System 
-> Help us catch errors during development
-> Uses 'type annotations' to analyze our code
-> Only active during development
-> Doesn't provide any performance optimization
*/