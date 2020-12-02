// Create a .js file called HashMaps_drills. In the file import the HashMap module. Create a function called main()
let HashMap = require('./01-hashmap');

function main() {
    // Inside your main() function, create a hash map called lotr.
    let lotr = new HashMap;

    // For your hash map that you have created, set the MAX_LOAD_RATIO = 0.5 and SIZE_RATIO = 3.
    HashMap.MAX_LOAD_RATIO = 0.5;
    HashMap.SIZE_RATIO = 3;

    // Add the following items to your hash map: {"Hobbit": "Bilbo"}, {"Hobbit": "Frodo"}, {"Wizard": "Gandalf"}, {"Human": "Aragorn"}, {"Elf": "Legolas"}, {"Maiar": "The Necromancer"}, {"Maiar": "Sauron"}, {"RingBearer": "Gollum"}, {"LadyOfLight": "Galadriel"}, {"HalfElven": "Arwen"}, {"Ent": "Treebeard"}

    lotr.set('Hobbit', 'Bilbo');
    lotr.set('Hobbit', 'Frodo');
    lotr.set('Wizard', 'Gandalf');
    lotr.set('Human', 'Aragorn');
    lotr.set('Elf', 'Legolas');
    lotr.set('Maiar', 'The Necromancer');
    lotr.set('Maiar', 'Sauron');
    lotr.set('RingBearer', 'Gollum');
    lotr.set('LadyOfLight', 'Galadriel');
    lotr.set('HalfElven', 'Arwen');
    lotr.set('Ent', 'Treebeard');

    // Print your hash map and notice the length and items that are hashed in your hash map. Have you hashed all the items you were asked to?

    console.log(lotr); // No; the second values set to "Hobbit" and "Maiar" overwrote the first.

    // Retrieve the value that is hashed in the key "Maiar" and Hobbit. What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.
    
    console.log(lotr.get('Maiar')); // Sauron
    console.log(lotr.get('Hobbit')); // Frodo
    // Keys must be unique!

    // What is the capacity of your hash table after you have hashed all the above items? Explain your answer.

    // Capacity is 24. When the 5th item was added, the load ratio exceeded the max of .5. The table size was multiplied by the new size_rato, 3, for a new capacity of 24.
}

main();