class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list
               and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the Head
    let currNode = this.head;
    // Keep track of the previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found!');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(item, target) {
    // If list is empty
    if (!this.head) {
      return null;
    }
    // If the target is head make new item new head
    if (this.head.value === target) {
      this.insertFirst(item);
    }

    let targetNode = this.head;
    let previousNode = this.head;

    while (targetNode !== null && targetNode.value !== target) {
      previousNode = targetNode;
      targetNode = targetNode.next;
    }
    if (targetNode === null) {
      console.log(`Node with value of ${target} does not exist`);
      return;
    }
    let newItem = new _Node(item, targetNode);
    previousNode.next = newItem;
  }

  insertAfter(item, target) {
    // If list is empty
    if (!this.head) {
      return null;
    }
    // if target is first and only item
    if ((this.head.value = target && this.head.next === null)) {
      this.head.next = new _Node(item, null);
    }
    let targetNode = this.head;
    while (targetNode !== null && targetNode.value !== target) {
      targetNode = targetNode.next;
    }
    if (targetNode === null) {
      console.log('Cannot find target');
      return null;
    }
    let newItem = new _Node(item, targetNode.next);
    targetNode.next = newItem;
  }

  insertAt(item, pos) {
    // If list is empty
    if (!this.head) {
      return null;
    }
    let currNode = this.head;

    for (let counter = 0; counter <= pos; counter++) {
      currNode = currNode.next;
      if (counter === pos) {
        this.insertBefore(item, currNode.value);
      }
    }
    if (currNode.value === null) {
      return null;
    }
  }
}

function display(list) {
  let currNode = list.head;
  if (!list.head) {
    return null;
  }
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(list) {
  let currNode = list.head;
  let counter = 0;
  while (currNode !== null) {
    counter++;
    currNode = currNode.next;
  }
  console.log(counter);
  return counter;
}

function isEmpty(list) {
  return list.head === null;
}

function findPrevious(node, list) {
  let currNode = list.head;
  if (!list.head) {
    return null;
  }
  while (currNode !== null) {
    if (currNode.next.value !== node && currNode.next !== null) {
      return currNode.value;
    }
    currNode = currNode.next;
  }
  console.log('item not found');
  return null;
}

function findLast(list) {
  let currNode = list.head;

  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode.value;
}

function main() {
  const SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');

  //SLL.remove('squirrel'); //Logs Item not found!

  //   SLL.insertBefore('Athena', 'Boomer');
  //   SLL.insertAfter('Hotdog', 'Helo');
  //   SLL.insertAt('Kat', 3);
  //   SLL.remove('Tauhida');

  //display(SLL);
  size(SLL);
  console.log(isEmpty(SLL));
  console.log(findPrevious('helo', SLL));
  console.log(findLast(SLL));
}
main();
