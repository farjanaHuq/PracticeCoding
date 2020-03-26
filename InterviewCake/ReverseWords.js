//Write a function reverse_words() that takes a message as a list of characters and reverses the order of the words 
//in place. 
//For example:

// message = [ 'c', 'a', 'k', 'e', ' ',
// 'p', 'o', 'u', 'n', 'd', ' ',
// 's', 't', 'e', 'a', 'l' ]

// reverse_words(message)

// # Prints: 'steal pound cake'
// print ''.join(message)

var reverse_words = function(array){
    var newArr = [];
    var reverseWords = '';
    
    for(let char of array){
        if(char === ' '){
            newArr+= ' ';
        }else{
            newArr+= char;
        }
    }
    reverseWords = newArr.split(' ').reverse().join(" ");
    return reverseWords;
}

let message = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ]
console.log(reverse_words(message));