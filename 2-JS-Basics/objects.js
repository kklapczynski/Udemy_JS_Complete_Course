var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1982,
    married: true,
    job: 'teacher',
    calculateAge: function() {
        return 2017 - this.birthYear;
    },
    family: ['Jimmy', 'Rosie', 'Aldona']
}
// caluclateAge in and object is a method and it's not a statement but fucntion expression - the same as:
// var calculateAge = function(birthYear) {};

console.log(john.firstName +' '+ john.lastName + ' ' + john.birthYear);
console.log(john['firstName']);
var x = 'job';
console.log(john[x]);

console.log(john);
console.log(john.family[0]);
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;
console.log(john);
