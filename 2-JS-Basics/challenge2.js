// var years = [1977, 1984, 1990, 1999, 2005, 2011, 2016];
// var ages = [];
// for(var j=0; j<years.length;j++) {
//     ages.push(2017-years[j]);
// }

// for(var i=0; i<ages.length; i++) {
//     console.log(ages[i] + " " + (ages[i]>=18 ? true : false));
// }
// var is18 = [];
// for(var i=0; i<years.length; i++) {
//     if(2017-years[i] >= 18) {
//         is18.push(true);
//     } else {
//         is18.push(false);
//     }
// }
//console.log(years);
//console.log(is18);
function printFullAge(yearsOfBirthArray) {
    var agesArray = [];
    for (var i=0; i<yearsOfBirthArray.length; i++ ) {
        agesArray.push(2017 - yearsOfBirthArray[i]);
    }
    var is18 = [];
    for(var i=0; i<agesArray.length; i++) {
        console.log(agesArray[i] + " " + (agesArray[i]>=18 ? true : false));
        if(agesArray[i] >= 18) {
            is18.push(true);
        } else {
            is18.push(false);
        }
    }
    return is18;
}

var full_1 = printFullAge([1977, 1999, 2016]);
var full_2 = printFullAge([1980, 1990, 2000, 2006]);
console.log(full_1);
console.log(full_2);
