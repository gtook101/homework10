const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const {
  firstQuestion,
  managerQuestions,
  engineerQuestions,
  internQuestions,
  endQuestion,
} = require("./questions.js");
// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const firstQuestionFunc = () => {
  inquirer.prompt(firstQuestion).then((answer) => {
    if (answer.role === "Manager") {
      //fire the ask manager questions
      managerQuestionsFunc();
    } else if (answer.role === "Engineer") {
      //fire the ask engineer questions
      engineerQuestionsFunc();
    } else if (answer.role === "Intern") {
      //fire the ask intern questions
      internQuestionsFunc();
    }
  });
};

firstQuestionFunc();

function managerQuestionsFunc() {
  inquirer.prompt(managerQuestions).then((answers) => {
    console.log(answers);
    endQuestionFunc();
  });
}

function engineerQuestionsFunc() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    console.log(answers);
    endQuestionFunc();
  });
}

function internQuestionsFunc() {
  inquirer.prompt(internQuestions).then((answers) => {
    console.log(answers);
    endQuestionFunc();
    // class Intern extends Employee {
    //   constructor(role, name, id, email, school) {
    //     super(role, name, id, email, school);
    //     this.role = role;
    //     this.name = name;
    //     this.id = id;
    //     this.email = email;
    //     this.school = school;
    //   }
    // }

    // getRole();
    // getName();
    // getId();
    // getEmail();
    // getSchool();

    // const intern = new Intern(role, name, id, email, school);

    // module.exports = Employee;
  });
  // class Intern extends Employee {
  //   constructor(role, name, id, email, school) {
  //     super(role, name, id, email, school);
  //     this.role = role;
  //     this.name = name;
  //     this.id = id;
  //     this.email = email;
  //     this.school = school;
  //   }
  // }

  // getRole();
  // getName();
  // getId();
  // getEmail();
  // getSchool();

  // const intern = new Intern(role, name, id, email, school);

  // module.exports = Employee;
}
// class Intern extends Employee {
//   constructor(role, name, id, email, school) {
//     super(role, name, id, email, school);
//     this.role = role;
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.school = school;
//   }
// }

// getRole();
// getName();
// getId();
// getEmail();
// getSchool();

// const intern = new Intern(role, name, id, email, school);

// module.exports = Employee;
// const endQuestionFunc = () => {
//   inquirer.prompt(endQuestion).then((answer) => {
// if (answer.end === "Yes") {
// fire the ask manager questions
// firstQuestionFunc();
// } else {
// fire the ask engineer questions
// generateHTML();
// }
//   });
// };

function endQuestionFunc() {
  inquirer.prompt(endQuestion).then((answers) => {
    if (answers.end === "Yes") {
      firstQuestionFunc();
    } else if (answers.end === "No") {
      generateHTML();
    }
  });
}

const generateHTML = (answers) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>My Team</h1>
  </div>
  <div class="jumbotron jumbotron-fluid">
  <div class="container2">
  <div class="row">
  <div class="column">
    <div class="card">
      // <h3>Hello World</h3>
      <h3>${answers.name}</h3>
      <p>${answers.id}</p>
      <p>${answers.email}</p>
      <p>${answers.office}</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>${answers.role}</h3>
      <h3>${answers.name}</h3>
      <p>${answers.id}</p>
      <p>${answers.email}</p>
      <p>${answers.github}</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>${answers.role}</h3>
      <h3>${answers.name}</h3>
      <p>${answers.id}</p>
      <p>${answers.email}</p>
      <p>${answers.github}</p>
    </div>
  </div>

</div>

<div class="row">
  <div class="column">
    <div class="card">
      <h3>${answers.role}</h3>
      <h3>${answers.name}</h3>
      <p>${answers.id}</p>
      <p>${answers.email}</p>
      <p>${answers.school}</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>${answers.role}</h3>
      <h3>${answers.name}</h3>
      <p>${answers.id}</p>
      <p>${answers.email}</p>
      <p>${answers.school}</p>
    </div>

  </div>
</div>
</body>
</html>`;
};
