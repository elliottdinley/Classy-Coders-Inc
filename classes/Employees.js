class Employees {
    static allEmployees = [];
    #salary;
    #isHired;

    // Performance Metrics
    #salesNumbers;
    #projectCompletionRate;
    #employeeRetentionRate;

    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true;

        Employees.allEmployees.push(this);

        // Performance Metrics
        this.#salesNumbers = 0;
        this.#projectCompletionRate = 0;
        this.#employeeRetentionRate = 0;
    }

    getSalary() {
        return this.#salary;
    }
    setSalary(amount) {
        // Error Handling
        if (amount < 0) {
            throw new Error("Salary cannot be negative")
        }

        this.#salary = amount
    }

    getStatus() {
        return this.#isHired;
    }
    setStatus(command) {
        this.#isHired = (command === "hire");
    }

    static getEmployees() {
        return Employees.allEmployees;
    }

    static getTotalPayroll() {
        return Employees.allEmployees.reduce((acc, val) => acc + val.getSalary(), 0)
    }

    // Promotions
    promote(title, salary) {
        this.position = title;
        this.#salary = salary;
    }

    // Performance Metrics
    setSalesNumbers(numbers) {
        this.#salesNumbers = numbers;
    }
    getSalesNumbers() {
        return this.#salesNumbers;
    }

    setProjectCompletionRate(rate) {
        this.#projectCompletionRate = rate;
    }
    getProjectCompletionRate() {
        return this.#projectCompletionRate;
    }

    setEmployeeRetentionRate(rate) {
        this.#employeeRetentionRate = rate;
    }
    getEmployeeRetentionRate() {
        return this.#employeeRetentionRate;
    }

    calculatePerformanceScore() {
        if (this.position === "Salesperson") {
            return this.#salesNumbers * 0.1;
        } else if (this.position === "Software Engineer") {
            return this.#projectCompletionRate * 0.2;
        } else if (this.position === "Manager") {
            return this.#employeeRetentionRate * 0.3;
        }
        return 0;
    }

    determineBonusesAndPromotions() {
        const performanceScore = this.calculatePerformanceScore();

        if (performanceScore > 50) {
            console.log(`${this.name} is eligible for a bonus or promotion.`);
        } else {
            console.log(`${this.name} does not meet the criteria for a bonus or promotion.`);
        }
    }
}

module.exports = {
    Employees,
}