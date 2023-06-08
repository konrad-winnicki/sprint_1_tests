/*Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 
utilitzant Jest Fake Timers.*/


/*****Entrance 1.4 N2E1*****/

const doblador = (number) => {
    if (isNaN(number)) {
      throw new Error("Argumment must be a number!");
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
      console.log(err.message);
    }
  }
  
  //sumarDoblados(1, 2, 2).then((res) => console.log(res));
  
  const sumarDoblados2 = async (number1, number2, number3) => {
    const doblesList = [number1, number2, number3].map(doblador);
    try {
      const nums = await Promise.all(doblesList);
      let result = nums.reduce((total, number_1) => {
        return total + number_1;
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  };

  module.exports = {doblador, sumarDoblados2}