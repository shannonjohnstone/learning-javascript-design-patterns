# Learning JavaScript Design Patterns

This is a resource for use for learning design patterns in the context of JavaScript.

All code examples are currently using node 13.9.0 and [esm_ecmascript_modules](https://nodejs.org/api/esm.html#esm_ecmascript_modules) for simplicity so there was not need for setting up Babel or equivalent.

There are some examples that are just node and others that are node and browser. Also some examples have API integrations and some require API keys, because of this some of the examples are using environment values that are loaded just from JavaScript objects.

**NOTE: these environment values are hidden from git and will require being setup per example (if needed)**

## Tasks todo

- [ ] Setup linting and prettier


## Resources

While learning about this patterns the follow 4 main resources were used;

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

[Constructor Example](js/constructor.js)

### Module

This module pattern can be used to emulate classes along with providing a way to create private/public values and methods. 

There are alternatives to this pattern, this being mixins, exports and the revealing module pattern. Mixin is passing in a outside argument for use within the module, export being that the module creating is exported for use and revealing being the way the methods and values are defined and exported.

- [Module Example](js/module.js)
- [Module Mixin Example](js/module-mixin.js)

## Creational Patterns

### Singleton

Singleton is a pattern used for 2 reasons, first being to ensure there is only one instance of the item being created from within the singleton, if a second instance is attempted it will return the first instance that was initiated. The second being this instance is shared into the global scope.

## Structural Patterns

## Behavioral Patterns

### Observer

Observer is a one to many pattern allowing observer (also known as subscribers) to subscribe to and be notified of any state change for a particular subject (also known as a Publisher).

This pattern potentially allows for your application to be broken down into smaller parts while using events to communicate which will lead to a most loosely coupled application. 
