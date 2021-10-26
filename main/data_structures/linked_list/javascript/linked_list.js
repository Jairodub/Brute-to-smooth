class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) { 
        let newNode={
            value:value,
            next:null
        };
        this.tail.next= newNode;
        this.tail=newNode;
        this.length++;
    }
    prepend(value) {  
        let newNode={
            value:value, 
            next:null
        };
        newNode.next=this.head;
        this.head=newNode;
        this.length++;
   }
   insert(value, index){
        let indexBefore= index-1;
        let currentNode=this.head;
        let newNode={
            value:value,
            next:null
        };
        let currentIndex=0
        
        if(index===0){
        	this.prepend(value);
          	return;
        }
        while(currentNode!=null){
            if(currentIndex===indexBefore){
                newNode.next=currentNode.next;
                currentNode.next=newNode;
                this.length++;
                return;
            }
            currentNode=currentNode.next;
            currentIndex++;
        }
    }
    delete(index){
        let currentNode=this.head;
        let currentIndex=0
        if(this.length===0){
          	return null;
        }else if(index===0){
            this.head=this.head.next;
            this.length--;
            return;
     	}

        while(currentNode!=null){
            if(currentIndex===index-1){
              	if(index===this.length-1){
                      newNode=null;
                }else{
                    newNode=currentNode.next.next;    
                }
                currentNode.next=newNode;
                this.length--;
                return;
            }
        currentNode=currentNode.next;
        currentIndex++;
        }
    }
}
