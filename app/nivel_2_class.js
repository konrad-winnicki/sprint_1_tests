/*Crea un mock que comprovi les crides al constructor de la classe 
Persona i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - 
N2 E2 i testeja que funcionen.*/


/*****Entrance1.2 N2E2:*****/


class Person {
    constructor(name) {
      this.name = name;
    }
  
    dirNom() {
      console.log(this.name);
      return this.name
    }
  }

  /*Verifica mitjançant tests la creació d'instàncies de la classe 
  abstracta de l'exercici Classes & Arrow Functions N3 E1.*/

  class Mammals {
    constructor() {
      if (this.constructor === Mammals) {
        throw new Error("Abstract class cannot be initialized");
      }
    }
  
  }
  
  
  function createObjeto(mammalType){
    let instance;
    switch(mammalType){
      case 'dog': instance = Object.create(Mammals.prototype);
      break;
      case 'cat': instance = Object.create(Mammals.prototype);
      break;
    }
    return instance
    
  }

  module.exports = {Person, Mammals}