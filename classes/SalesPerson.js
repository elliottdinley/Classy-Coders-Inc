const { Employees } = require("./Employees.js");

class SalesPerson extends Employees {
    #totalSales;

    constructor(name, position, salary, clients) {
        super(name, position, salary);
        this.clients = clients;
        this.#totalSales = 0;
    }

    getSalesNumber() {
        return this.#totalSales;
    }
    makeSale(amount) {
        this.#totalSales += amount;
    }

    // Search
    findClient(client) {
        return this.clients.includes(client);
    }

}

module.exports = {
    SalesPerson,
}