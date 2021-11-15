// Built-in-data-type | Keyword | Description
// Number	              number	   It is used to represent both Integer as well as Floating-Point numbers
// Boolean	            boolean	   Represents true and false
// String	              string	   It is used to represent a sequence of characters
// Void	                void	     Generally used on function return-types
// Null	                null	     It is used when an object does not have any value
// Undefined	          undefined	 Denotes value given to uninitialized variable	Any	any	If variable is declared with any data-type then any type of value can be assigned to that variable
var id = 5;
var company = 'KSHITIJ DHYANI';
var isPublished = true;
var x = "Hello";
var age;
age = 4;
// YOU CANT DO age = true
// IT WILL CRY 
// A LIST OF ONLY NUMMBERS
var ids = [1, 2, 3, 4, 5];
// NOT ALLOWED [1,2,"4",true]
// IT WILL CRY
// IF YOU WANT A MIXED LIST
var arr = [1, true, 'Hello'];
// TUPLE
// WITH A TUPLE WE CAN SPECIFY THE TYPE
var person = [1, 'KSHITIJ', true];
// IT WILL CRY IF YOU DISRUPT ANY OF THE CONDITION
// TUPLE ARRAY 
var employee;
employee = [
    [1, 'KSHIITJ'],
    [2, 'SANSKRITI'],
    [3, "DHYANI"],
];
// UNIONS 
var pid;
pid = '22';
// ENUM
// ENUMERATED TYPE 
// ALLOW US TO DEFINE SET OF NAMED CONSTANTS either string or number
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
var user = {
    id: 1,
    name: 'Jhon'
};
// TYPE ASSERTION
var xid = 1;
var customerId = xid;
// or
var toopa = xid;
// FUNCTIONS
// TYPED PARAMS AND TYPED RETURN TYPE
function addNum(x, y) {
    return x + y;
}
// PIPE OPERATOR FOR UNION 
function log(message) {
    console.log(message);
}
log("HELLO JI");
var player = {
    id: 3,
    name: "Jhon"
};
// WE NEED TO STORE THE FUNCTION INSIDE A VARIABlE TO ABLE TO
// BE ABLE TO APPLY FUNCTION INTERFACE
// WHY WE ARE WRITING IT TWO TIMES?
// FIRST OF ALL YOU CANT WRITE INTERFACE FOR FUNCTION DIRECTLY
// YOU WRITE A INTERFACE FOR A VARIABLE
// AND ASSISGN THE FUCNTION TO THAT VARIABLE
// THEREFORE YOU EVEN NEED TO ASSIGN TYPES WHILE WRITING THE FUNCTION SINCE
// YOU HAVE JUST WRITTEN THE INTERFACE BEFORE FOR THE STORING VARIABLE
var add = function (x, y) { return x + y; };
// YOU CAN EVEN HAVE A INTERFACE AS A RETURN TYPE
// CLASSES
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = 1;
        this.name = "askdad";
    }
    Person.prototype.register = function () {
        return console.log(this.name + " is now REGISTERED");
    };
    return Person;
}());
// NEW INSTANTIATES A NEW OBJECT OF CLASS PERSON
var brad = new Person(1, "asdad");
brad.register();
