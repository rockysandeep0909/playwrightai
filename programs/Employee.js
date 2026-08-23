class Employee {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    work() {
        console.log(this.name + " is working");
    }
}

const emp1 = new Employee("Sandeep", 3300000);
const emp2 = new Employee("John", 2500000);

emp1.work();
emp2.work();