class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    let firstNode = new _Node(item, this.head, null);
    if (this.head) {
      this.head.prev = firstNode;
    }
    this.head = firstNode;
  }

  insertLast(item) {
    if (!this.head) {
      this.insertFirst(item);
      return;
    }
    let tempNode = this.head;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item, null, tempNode);
  }

  insertBefore(item, target) {
    if (target === this.head.value) {
      const newNode = new _Node(item, this.head, null);
      this.head.prev = newNode;
      this.head = newNode;
      return;
    }
    this.currNode = this.head;

    if (!this.head) {
      return null;
    }
    while (currNode.value !== target) {
      if (currNode.next === null) {
        return null;
      } else if (currNode.next.value === target) {
        let previousNode = new _Node(item, currNode.next.currNode);
        currNode.next.prev = previousNode;
        currNode.next = previousNode;
        return;
      } else {
        currNode = currNode.next;
      }
    }
    return null;
  }

  insertAfter(item, target) {
    let currNode = this.find(target);
    let nextNode = new _Node(item, currNode.next, currNode);
    currNode.next.prev = nextNode;
    currNode.next = nextNode;
    return;
  }

  insertArt(item, index, counter = 0, currNode = this.head) {
    if (index === 0) {
      const newNode = new _Node(item, this.head, null);
      this.head.prev = newNode;
      this.head = newNode;
      return;
    }
    if (counter === index - 1) {
      const newNode = new _Node(item, currNode.next, currNode);
      currNode.next.prev = newNode;
      newNode.next = newNode;
      return;
    } else {
      this.insertLast(item, index, counter + 1, currNode.next);
    }
  }
  remove(item) {
    if (!this.head) {
        return null;
    }
    if (this.head.value === item) {
        this.head = this.head.next;
        return;
    }
    let tempNode = this.head;
    while ((tempNode.next !== null) && (tempNode.next.value !== item)) {
        tempNode = tempNode.next;
    }
    if (tempNode.next === null) {
        console.log(`${item} not found`);
        return;
    }
    
    tempNode.next.next.prev = tempNode
    tempNode.next = tempNode.next.next;
    return;
}

find(item) {
    //start at the head of LL
    let currNode = this.head;

    //If the LL is empty, return null
    if(!this.head) {
        return null;
    }

    //loop through nodes in LL
    while(currNode.value !== item) {
        //check if at the end of the list, if so return null
        if(currNode.next === null) {
            return null;
        }
        else {
            //otherwise update to next node
            currNode = currNode.next;
        }
    }

    return currNode;
}
}
