const Employee = require('./Employee');

// Manager constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
      }
      
      getOfficeNum() {
        return this.officeNumber;
      }
    
      //overriding the getRole() method from Employee
      getRole() {
        return 'Manager';
      }
};

module.exports = Manager;