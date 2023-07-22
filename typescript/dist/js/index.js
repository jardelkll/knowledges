"use strict";
const x = 20;
console.log(x);
// tipos básicos
let firstName = "Jardel";
let age = 30;
const isAdmin = true;
// objects
const myNumbers = [1, 2, 3];
// tuple
let myTuple;
// object literals
const user = {
    name: "Jardel",
    age: 35
};
// object literals - valor opcional
const user2 = {
    name: "Jardel"
};
// any -- não usar
let a;
// union type
let id;
// enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa Gola V",
    size: Size.G
};
//literal types
let teste;
// functions
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
// function sem retorno
function logger(msg) {
    console.log(msg);
}
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
// class
class User {
    constructor(name, age, role, isApproved) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Idade do usuário é: ${this.age}`);
            return;
        }
        console.log("Informação restrita!");
    }
}
const jardel = new User("Jardel Kellemann", 35, "Dev", true);
jardel.showUserName();
