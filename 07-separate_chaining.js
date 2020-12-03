// 7. Separate Chaining

// Write another hash map implementation as above, but use separate chaining as the collision resolution mechanism.

class _Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.DELETED = false;
        this.next = null;
    }
}

class _Chain {
    constructor(key, value) {
        this.first = new _Node(key, value);
    }

    findNode(key) {
        let curr = this.first;
        while(curr) {
            if (curr.key === key) return curr;
            curr = curr.next;
        }
        return null;
    }

    findValue(key) {
        let node = this.findNode(key);
        if (node === null) return null;
        return node.value;
    }

    add(key, value) {
        let curr = this.first;
        while(curr) {
            if (curr.next === null) return curr.next = new _Node(key, value);
            curr = curr.next;
        }
    }

    delete(key) {
        let node = this.findNode(key);
        node.DELETED = true;
    }
}

class HashMap {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }

    static _hashString(string) {
        // uses the djb2 algorithm
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0;
    }

    get(key) {
        const index = this._findSlot(key);
        if (this._hashTable[index] === undefined) {
            return null;
        }
        return this._hashTable[index].findValue(key);
    }


    set(key, value){
        // First, determine if the has map is too full and needs to be resized
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }

        // Find the slot for the given key
        const index = this._findSlot(key);
        
        if(!this._hashTable[index]) {
            this._hashTable[index] = new _Chain(key, value);
            this.length++;
        } else if(!this._hashTable[index].findValue(key)){
            this.length++;
        }
        this._hashTable[index].add(key, value);
    }

    _findSlot(key) {
        // Hash the key
        const hash = HashMap._hashString(key);
        // Just return the modulus
        return hash % this._capacity;
    }

    _resize(size) {
        const oldSlots = this._hashTable;
        this._capacity = size;
        this.length = 0;
        this._hashTable = [];

        // Rebuild the entire hash table given the new size
        for (const slot of oldSlots) {
            if (slot !== undefined) {
                let curr = slot.next;
                while (curr) {
                    this.set(curr.key, curr.value);
                    curr = curr.next;
                }
            }
        }
    }


    delete(key) {
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        // rather than actually deleting it, just set it to deleted
        slot.DELETED = true;
        this.length--;
        this._deleted++;
    }
}

module.exports = HashMap;

// Test your hash map with the same values from the lotr hash map.

HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

let lotr = new HashMap;

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

console.log(lotr);