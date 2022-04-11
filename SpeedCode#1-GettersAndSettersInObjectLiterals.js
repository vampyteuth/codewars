// Objective (named "Task" in my other Kata)
// Define a variable person which stores an object literal. The object literal 
// should have the following properties:

// A firstName of "Jane"
// A lastName of "Doe"
// The object literal should then have a getter and setter called fullName which 
// returns and parses the full name of the person respectively. A full name is defined 
// as follows: If the first name is "Jane" and the last name is "Doe" then the full name 
// is "Jane Doe" and vice versa. You may assume all full names are valid when parsing them.

let person = {
    firstName: "Jane",
    lastName: "Doe",
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  
    set fullName(name) {
      [this.firstName, this.lastName] = name.split(" ")
    }
  }