class Node {
    constructor (value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

class Linkedlist{

    constructor(){
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        
        if(!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.nextNode){
            current = current.nextNode;
        }

        current.nextNode = newNode;
    }

    prepend(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            return;
        }

        newNode.nextNode = this.head;
        this.head = newNode;
    }

    size(){
        let counter = 0;
        let current = this.head;
        while(current){
            counter++;
            current = current.nextNode;
        }
        return counter;
    }

    headN(){
        return this.head;
    }

    tail(){
        let current = this.head;
        if(!current){
            return null;
        }

        while(current.nextNode){
            current = current.nextNode;
        }

        return current;
    }

    at(index){
        let current = this.head;
        let counter = 0;
        if(!current){
            return null;
        }

        while(current){
            if (counter == index){
                return current;
            }
            current = current.nextNode;
            counter++;
            }

        console.log(current);
    }
        

    pop() {
        if (!this.head){
            return null;
        } 

        if (!this.headNode.nextNode) {
            const removed = this.headNode;
            this.headNode = null;
            return removed;
        }

        let current = this.headNode;
        let prev = null;

        while (current.nextNode) {
            prev = current;
            current = current.nextNode;
        }

        prev.nextNode = null;  
        return current;         
    }

    contains(value){
        let current = this.head;

        if(!this.head){
            return null;
        }

        while(current){
            if(current.value == value){
                return true;
            }
            current = current.nextNode;
        }
    }

    find(value){
        let current = this.head;
        let counter = 0;

        if(!this.head){
            return null;
        }

        while(current){
            if(current.value == value){
                return counter;
            }
            current = current.nextNode;
            counter++;
        }
    }

    toString(){
        let current = this.head;
        let str = "";
        while(current){
            str += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        str += "null";
        return str;
    }

}

const list = new Linkedlist();
list.append(10);
list.append(20);
list.prepend(5);

console.log(list.toString());
console.log(list.size());
console.log(list.tail());
console.log(list.contains(10));
console.log(list.find(20));
list.pop();