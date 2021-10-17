class HashTable{
    constructor(size){
        this.data = new Array (size);
        this.items = new Array;
    }
    //Hash Function
    _hash(key) {
        let hash = 0;
        for (let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
      }
    _deleteItem(key, arr){
        let newArray = [];
        for(let i=0; i<arr.length; i++){
            if(key!=arr[i][0]){
                newArray.push(arr[i]);
            }
        }
        return newArray;
    }
    set(key, value){
         let location =this._hash(key);
         if(this.data[location] === undefined){   //When there are no collusions yet
            this.data[location].push([key, value]);
            this.items.push([key,value]);
        }else{
            for(let i=0; i<this.data[location].length; i++){
                if (key === this.data[location][i][0]){   //When key is a duplicate and has a collusion
                    this.data[location][i]=[key,value];
                    this.items.push([key,value]);
                    return;
                }
            }
            this.data[location].push([key, value]);  //When key has a collusion but is not a duplicate
            this.items.push([key,value]);
        }
         
     }
    get(key){
          let location = this._hash(key);
        if(this.data[location] === undefined){  //When key does not exist
            return undefined;
        }else if (this.data[location].length === 1){ //When key exists with no collusions
            return this.data[location][0][1];
        }else{
            for(let i=0; i<this.data[location].length; i++){ //When key exists but has collusions
                if (key === this.data[location][i][0]){
                return this.data[location][i][1];
                }
            } 
        }         
    }
    delete(key){
        let location = this._hash(key);
        if(this.data[location] === undefined){
            return;
        }else if (this.data[location].length ===1){
            this.data[location].pop();
            this.items = this. _deleteItem(key, this.items);
        }else{
           for(let i=0; i<this.data[location].length; i++){
                if (key === this.data[location][i][0]){
                   this.data[location]=this._deleteItem(key, this.data[location]);
                   this.items = this. _deleteItem(key, this.items);
                }
            } 
        }
    }
    keys(){
        return this.items.map(item=> item[0]);
    }
    values(){
        return this.items.map(item=> item[1]);
    }
    allItems(){
        return this.items;
    }

}
