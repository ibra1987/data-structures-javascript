// create a linked list class and a node class

class Node{
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class LinkedList{
    constructor(value){
        this.head = {
            value:value,
            next:null
        }
        this.tail = this.head
        this.length = 1
    }

    // implementing append method
    append(value){
        // instantiate a node object from the value and set it to point to null at first
        const newNode = new Node(value)
       
      //we set the tail next node the new node
        this.tail.next = newNode

        // to keep track of the tail we reset the tail to hold the appendid value 
        this.tail = newNode
        //set the next node of the new inserted node which is now the tail to null
        newNode.next = null
        // increment linked list length to keep track of number of nodes
        this.length++
        
        // return the linked list itself
        return this

    }

    // implementing prepend method

    prepend(value){
        
        const newNode = new Node(value)
         
        // save the head to a variable current
        const current = this.head
        // reset the head to the new node
        this.head = newNode
        //set the new node next node to the current 
        newNode.next = current
        // increment the length 
        this.length++
        // return the linked list itself
        return this;
    }

    // get a node a specific index

    getNodeByIndex(index){
       
        // perform some checks on the index
        if(index<0){
            index =0
        }
        if(index>this.length-1){
            index = this.length-1
        }
        // create a variable and set it to 0 to keep track wheteher we have reached the index
        let nodeCount =0;
        //set the start of the loop to the head
        let currentNode = this.head;
        //loop through the linked list until we get the specified index 
        while(nodeCount !== index){
            
            currentNode = currentNode.next
            nodeCount++
        }
        //return the currentNode node
        return currentNode
    }
    /* implementing insert method
    in order to inset to a specified index 
    we need to to know the node before and after the node at the specified index*/

    insert(index,value){
        /* performing checks on index
        if index is less than 0 we reset it to 0
        if index is more than length-1 we reset it to length-1
        */
        if(index<0){
            index = 0
        }
        if(index>this.length-1){
            index = this.length-1
        }
        // instatiate node class
        const newNode = new Node(value)
        // get the node before the required index
        let nodeBeforeIndex = this.getNodeByIndex(index-1)
        // get the element to move nextNode is actually the node at the specified index where we want to insert a new node
        const nextNode = nodeBeforeIndex.next
        nodeBeforeIndex.next =newNode
        newNode.next = nextNode
        this.length++;
        return this
    }
    // implement deleting methof

    remove(index){
        /*we want to remove the node with the specified index. so we grab the node just before it and the item that comes after for ex
         we have this linked list 1=>5=>6=>9, if we want to remove the node with the value of 6, we need to grap the item of value 5 and the item of
         value 9 and make the node 6 point to the node 9
        */

         // we grab the item before the wanted node
        const nodeBeforeIndex = this.getNodeByIndex(index-1);
        
        // we get the node after the wanted node
        const nextNode = nodeBeforeIndex.next;
        // set the node before the wanted node point to the node that comes after the wanted node, so the wanted node is no longer beeing pointed by any node
        nodeBeforeIndex.next = nextNode.next;

        // we decrease the length of the linked list
        this.length--

        // return the linked list itself
        return this;
    }

    
}

const mlk = new LinkedList(1)
mlk.append(2)
mlk.append(3)
console.log(JSON.stringify(mlk))
console.log(JSON.stringify(mlk.remove(1)))