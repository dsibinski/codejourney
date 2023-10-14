var Person = /** @class */ (function () {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.getName = function () {
    return this.name;
  };
  Person.prototype.getAge = function () {
    return this.age;
  };
  return Person;
})();
var person = new Person("John", 27);
console.log(person.getName()); // Output: John
console.log(person.getAge()); // Output: 27
