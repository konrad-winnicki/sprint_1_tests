const { Person, Mammals, createObjeto } = require("../app/nivel_2_class");

jest.mock("../app/nivel_2_class", () => {
  const originalModule = jest.requireActual("../app/nivel_2_class");

  return {
    ...originalModule,

    Person: jest.fn().mockImplementation((name) => {
      this.name = name;
      return {
        dirNom: jest.fn(() => console.log(this.name)),
      };
    }),
  };
});
/*****Entrance1.2; N2E2:*****/

describe("Entrance1.2 N2E2:", () => {
  const mockConsoleLog = jest.spyOn(console, "log");
  const person = new Person("Maica");

  it("Caling constructor with name will create instance", () => {
    expect(Person).toHaveBeenCalledTimes(1);
    expect(Person).toHaveBeenCalledWith("Maica");
  });

  it("Calling method 'dirNom()' on clas instance will console.log(name)", () => {
    person.dirNom();
    expect(person.dirNom).toHaveBeenCalledTimes(1);
    expect(mockConsoleLog).toHaveBeenCalledWith("Maica");
  });
});

describe("Entrance1.2 N3E1:", () => {
  it("Calling class constructor of abstract class return error", () => {
    try {
      new Mammals();
    } catch (err) {
      expect(err).toEqual(Error("Abstract class cannot be initialized"));
    }
  });

  it("Create object of abstract class without calling constructor", () => {
    const object = createObjeto("dog");
    expect(object).toBeInstanceOf(Mammals);
  });
});
