const Employee = require('./Employee');
const fs = require('fs');
const util = require('util');

const EngineerQuestions = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the Engineers name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'what is the engineers id number?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is the engineers email address?',
        },
        {
          type: 'input',
          name: 'github',
          message: 'What is the eigneers github?',
        },
        {
          type: 'list',
          name: 'role',
          message: 'What is the next individuals role?',
          choices: ['Manager', 'Engineer', 'Intern', 'exit'],
        },
      
    
    ]).then(answers => console.log(answers));

    if (list === 'Manager') {require('./manager')}
      else if (list === 'Engineer') {require('./engineer')}
        else if (list === 'Intern') {require('./intern')}
          else return;

};



class Engineer extends Employee {
    constructor(role, name, id, email, github) {
    super(role, name, id, email, github);
    this.role = role;
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    }    
}

getRole();
getName();
getId();
getEmail();
getGitHub();

const engineer = new Engineer(role, name, id, email, github);

module.exports = Employee;