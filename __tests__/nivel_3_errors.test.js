const {
  getEmployeeSalary,
  doblador,
  sumarDoblados2,
  sumarDoblados,
} = require("../app/nivel_3_errors");
const { employees, salaries } = require("../app/dataEmployees_Salaries");

describe("The function 'getEmployeeSalary()':", () => {
  test("should throw error 'No such employee'", async () => {
    const noSuchIdInEmployees = 7;
    expect.assertions(1);
    await expect(
      getEmployeeSalary(noSuchIdInEmployees, employees, salaries)
    ).rejects.toThrowError(Error, "No such employee");
  });

  test("should throw error 'Salary not asignated'", async () => {
    const salaryForSearchedEmployeeNotAsignated = [{ id: 3, salary: 4000 }];
    expect.assertions(1);
    await expect(
      getEmployeeSalary(1, employees, salaryForSearchedEmployeeNotAsignated)
    ).rejects.toThrowError(Error, "Salary not asignated");
  });

  test("should reject with error 'I can not process this data' when first parameter is not number", async () => {
    const firstparamNaN = "ala";
    expect.assertions(1);
    await expect(
      getEmployeeSalary(firstparamNaN, employees, salaries)
    ).rejects.toThrowError(Error, "I can not process this data");
  });

  test("should reject with error 'I can not process this data' when wrong type of second parameter", async () => {
    const wrongType = ["id", "name"];
    expect.assertions(1);
    await expect(
      getEmployeeSalary(1, wrongType, salaries)
    ).rejects.toThrowError(Error, "I can not process this data");
  });

  test("should reject with error 'I can not process this data' when wrong type of second parameter", async () => {
    const wrongType = ["id", "name"];
    expect.assertions(1);
    await expect(
      getEmployeeSalary(1, employees, wrongType)
    ).rejects.toThrowError(Error, "I can not process this data");
  });
});

describe("The function 'doblador()':", () => {
  test("should throw an error 'Argumment must be a number!' if passed parameter is NaN", async () => {
    const NotANumber = "name";
    expect.assertions(1);
    await expect(() => {
      doblador(NotANumber);
    }).toThrowError(Error, "Argumment must be a number!");
  });
});

describe("The function 'sumarDoblados2()':", () => {
  it("should throw an error 'Argumment must be a number!' if passed parameter is NaN", () => {
    const notAnumber = "string";

    expect.assertions(1);
    return expect(sumarDoblados2(notAnumber, 1, 1)).rejects.toThrow(
      new Error("Argument must be a number!")
    );
  });
});
