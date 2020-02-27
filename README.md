# Learning JavaScript Design Patterns

This is a resource for use for learning design patterns in the context of JavaScript. While learning about this patterns the follow 4 main resources were used;

- [JavaScript Design Pattens](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
- [Dive Into Design Patterns](https://refactoring.guru/design-patterns/book)
- [Easy Learning Design Patterns ES6+](https://www.amazon.com.au/Easy-Learning-Design-Patterns-Javascript/dp/1070569739)
- [dofactory JavaScript](https://www.dofactory.com/javascript/design-patterns)

***NOTE: The notes in repository have been written while learning about the design patterns listed, so they not highly detailed but rather a summary used for increased retention. The listed resources above should fill in any gaps***

## Contents
[JavaScript Patterns](#javascript-patterns)

[Creational Patterns](#creational-patterns)

[Structural Patterns](#structural-patterns)

[Behavioral Patterns](#behavioral-patterns)

## JavaScript Patterns

### Constructor

Constructor is a pattern used mostly pre ES6+ as a replacement for classes. This is a instance object on a constructor function that is initiated rather then executed. 

When a Constructor is initiated it will create a new object and sets this new object as the constructor functions `this` context.

If a constructor function has nested functions within it that also reference `this`, these nested functions `this` context will be the call site rather this the constructor function. This is bad practice and using `strict mode` will enforce an error if this is implemented.

### Module

This module pattern can be used to emulate classes along with providing a way to create private/public values and methods

## Creational Patterns
## Structural Patterns
## Behavioral Patterns