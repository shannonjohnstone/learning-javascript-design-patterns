"use strict"

/**
 * Module pattern is a pattern that can be used to emulate classes 
 * along with providing the ability to create private/public values and methods
 */
const commodoreModule = (function () {
  const make = "Holden";
  const model = "Commodore";
  
  function _toString(car) {
    return () => `Specs: ${car.year}, ${car.make}, ${car.model}`
  }

  return {
    create(year) {
      const car = { make, model, year };

      return {
        toString: _toString(car)
      }
    }
  }
})();

const commodore = commodoreModule.create(1999)
console.log(commodore.toString())

/**
 * Unlike a reference to an instance object created with a constructor function
 * using the following dot notation to try and override values will not work
 * as they are now private and unaccessible from the outer scope
 */ 
commodore.make = 'Ford';

console.log(commodore.toString())
