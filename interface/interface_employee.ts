interface Employee {
    // name: string;
    // year: Date;
    // broken: boolean;
    summary(): string; 
}

const staff = {
    name: 'Marivic',
    year: new Date(),
    new: true,
    summary(): string{
        return `Name: ${this.name}`;
    }
};

const employee = (summary: Employee): void =>{
    console.log(`Summary: ${summary.summary()}`)
}

employee(staff);