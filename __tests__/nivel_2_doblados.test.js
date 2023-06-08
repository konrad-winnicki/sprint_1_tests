/*****Entrance 1.4 N2E1*****/
const {doblador, sumarDoblados2} = require('../app/nivel_2_doblados')



describe("Entrance 1.4; N2E1", () => {

  beforeAll(()=>{
    jest.useFakeTimers();
    spy = jest.spyOn(global, "setTimeout");
  })

  afterAll(()=>{
    jest.useRealTimers();
    spy.mockRestore()
  })
  
  describe("The function 'doblador()':", () => {
            
    test("should throw an error 'Argumment must be a number!' if passed parameter is NaN", async () => {
      const NotANumber = "name";
      await expect(() => {
        doblador(NotANumber);
      }).toThrow("Argumment must be a number!");
    });

    test("should be called once and after 2 sec.", async() => {
      
      const result = doblador(1);
      jest.runAllTimers();
      await result
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 2000);
    });

    test("should return 4 if passed 2", () => {
      const result = expect(doblador(2)).resolves.toBe(4);
      jest.runAllTimers();
      return result;
    });
  });


  describe("The function 'sumarDoblados()':", () => {
    it("should return 10 for arguments: 1, 2, 2", () => {
      const result = expect(sumarDoblados2(1, 2, 2)).resolves.toBe(10);
      jest.runAllTimers();
      return result;
    });})
});
