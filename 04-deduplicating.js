// 4. Remove duplicates

// Implement a function to delete all duplicated characters in a string and keep only the first occurrence of each character. For example, if the input is string “google”, the result after deletion is “gole”. Test your program with a sentence as well such as "google all that you think can think of".

// I guess technically you could do this with a hash map, but why??
function dedupe(string) {
    let retString = '';
    for (let i = 0; i < string.length; i++) {
        if (!retString.includes(string[i])) retString += string[i];
    }
    return retString;
}

console.log(dedupe('google'));
console.log(dedupe('google all that you think can think of'));