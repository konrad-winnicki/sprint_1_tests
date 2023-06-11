/*Refès els exercicis Promises i Callbacks N2 E1 i Promises i Callbacks 
N2 E2 (getEmployee() i getSalary()) de manera que accedeixin a les dades 
d'un fitxer extern JSON. Crea tests que demostrin la correcta execució de 
l'exercici fent un mock del fitxer JSON.*/

const fs = require("fs");

function readFile(directory, fileName) {
  const totalPath = directory + fileName;
  try {
    return fs.readFileSync(totalPath, "utf-8");
  } catch (err) {
    throw err;
  }
}

function getEmployee(id, directory, fileName, readFileCallback) {
  try {
    const data = JSON.parse(readFileCallback(directory, fileName));

    return new Promise(function (resolved, rejected) {
      try {
        data.forEach((employee) => {
          if (employee.id === undefined || isNaN(id)) {
            rejected(new Error("I can not process this data"));
          }
          if (employee.id === id) {
            resolved(employee);
          }
        });

        rejected(new Error("No such employee"));
      } catch (err) {
        rejected(new Error("I can not process this data"));
      }
    });
  } catch (err) {
    throw err;
  }
}

function getSalary(employee, directory, fileName, readFileCallback) {
  try {
    const data = JSON.parse(readFileCallback(directory, fileName));

    return new Promise(function (resolved, rejected) {
      try {
        data.forEach((salary) => {
          if (salary.id === undefined || employee.id === undefined) {
            rejected(new Error("I can not process this data"));
          }
          if (salary.id === employee.id) {
            resolved(salary.salary);
          }
        });

        rejected(new Error("Salary not asignated"));
      } catch (err) {
        rejected(new Error("I can not process this data"));
      }
    });
  } catch (err) {
    throw err;
  }
}

module.exports = { getEmployee, getSalary, readFile };
