const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, schoo;) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern