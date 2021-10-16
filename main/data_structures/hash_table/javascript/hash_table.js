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
         let location =this._hash(key);
         if(this.data[location]===undefined){
           	this.data[location]=[];
            this.data[location].push([key, value]);
           	console.log(this.data[location][0]);
         }else{
            for(let i=0; i<this.data[location].length; i++){
                if (key===this.data[location][i][0]){
                    this.data[location][i]=[key,value];
                    return;
                }
            }
            this.data[location].push([key, value]);
         }
         
      }
      get(key){
          let location = this._hash(key);
          if(this.data[location] === undefined){
              return undefined;
          }else if (this.data[location].length ===1){
              return this.data[location][0][1];
          }else{
             for(let i=0; i<this.data[location].length; i++){
                  if (key===this.data[location][i][0]){
                    return this.data[location][i][1];
                  }
              } 
          }         
      }
}
