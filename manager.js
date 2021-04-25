//module.exports = {
// managerQuestions: [
//   {
//     type: "input",
//     name: "name",
//     message: "What is the managers name?",
//   },
//   {
//     type: "input",
//     name: "id",
//     message: "what is the managers id number?",
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "What is the managers email address?",
//   },
//   {
//     type: "input",
//     name: "office",
//     message: "What is the managers office number?",
//   },
//   {
//     type: "list",
//     name: "role",
//     message: "What is the next individuals role?",
//     choices: ["Manager", "Engineer", "Intern", "exit"],
//   },
// ],
//};

//module.exports = {

class Manager extends Employee {
  constructor(role, name, id, email, office) {
    super(role, name, id, email, office);
    this.role = role;
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
  }
}

//};

getRole();
getName();
getId();
getEmail();
getOffice();

const manager = new Manager(role, name, id, email, office);

module.exports = Employee;
