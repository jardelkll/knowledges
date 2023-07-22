const x:number = 20;

console.log(x);

// tipos básicos
let firstName:string = "Jardel"
let age:number = 30
const isAdmin:boolean = true

// objects
const myNumbers:number[] = [1,2,3]

// tuple
let myTuple:[number,string,string[]]

// object literals
const user:{name:string,age:number} = {
   name: "Jardel",
   age: 35
}

// object literals - valor opcional
const user2:{name:string,age?:number} = {
   name: "Jardel"
}
// any -- não usar
let a:any 

// union type
let id:string|number

// type alias
type myType = number|string

// enum
enum Size {
   P = "Pequeno",
   M = "Médio",
   G = "Grande"
}
const camisa = {
   name: "Camisa Gola V",
   size: Size.G
}

//literal types
let teste:"whatever"

// functions
function sum(a:number,b:number) {
   return a + b;
}
console.log(sum(12,12));

// function sem retorno
function logger(msg:string):void{
   console.log(msg);
}

// interface
interface MathFunctionParams {
   n1:number;
   n2:number;
}
function sumNumbers(nums:MathFunctionParams){
   return nums.n1 + nums.n2;
}
console.log(sumNumbers({n1:1,n2:2})); 

// class

class User {
   name;
   age;
   role;
   isApproved;

   constructor(name:string,age:number,role:string,isApproved:boolean){
      this.name = name;
      this.age = age;
      this.role = role;
      this.isApproved = isApproved;
   }

   showUserName(){
      console.log(`O nome do usuário é ${this.name}`);
   }

   showUserRole(canShow:boolean){
      if(canShow){
         console.log(`Idade do usuário é: ${this.age}`);
         return;
      }
      console.log("Informação restrita!");
   }
}

const jardel = new User("Jardel Kellemann",35,"Dev",true);
jardel.showUserName();
