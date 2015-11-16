//One line comment

//A function that sorts according to a function

//REMEMBER that if the return is lower than 0 str2 will be moved to the left
//if the return is larger than 0 str2 will be moved to the right

function longest(str1, str2){
    console.log('comparator was called with: ', str1, str2);
    return str2.length - str1.length;
}

var test = ['hello, how are you?', 'there we go','this is some crazy coding thing'];

test.sort(longest);

//A function that sorts an array of objects based on name length and the email(alphabetically).

var objects = [
    {name: "John", email: "b"},
    {name: "Scooby", email: "a"},
    {name: "Batman", email: "b"},
    {name: "Superman", email: "x"}
];

function sortByLength(a,b){
    return b.name.length - a.name.length
}

function sortEmail(a,b){
    if(b.email.toLowerCase() > a.email.toLowerCase()){
        return -1;
    } else if(b.email.toLowerCase() < a.email.toLowerCase()){
        return 1;
    } else {
        return 0;
    }
}

//objects.sort(sortByLength);
objects.sort(sortEmail);

//A function that is passed to map that squares the numbers in a given array

function square(num){
    return num * num;
}

var test = [2,3,4,5];
var squared = test.map(square);

//A function that squares the "num" property of an object in an array

var test = [{num: 5}, {num: 2}];

function squareFromObj(obj){
    //Every element that will get passed through this function will have its .num property squared
    return obj.num * obj.num;
}

test.map(squareFromObj);

