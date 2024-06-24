interface Reportable {
    summary(): string; 
}

const oldCivic3 = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string{
        return `Name: ${this.name}`;
    }
};

const printVehicle3 = (item: Reportable): void =>{
    console.log(`${item.summary()}`)
}

printVehicle3(oldCivic3);

/*
The TS type System 
-> Help us catch errors during development
-> Uses 'type annotations' to analyze our code
-> Only active during development
-> Doesn't provide any performance optimization
*/