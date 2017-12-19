///////////////////////////////////////
// Lecture: Hoisting
/*
//calculateAge(1990);
// this is function declaration
function calculateAge(year) {
    console.log(2017-year);
}

// hoisting doesn't work for function expressions
//retirement(1980); //script.js:9 Uncaught TypeError: retirement is not a function

// function expression
var retirement = function(year) {
    console.log(65 - (2017-year));
}
//console.log(age); // getting 'undefined'
var age = 23;     // getting the above, cause variable hoisting - in creating phase of execute context vars are declared but undefined 
//console.log(age);

//console.log(age1); // getting: age1 is not defined

function foo() {
    console.log(age); // we get 'undefined'
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

*/














///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

var john = {
    name: 'John',
    yearOfBirth: 1980,
    calculateAge: function() {
        console.log(this);
        console.log(2017-this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();







