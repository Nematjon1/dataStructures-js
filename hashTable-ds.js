module.exports = class HashTable {
  constructor() {
    this.table = new Array(137);
  }

  put(key, data) {
    const pos = this.hashFn(data);
    this.table[pos] = data;
  }

  get(key) {
    return this.table[this.hashFn(key)];
  }

  showDistro() {
    let n = 0;
    for(let i = 0; i < this.table.length; ++i) {
      if(this.table[i] !== undefined) {
        console.log(`${i}: ${this.table[i]}`);
      }
    }
  }

  hashFn(string) {
    const hornerPrime = 37;
    let total = 0;
    for(let i = 0; i < string.length; ++i) {
      total += hornerPrime * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if(total < 0) {
      total += this.table.length - 1;
    }

    return parseInt(total);
  }
}

function example() {
  const someNames = ["david", "jennifer", "donnie", "danny", "raymond", "cynthia", "mike", "clayton", "jonathan"];

  const hTable = new HashTable();
  for(let i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
  }

  hTable.showDistro();
}
