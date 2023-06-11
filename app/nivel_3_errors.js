const { getEmployee, getSalary } = require("./nivel_1");

async function getEmployeeSalary(employeeId, employeeList, salaryList) {
  try {
    const employee = await getEmployee(employeeId, employeeList);
    const salary = await getSalary(employee, salaryList);
    console.log(`Employee: ${employee.name}\nSalary: ${salary}`);
  } catch (err) {
    throw err;
  }
}

/*
Crea una nova funció asíncrona que cridi a una altra que retorni una 
Promise que efectuï la seva funció resolve() després de 2 segons de la 
seva invocació.
*/

const promise = () => {
  return new Promise((res) => {
    setTimeout(() => res("Resolved after 2 sec."), 2000);
  });
};

async function customAsyncFunction() {
  const response = await promise();
  return response;
}

/*
Crea una funció que retorni el doble del número que li passa com a paràmetre 
després de 2 segons.
Crea una altra funció que rebi tres números i calculi la suma dels seus 
dobles fent servir la funció anterior.
*/

const doblador = (number) => {
  if (isNaN(number)) {
    throw new Error("Argument must be a number!");
  }
  return new Promise((res) => {
    setTimeout(() => {
      res(number * 2);
    }, 2000);
  });
};

async function sumarDoblados(number1, number2, number3) {
  try {
    const doble1 = await doblador(number1);
    const doble2 = await doblador(number2);
    const doble3 = await doblador(number3);
    return doble1 + doble2 + doble3;
  } catch (err) {
    throw err;
  }
}

const sumarDoblados2 = async (number1, number2, number3) => {
  try {
    const doblesList = [number1, number2, number3].map(doblador);
    const nums = await Promise.all(doblesList);
    let result = nums.reduce((total, number_1) => {
      return total + number_1;
    });
    return result;
  } catch (err) {
    throw err;
  }
};

/*
Força i captura tants errors com puguis dels nivells 1 i 2.
*/

module.exports = { getEmployeeSalary, sumarDoblados, sumarDoblados2, doblador };
