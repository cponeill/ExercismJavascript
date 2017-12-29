class LinkedList {
  constructor() {
    // Create an empty list array
    this.list = [];
  }

  push(data) {
    // push data to back of linked list
    this.list.push(data);
  }

  pop() {
    // delete data from back of linked list
    this.list.pop();
  }

  unshift(val) {
    // insert value to front of list
    this.list.unshift(val);
  }

  shift() {
    // delete data from front of the list
    const head = this.list[0];
    this.list.shift();
    return head;
  }

  count() {
    // count the length of the linked list
    return this.list.length;
  }

  delete(val) {
    // delete data from the linked list
    const index =this.list.indexOf(val);
    this.list.splice(index, 1);
  }
}

module.exports = LinkedList;


