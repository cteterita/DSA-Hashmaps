// 6. Anagram grouping

// Write an algorithm to group a list of words into anagrams. For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].

function groupAnagrams(arr) {
    let groups = {};
    for (let i=0; i < arr.length; i++) {
        let s = arr[i];
        let sorted = s.split('').sort().join('');
        if (!groups[sorted]) {
            groups[sorted] = [s];
        } else {
            groups[sorted].push(s);
        }
    }
    return Object.values(groups);
}

console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));