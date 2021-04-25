const Employee = requires('./Employee');
const fs = require('fs');
const util = require('util');

const InternQuestions = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the interns name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'what is the interns id number?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is the interns email address?',
        },
        {
          type: 'input',
          name: 'office',
          message: 'What is the interns office number?',
        },
        {
          type: 'list',
          name: 'role',
          message: 'What is the next individuals role?',
          choices: ['Manager', 'Engineer', 'Intern', 'exit'],
        },
    ]);

    if (list === 'Manager') {require('./manager')}
      else if (list === 'Engineer') {require('./engineer')}
        else if (list === 'Intern') {require('./intern')}
          else return;

};



class Intern extends Employee {
    constructor(role, name, id, email, school) {
    super(role, name, id, email, school);
    this.role = role;
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    }
}

getRole();
getName();
getId();
getEmail();
getSchool();

const intern = new Intern(role, name, id, email, school);

module.exports = Employee;