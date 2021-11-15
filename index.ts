// Built-in-data-type | Keyword | Description
// Number	              number	   It is used to represent both Integer as well as Floating-Point numbers
// Boolean	            boolean	   Represents true and false
// String	              string	   It is used to represent a sequence of characters
// Void	                void	     Generally used on function return-types
// Null	                null	     It is used when an object does not have any value
// Undefined	          undefined	 Denotes value given to uninitialized variable	Any	any	If variable is declared with any data-type then any type of value can be assigned to that variable


let id: number = 5;
let company: string = 'KSHITIJ DHYANI';
let isPublished: boolean = true;
let x: any = "Hello"
 
let age: number;
age = 4;
// YOU CANT DO age = true
// IT WILL CRY 

// A LIST OF ONLY NUMMBERS
let ids: number[] = [1,2,3,4,5];
// NOT ALLOWED [1,2,"4",true]
// IT WILL CRY

// IF YOU WANT A MIXED LIST
let arr: any[] = [1,true, 'Hello']

// TUPLE
// WITH A TUPLE WE CAN SPECIFY THE TYPE
let person : [number, string, boolean] = [1,'KSHITIJ',true];
// IT WILL CRY IF YOU DISRUPT ANY OF THE CONDITION

// TUPLE ARRAY 
let employee : [number,string][]

employee = [
  [1,'KSHIITJ'],
  [2,'SANSKRITI'],
  [3, "DHYANI"],
]

// UNIONS 
let pid : string | number;

pid = '22';

// ENUM
// ENUMERATED TYPE 
// ALLOW US TO DEFINE SET OF NAMED CONSTANTS either string or number
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction1.Up);


// OBJECTS
type User = {
  id : number,
  name:string,
}

const user : User = {
  id : 1,
  name : 'Jhon'
}


// TYPE ASSERTION
let xid: any = 1;

let customerId = <number> xid;
// or
let toopa = xid as number;

// FUNCTIONS
// TYPED PARAMS AND TYPED RETURN TYPE
function addNum(x : number ,y : number): number {
  return x+y;
}
 
// PIPE OPERATOR FOR UNION 
function log(message : number | string) : void {
  console.log(message);
}

log("HELLO JI")

// YOU CAN USE INTERFACE WITH PREMITIVES
// YOU USE THEM WITH OBJECTS

// INTERFACE and 
// OPTIONAL FIELD

// READ ONLY PROPERTIES
interface playerInterface {
  readonly id : number,
  name : string,
  // THIS IS AN OPTIONAL PARAM 
  cool_name ?: string,
}

const player : playerInterface = {
  id: 3,
  name : "Jhon",
}

// YOU CAN NOT ASSIGN OR MODIFY READ ONLY PROPERTIES


interface MathFunc {
  (x: number, y : number) : number
}

// WE NEED TO STORE THE FUNCTION INSIDE A VARIABlE TO ABLE TO
// BE ABLE TO APPLY FUNCTION INTERFACE

// WHY WE ARE WRITING IT TWO TIMES?
// FIRST OF ALL YOU CANT WRITE INTERFACE FOR FUNCTION DIRECTLY
// YOU WRITE A INTERFACE FOR A VARIABLE
// AND ASSISGN THE FUCNTION TO THAT VARIABLE
// THEREFORE YOU EVEN NEED TO ASSIGN TYPES WHILE WRITING THE FUNCTION SINCE
// YOU HAVE JUST WRITTEN THE INTERFACE BEFORE FOR THE STORING VARIABLE
const add : MathFunc = (x:number, y:number): number =>  {return x+ y};

// YOU CAN EVEN HAVE A INTERFACE AS A RETURN TYPE


// CLASSES
class Person {
  //  ALL PROPERTIES MUST BE INTIALISED INSIDE A FUNCTIOn
  private id: number;
  // CANT ACCESS PRIVATE AND PROTECTED PROPERTIES OUTSIDE CLASS
  name : string;

  constructor (id : number , name : string){
    this.id = 1;
    this.name = "askdad";
  }

  register() 
  { 
    return  console.log( `${this.name} is now REGISTERED`);
  }
}

// NEW INSTANTIATES A NEW OBJECT OF CLASS PERSON
const brad = new Person(1,"asdad");
brad.register();

// EVEN CLASSES CAN HAVE INTERFACES

interface Person2Interface {
  id: number, 
  name: string, 
  // REGISTER METHOD RETURNS A STRING
  register(): string,
}

class Person2 implements Person2Interface {
  id: number;
  name: string;
  constructor(id : number, name : string) {
    this.id = id;
    this.name = name;
  }
  register()
  {
    return "PERSON 2 MUST RETURN STRING";
  }
}

// INHERITENCE AND SUB CALSSES
class Employee extends Person2 {
  position : string
  constructor (id : number, name : string, position: string) {
    super(id,name);
    this.position = position;
  }
}

const app = new Employee(1,"KSHIITJ","DEVELOPER");

// WE CAN ACCESS THIS DUE TO INHERETENCE 
app.register();


// GENERICS 
function getArray<T>(items : T[]): T[]{
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,5]);
let strArray = getArray<string>(["bread", "jhon" ," jill"])

numArray.push(1)
strArray.push("hsakdhaksj")