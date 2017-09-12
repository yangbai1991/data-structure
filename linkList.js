class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getLength() {
    return this.length;
  }

  push(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;

    return this;
  }

  getHead() {
    return this.head;
  }
}


function getIntersectionNode(list1, list2) {
  let head1 = list1.getHead();
  let head2 = list2.getHead();
  const len1 = list1.getLength();
  const len2 = list2.getLength();
  let len = len1 - len2;
  if (len > 0) {
    while (len) {
      head1 = head1.next;
      len--;
    }
  } else {
    while (len) {
      head2 = head2.next;
      len--;
    }
  }

  while (head1 && head2) {
    if (head1.data === head2.data) {
      return head2;
    }
    head1 = head1.next;
    head2 = head2.next;
  }
  
  return null;
}

/**
 * 如果两个链表有交叉节点的话，那么这个交叉节点之后的其他节点都是相同的，也就是说两个链表的结构应该是Y字型的。
 * 4 -> 5 -> 3 -> 12
 * 1 -> 2 -> 3-> 12
 * 到了3这个节点开始交叉
 */

let list1 = new List();
let list2 = new List();

list1.push(4).push(5).push(3).push(12);
list2.push(1).push(2).push(3).push(12);

const node = getIntersectionNode(list1, list2);
console.log(node);
