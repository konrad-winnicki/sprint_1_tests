const {
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
  } = require('../app/nivel_1')


  /*****MATH FUNCTIONS*****/


  describe("MATH FUNCTIONS", () => {
    describe("The `sum()` function:", () => {

      test("should throw error if passed less than two arguments", () => {
        expect(() => {
          sum();
        }).toThrow("Minimum two arguments");
      });
  
      test("should throw error if one of the arrgument is not a number", () => {
        expect(() => {
          sum(1, 2, "ala");
        }).toThrow("One of the argument is not a number");
      });
  
      test("should return sum of 2 and 2 equal to 4", () => {
        expect(sum(2, 2)).toBe(4);
      });
    });
  

    describe("The 'subtract()` function:", () => {

      test("should throw error if passed less than two arguments", () => {
        expect(() => subtract(1)).toThrow("Minimum two arguments");
      });

      test("should throw error if one of the arrgument is not a number", () => {
        expect(() => {
          subtract(1, 2, "ala");
        }).toThrow("One of the argument is not a number");
      });

      test("should return subtraction of -2 and 2 equal to -4", () => {
        expect(subtract(-2, 2)).toBe(-4);
      });
    });
  

    describe("The 'divide()' function:", () => {

      test("should throw error if passed less than two arguments", () => {
        expect(() => divide(1)).toThrow("Minimum two arguments");
      });

      test("should throw error if one of the arrgument is not a number", () => {
        expect(() => {
          divide(1, 2, "ala");
        }).toThrow("One of the argument is not a number");
      });

      test("should throw error if second and following arguments are `0`", () => {
        expect(() => divide(1, 2, 0)).toThrow("You can not divide by 0");
      });

      test("should return division of 10 by 2 equal to 2.5", () => {
        expect(divide(10, 2, 2)).toBeCloseTo(2.5);
      });

      test("should return division of 0 by 1 equal to 0", () => {
        expect(divide(0, 1)).toBeCloseTo(0);
      });
    });
  

    describe("The 'multiply()' function:", () => {

      test("should throw error if less than two arguments", () => {
        expect(() => multiply(1)).toThrow("Minimum two arguments");
      });

      test("should throw error if one of the arrgument is not a number", () => {
        expect(() => {
          multiply(1, 2, "ala");
        }).toThrow("One of the argument is not a number");
      });

      test("should return multiplication of 10 and 2 equal to 20", () => {
        expect(multiply(10, 2)).toBe(20);
      });
    });
  });


  /*****Entrance 1.3 N1E2*****/


  describe("Entrance 1.3; N1E2", () => {
    describe("The 'printMessage()' function:", () => {

      test("should consol.log string passed as parameter", () => {
        const mockConsoleLog = jest.spyOn(console, "log");
        printMessage("testing message");
        expect(mockConsoleLog).toHaveBeenCalledWith("testing message");
      });
    });
  
    describe("The 'wrapingCallback()' function:", () => {
      test("should invoke callback function with param = 'Custom parameter passed to function.' when passed callback function and at least one other param", () => {
        const mockCallback = jest.fn();
        wrapingCallback(mockCallback, "ala");
        expect(mockCallback).toHaveBeenCalledWith(
          "Custom parameter passed to function."
        );
          wrapingCallback(mockCallback, "ala");

      });
  
      test("should invoke callback function with param = 'Custom parameter not passed to function.' when passed only callback function", () => {
        const mockCallback = jest.fn();
        wrapingCallback(mockCallback);
        expect(mockCallback).toHaveBeenCalledWith(
          "Custom parameter not passed to function."
        );
      });
      
    });
  });


  /*****Entrance 1.3 N2E1 and N2E2*****/

  
  describe("Entrance 1.3 N2E1 and N2E2", ()=>{
    const {employees, salaries} = require('../app/dataFor1_3')

    describe("The function 'getEmployee':", () => {

        test("should resolve promise with object {id: 2, name: 'Bill Gates'}", async () => {
          const result = await getEmployee(2, employees);
          expect(result).toStrictEqual({ id: 2, name: "Bill Gates" });
        });

        test("should reject with error 'No such employee'", async () => {
          const noSuchIdInEmployees = 7;
          await expect(getEmployee(noSuchIdInEmployees, employees)).rejects.toEqual(
            new Error("No such employee")
          );
          return getEmployee(noSuchIdInEmployees, employees).catch((data) =>
            expect(data).toEqual(new Error("No such employee"))
          );
        });
      
        test("should reject with error 'I cannot process this data' when employee object don't have 'id'", async () => {
          const employeesWithoutId = [{ i: 1, name: "testName" }];
          await expect(getEmployee(1, employeesWithoutId)).rejects.toEqual(
            new Error("I can not process this data")
          );
        });
      
        test("should reject with error 'I cannot process this data' when employees is not array", async () => {
          const employeesIsNotArray = 1;
          await expect(getEmployee(1, employeesIsNotArray)).rejects.toEqual(
            new Error("I can not process this data")
          );
        });

        test("should reject with error 'I cannot process this data' when employees is array with strings", async () => {
          const employeesIsArrayWithStrings = ["cat", "dog"];
          await expect(getEmployee(1, employeesIsArrayWithStrings)).rejects.toEqual(
            new Error("I can not process this data")
          );
        });
      
        test("should reject with error 'I can not process this data' when first parameter is not number", async () => {
          const firstparamNaN = "ala";
          await expect(getEmployee(firstparamNaN, employees)).rejects.toEqual(
            new Error("I can not process this data")
          );
        });
      });
      

      describe("The function 'getSalary':", () => {
        test("should resolve promise with salary amount", async () => {
          const result = await getSalary({ id: 2, name: "Bill Gates" }, salaries);
          expect(result).toBe(1000);
        });
      
        test("should reject with error 'Salary not asignated'", async () => {
          const salaryForSearchedEmployeeNotAsignated = [{ id: 3, salary: 4000 }];
          await expect(
            getSalary(
              { id: 2, name: "Bill Gates" },
              salaryForSearchedEmployeeNotAsignated
            )
          ).rejects.toEqual(new Error("Salary not asignated"));
        });
      
        test("should reject with error 'I can not process this data' when employee object don't have 'id'", async () => {
          const employeesWithoutId = [{ i: 1, name: "testName" }];
          await expect(getSalary(employeesWithoutId, salaries)).rejects.toEqual(
            new Error("I can not process this data")
          );
        });
      
        test("should reject with error 'I can not process this data' when salaryies object don't have 'id'", async () => {
          const salariesWithoutId = [{ i: 1, salary: 1000 }];
          await expect(
            getSalary([{ id: 1, name: "testName" }], salariesWithoutId)
          ).rejects.toEqual(new Error("I can not process this data"));
        });
      
        test("should reject with error 'I can not process this data' when salaries is not array", async () => {
          const salariesIsNotArray = 1;
          await expect(
            getEmployee([{ id: 1, name: "testName" }], salariesIsNotArray)
          ).rejects.toEqual(new Error("I can not process this data"));
        });
      
        test("should reject with error 'I cannot process this data' when employees is array with strings", async () => {
          const salariesIsArrayWithStrings = ["cat", "dog"];
          await expect(getEmployee(1, salariesIsArrayWithStrings)).rejects.toEqual(
            new Error("I can not process this data")
          );
        });
      });
  })


  /*****Entrance 1.4 N1E2*****/


  describe("Entrance 1.4; N1E2", () => {

    describe("The function 'promise()':", () => {
      test("1. Test with ASYNC/AWAIT\n should resolve with string 'Resolved after 2 sec.'", async () => {
        await expect(promise()).resolves.toBe("Resolved after 2 sec.");
      });
  
      test("2. Test with THAN\n should resolve with string 'Resolved after 2 sec.", () => {
        return promise().then((data) =>
          expect(data).toBe("Resolved after 2 sec.")
        );
      });
    });
  
    describe("The function 'customAsyncFunction':", () => {
      test("should return promise resolved with string 'Resolved after 2 sec.'", async () => {
        const result = await customAsyncFunction();
        expect(result).toBe("Resolved after 2 sec.");
      });
    });
  });
  