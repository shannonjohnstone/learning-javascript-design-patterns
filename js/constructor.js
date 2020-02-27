"use strict"

function Car (opts) {
  this.make = opts.make
  this.model = opts.model
  this.year = opts.year
}

/**
 * Using `prototype` will ensure that the methods is only defined the once
 * 
 * Given that methods that are defined on a class should be for all and the same that inherited from it
 * this is no reason to define these function within the constructor function itself
 */
Car.prototype.toString = function () {
  return `Specs: ${this.year}, ${this.make}, ${this.model}`
}

const commodore = new Car({ make: 'Holden', model: 'Commodore', year: '2000', color: 'red' })
const multivan = new Car({ make: 'Volkswagon', model: 'multivan', year: '2020', color: 'blue' })

console.log(multivan.toString())
