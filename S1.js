// LInk list
// collection of nodes

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class singlyLinkList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // method to add a new node
  push(value) {
    // make a new node using the value passed to the function
    let newNode = new Node(value);
    // if no head in the list, set the head and tail to be the new created node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // else set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // increment length by one
    this.length++;
    // return the list
    return this;
  }

  // method to remove a node
  pop() {
    // if no nodes in the list return undefined or null
    if (this.length === 0) {
      return null || `undefined`;
    }

    let currentNode = this.head;
    let newTail = currentNode;
    // loop thru the list until you get to the tail
    while (currentNode.next) {
      // set the tail to be the 2nd to last node
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    // set next property of the second to last node to be null
    this.tail.next = null;
    // decrement length of list by 1
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return the value of the removed node
    return currentNode;
  }

  //   shift; remove node from the head

  shift() {
    //   if no nodes return undefined
    if (this.length === 0) {
      return null || `undefined`;
    }
    //   store current property in variable
    let currentHead = this.head;
    // make the head property to be the current head next property
    this.head = currentHead.next;
    // decrement the length by 1
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return the removed node
    return currentHead;
  }

  //   unshift
  // adding new node at the start of the list
  unshift(value) {
    //   create a new node
    let newNode = new Node(value);
    // if no head property, set the current node to be head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // else set newly created node's next property to be the head
    else {
      newNode.next = this.head;
      // set the head property to be the newly created node
      this.head = newNode;
    }
    // decrememt length of list
    this.length++;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return the list
    return this;
  }

  //   get; method that return the position of the node
  get(num) {
    //   if the number is < 0 or >= to the length of the list return null
    if (num < 0 || num >= this.length) {
      return null;
    }
    let currentNode = this.head;
    let counter = 0;
    // loop thru the list until you reach the index and return the node at that specific index
    while (counter !== num) {
      currentNode = currentNode.next;
      counter++;
    }
    // return that value
    return currentNode;
  }

  //   set ; accept two params, a postion or index and value in order to update the item
  set(index, value) {
    //   use get method to find the node to be updated
    let foundNode = this.get(index);
    // if node isn't found return false
    if (foundNode === null) {
      return false;
    }
    // if node is found, set the value of the found node to be the value passed to the function and return true
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
  }
}

const list = new singlyLinkList();
list.push("Benz");
list.push("Audi");
list.push("BMW");
list.push("TOYOTA");
//console.log(list);
//list.pop();
//console.log(list);
//list.shift();
//console.log(list);
//list.unshift("Aston-Martin");
//console.log(list);
const getIndexPos = list.get(2);
console.log(getIndexPos);
const findNode = list.set(3,"TOYOTA")
console.log(findNode)
