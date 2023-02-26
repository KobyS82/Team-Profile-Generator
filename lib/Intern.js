const Employee = require('./Employee');

// Intern constructor
class Intern extends Employee  {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
      }
      
      getSchool() {
        return this.school;
      }
    
      //overriding the getRole() method from Employee
      getRole() {
        return 'Intern';
      }
}

module.exports = Intern;