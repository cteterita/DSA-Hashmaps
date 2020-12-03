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
        return this._hashTable[index].value;
    }


    set(key, value){
        // First, determine if the has map is too full and needs to be resized
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }

        // Find the slot for the given key
        const index = this._findSlot(key);

        if(!this._hashTable[index]){
            this.length++;
        }
        this._hashTable[index] = {
            key,
            value,
            DELETED: false
        }; 
    }

    _findSlot(key) {
        // Hash the key
        const hash = HashMap._hashString(key);
        // Start with the modulus of the hash to find the ideal slot
        const start = hash % this._capacity;

        // Return the first empty/matching slot after the starting slot
        for (let i=start; i<start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._hashTable[index];
            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index;
            }
        }
    }

    _resize(size) {
        const oldSlots = this._hashTable;
        this._capacity = size;
        this.length = 0;
        this._hashTable = [];

        // Rebuild the entire hash table given the new size
        for (const slot of oldSlots) {
            if (slot !== undefined) {
                this.set(slot.key, slot.value);
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