/*Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o 
més operands. Testeja la correcta execució d'aquestes funcions.*/


/*****MATH FUNCTIONS*****/


function sum(...args) {
  if (args.length < 2) {
    throw new Error("Minimum two arguments");
  }
  return args.reduce((total, currentValue) => {
    if (isNaN(currentValue)) {
      throw new Error("One of the argument is not a number");
    }
    return total + currentValue;
  });
}

function subtract(...args) {
  if (args.length < 2) {
    throw new Error("Minimum two arguments");
  }
  return args.reduce((total, currentValue) => {
    if (isNaN(currentValue)) {
      throw new Error("One of the argument is not a number");
    }
    return total - currentValue;
  });
}

function divide(...args) {
  if (args.length < 2) {
    throw new Error("Minimum two arguments");
  }

  return args.reduce((total, currentValue, currentIndex) => {
    if (isNaN(currentValue)) {
      throw new Error("One of the argument is not a number");
    }
    if (currentIndex > 0 && currentValue === 0) {
      throw new Error("You can not divide by 0");
    }
    return total / currentValue;
  });
}

function multiply(...args) {
  if (args.length < 2) {
    throw new Error("Minimum two arguments");
  }

  return args.reduce((total, currentValue) => {
    if (isNaN(currentValue)) {
      throw new Error("One of the argument is not a number");
    }
    return total * currentValue;
  });
}

/*****Entrance 1.3 N1E2*****/

/*Crea els tests corresponents per verificar el funcionament de les 
dues funcions de l'exercici Promises i Callbacks N1 E2.*/

function printMessage(message) {
  console.log(message);
}

const wrapingCallback = (callback, ...args) => {
  if (args.length > 0) {
    callback("Custom parameter passed to function.");
  } else {
    callback("Custom parameter not passed to function.");
  }
};

/*Crea els tests corresponents per verificar el funcionament de les 
funcions de l'exercici Promises i Callbacks N2 E1 
i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).*/

/*****Entrance 1.3 N2E1 and N2E2*****/

function getEmployee(id, employeesList) {
  return new Promise(function (resolved, rejected) {
    try {
      employeesList.forEach((employee) => {
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
}

function getSalary(employee, salaryList) {
  return new Promise(function (resolved, rejected) {
    try {
      salaryList.forEach((salary) => {
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
}

/*Crea els tests corresponents per verificar el funcionament de l'exercici 
Async / Await N1 E2.*/


/*****Entrance 1.4 N1E2*****/


const promise = () => {
  return new Promise((res) => {
    setTimeout(() => res("Resolved after 2 sec."), 2000);
  });
};

async function customAsyncFunction() {
  const response = await promise();
  return response;
}

module.exports = {
  sum,
  subtract,
  divide,
  multiply,
  printMessage,
  wrapingCallback,
  getEmployee,
  getSalary,
  promise, 
  customAsyncFunction
};
