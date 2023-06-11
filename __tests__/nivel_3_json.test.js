const fs = require("fs");
let { getEmployee, getSalary, readFile } = require("../app/nivel_3_json");
jest.mock("fs");

describe("The 'getEmployee()' function:", () => {
  test("should resolve with employee object when found", () => {
    const json = JSON.stringify([
      { id: 0, name: "Jose" },
      { id: 1, name: "Mafalda" },
    ]);
    fs.readFileSync.mockReturnValue(json);
    return expect(
      getEmployee(1, "mockedPath", "MockedPath", readFile)
    ).resolves.toEqual({
      id: 1,
      name: "Mafalda",
    });
  });

  test("should reject with 'No such employee' if not found", () => {
    const json = JSON.stringify([
      { id: 0, name: "Jose" },
      { id: 1, name: "Mafalda" },
    ]);
    fs.readFileSync.mockReturnValue(json);
    return expect(
      getEmployee(3, "mockedPath", "mockedPath", readFile)
    ).rejects.toEqual(new Error("No such employee"));
  });

  test("should reject with 'I can not process this data' if not valid param", () => {
    const json = JSON.stringify([
      { id: 0, name: "Jose" },
      { id: 1, name: "Mafalda" },
    ]);
    fs.readFileSync.mockReturnValue(json);
    const notValidArgument = "string";
    return expect(
      getEmployee(notValidArgument, "mockedPath", "MockedPath", readFile)
    ).rejects.toEqual(new Error("I can not process this data"));
  });

  test("should reject with 'I can not process this data' if not id in object", () => {
    const json = JSON.stringify([{ name: "Jose" }, { name: "Mafalda" }]);
    fs.readFileSync.mockReturnValue(json);
    return expect(
      getEmployee(1, "mockedPath", "MockedPath", readFile)
    ).rejects.toEqual(new Error("I can not process this data"));
  });

  test("should reject with 'I can not process this data' if no id in file", () => {
    const json = JSON.stringify([{ name: "Jose" }, { name: "Mafalda" }]);
    fs.readFileSync.mockReturnValue(json);

    return expect(
      getEmployee(1, "mockedPath", "MockedPath", readFile)
    ).rejects.toEqual(new Error("I can not process this data"));
  });

  test("should throw Error when wrong path to file", () => {
    const mockCallback = jest.fn(() => {
      throw new Error("Wrong path");
    });
    expect(() =>
      getEmployee(1, "mockedPath", "MockedPath", mockCallback)
    ).toThrow(new Error("Wrong path"));
  });
});

describe("The 'getSalary()' function:", () => {
  const employee = { id: 1, name: "Mafalda" };
  test("should resolve with salary if employee exist and salary is assignated", () => {
    const json = JSON.stringify([
      { id: 0, salary: 1000 },
      { id: 1, salary: 2000 },
    ]);
    fs.readFileSync.mockReturnValue(json);

    return expect(
      getSalary(employee, "mockedPath", "MockedPath", readFile)
    ).resolves.toBe(2000);
  });

  test("should reject with 'No such assignated' if salary for employee not in the file", () => {
    const json = JSON.stringify([
      { id: 0, salary: 1000 },
      { id: 3, salary: 2000 },
    ]);
    fs.readFileSync.mockReturnValue(json);
    return expect(
      getSalary(employee, "mockedPath", "MockedPath", readFile)
    ).rejects.toEqual(new Error("Salary not asignated"));
  });

  test("should reject with 'I can not process this data' if not valid param", () => {
    const json = JSON.stringify([
      { id: 0, salary: 1000 },
      { id: 1, salary: 2000 },
    ]);
    fs.readFileSync.mockReturnValue(json);
    const notValidArgument = "string";
    return expect(
      getSalary(notValidArgument, "mockedPath", "MockedPath", readFile)
    ).rejects.toEqual(new Error("I can not process this data"));
  });

  test("should reject with 'I can not process this data' if no id in file", () => {
    const json = JSON.stringify([{ salary: 1000 }, { salary: 2000 }]);
    fs.readFileSync.mockReturnValue(json);
    const validArgument = { id: 0, name: "Jose" };
    return expect(
      getSalary(validArgument, "mockedPath", "MockedPath", readFile)
    ).rejects.toEqual(new Error("I can not process this data"));
  });

  test("should throw Error when wrong path to file", () => {
    const mockCallback = jest.fn(() => {
      throw new Error("Wrong path");
    });
    expect(() =>
      getSalary(1, "mockedPath", "MockedPath", mockCallback)
    ).toThrow(new Error("Wrong path"));
  });
});


