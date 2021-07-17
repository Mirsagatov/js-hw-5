//longest word in text
text="the longest word in the sentence";
function longWord(text) {
    var word =text.split(' ');
    var longword = "";
    for( var i = 0; i < word.length; i++) {
        if(word[i].length > longword.length) {
            longword = word[i];
        }
    }
    return longword;
}
console.log(longWord(text));

//sum of numbers in array
array=[13,3,4,5,6]
function sumOfNumbers(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumOfNumbers(array));

//toDoList
