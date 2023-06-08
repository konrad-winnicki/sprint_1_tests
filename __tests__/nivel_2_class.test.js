const {Person} = require('../app/nivel_2_class')


jest.mock('../app/nivel_2_class', () => {
  const originalModule = jest.requireActual('../app/nivel_2_class');
return{
  ...originalModule,
  Person: jest.fn().mockImplementation((name) => {
        return {
      dirNom: jest.fn(() => console.log(name)),
    };
  }),
}
})
/*****Entrance1.2; N2E2:*****/


describe("Entrance1.2 N2E2:", () => {
  const mockConsoleLog = jest.spyOn(console, "log");
  const person = new Person("Maica");

  it("Caling constructor with name will create instance", () => {
    expect(Person).toHaveBeenCalledTimes(1);
    expect(Person).toHaveBeenCalledWith("Maica");
  });

  it("Calling method 'dirNom()' on clas instance will console.log(name)", () => {
    person.dirNom()
    expect(person.dirNom).toHaveBeenCalledTimes(1);
    expect(mockConsoleLog).toHaveBeenCalledWith("Maica");
  });
});