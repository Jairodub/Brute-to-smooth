class HashTable{
    constructor(size){
        this.data = new Array (size);
    }
    _hash(key) {
        let hash = 0;
        for (let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
      }
      set(key, value){
         let location=_hash(key);
         this.data[location]=value;
      }
      get(key){
          let location = _hash(key);
          return data[location];
      }
}

//Test Cases
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes')); //Expected output 10000
myHashTable.set('apples', 9);
console.log(myHashTable.get('apples')); //Expected output 9
