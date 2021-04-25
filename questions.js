module.exports = {
  firstQuestion: {
    type: "list",
    name: "role",
    message: "What is type of employee would you like to add?",
    choices: ["Manager", "Engineer", "Intern"],
  },

  managerQuestions: [
    {
      type: "input",
      name: "name",
      message: "What is the managers name?",
    },
    {
      type: "input",
      name: "id",
      message: "what is the managers id number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the managers email address?",
    },
    {
      type: "input",
      name: "office",
      message: "What is the managers office number?",
    },
  ],

  //module.exports = require("managerQuestions");

  // .then((orange => {
  //   employee.push(
  //     new this.managerQuestions(
  //       orange.Name,
  //       orange.Id,
  //       orange.Email,
  //       orange.Office
  //     )
  //   );
  //   console.log(employee);
  //   managerQuestions();
  // });

  engineerQuestions: [
    {
      type: "input",
      name: "name",
      message: "What is the Engineers name?",
    },
    {
      type: "input",
      name: "id",
      message: "what is the engineers id number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineers email address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the eigneers github?",
    },
  ],

  // .then((orange => {
  //   employee.push(
  //     new this.managerQuestions(
  //       orange.Name,
  //       orange.Id,
  //       orange.Email,
  //       orange.GitHub
  //     )
  //   );
  //   console.log(team);
  //   managerQuestions();
  // });

  internQuestions: [
    {
      type: "input",
      name: "name",
      message: "What is the interns name?",
    },
    {
      type: "input",
      name: "id",
      message: "what is the interns id number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the interns email address?",
    },
    {
      type: "input",
      name: "office",
      message: "What is the interns office number?",
    },
  ],

  // .then((orange => {
  //   employee.push(
  //     new this.managerQuestions(
  //       orange.Name,
  //       orange.Id,
  //       orange.Email,
  //       orange.Office
  //     )
  //   );
  //   console.log(team);
  //   managerQuestions();
  // });

  endQuestion: {
    type: "list",
    name: "end",
    message: "Would you like to add another employee?",
    choices: ["Yes", "No"],
  },
};
//generateHTML;
