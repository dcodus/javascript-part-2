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

