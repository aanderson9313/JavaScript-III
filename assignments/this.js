/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is when "this" is not specifically declared. default binding!
* 2. Implicit Binding points to the object on the left of the period. --> key/value in an object.
* 3. new Binding is when you create a new object that "this" points to.
* 4. Explicit Binding is when you can call an object method using another object as an argument. "standalone function"
*   *this refers to where its invoked!*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
a = 37;
console.log(window.a);
// Principle 2

// code example for Implicit Binding
const user = {
    name: 'Houston',
    age: 30, 
    greet() {
        alert(`Hello, my name is ${this.name}`)
    }

}
user.greet();

// Principle 3

// code example for New Binding
function Foo() {
    this.name = 'Houston'
    this.say = function () {
        return 'I am ' + this.name;
    };
}
let name = 'Houston';
let result = new Foo();
console.log(result.name);
// Principle 4

// code example for Explicit Binding
function greet (l1, l2, l3) {
    alert( `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`)
}

const user1 = {
    name: 'Houston',
    age: 30, 
}

const languages = ['Javascript', 'Ruby', 'Python']
greet.apply(user1,languages)