// =============== SIMPLE HASH TABLE IMPLEMENTATION ===============
class HashTable {
  constructor(size) {
    this.table = new Array(size);
  }

  hash(key) {
    return key.length % this.table.length;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    return this.table[this.hash(key)];
  }
}

// Simple Hash Table usage example
let ht = new HashTable(10);
ht.set("name", "John");
console.log(ht.get("name")); // Output: John

// =============== HASH TABLE WITH SEPARATE CHAINING IMPLEMENTATION ===============
class HashTableSC {
  constructor(size) {
    this.table = new Array(size).fill(null).map(() => []);
  }

  hash(key) {
    return key.length % this.table.length;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    for (let pair of this.table[index]) {
      if (pair[0] === key) return pair[1];
    }
    return undefined;
  }
}

// Hash Table with Separate Chaining usage example
let htSC = new HashTableSC(10);
htSC.set("apple", 100);
console.log(htSC.get("apple")); // Output: 100
