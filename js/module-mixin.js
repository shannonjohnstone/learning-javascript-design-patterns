"use strict"

/**
 * Module mixin pattern is a pattern with the same ability as the standard module pattern
 * with the added benefit of having outside arguments passed in
 * 
 * This could be just importing for use or then even scoping logic inside the module and then
 * exporting the module for use
 */

const _ = {
  helper: (val) => val + '::fakeUnderscore'
}

const commodoreModule = (function (_) {
  const make = "Holden";
  const model = "Commodore";
  
  function _toString(car) {
    return () => _.helper(`Specs: ${car.year}, ${car.make}, ${car.model}`)
  }

  return {
    create(year) {
      const car = { make, model, year };

      return {
        toString: _toString(car)
      }
    }
  }
})(_);

const commodore = commodoreModule.create(1999)
console.log(commodore.toString())