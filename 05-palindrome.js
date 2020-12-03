// 5. Any permutation a palindrome

// Write an algorithm to check whether any anagram of some string is a palindrome. Given some string, "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to the anagram "racecar", which itself is a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no anagram for "north" that would be a palindrome.

let HashMap = require('./01-hashmap');

function isPaligram(string) {
    // we are essentially looking for strings where no more than one character is without an identical mate elswhere in the string
    let unpairedChars = new HashMap;
    for (let i = 0; i < string.length; i++) {
        if (!unpairedChars.get(string[i])) {
            unpairedChars.set(string[i], string[i]);
        } else {
            unpairedChars.delete(string[i]);
        }
    }
    return (unpairedChars.length < 2);
}

console.log(isPaligram('hello')); // false
console.log(isPaligram('acecarr')); // true
console.log(isPaligram('north')); // false