class Queue {

  constructor(...args) {
    this.head = 0;
    this.tail = [...args].length;
    this.stroage = [...args];
  }

  size() {
    return this.tail - this.head;
  }

  enqueue(data) {
    this.stroage.push(data);
    this.tail++;
  }

  dequeue() {
    if (this.size()) {
      const data = this.stroage.splice(this.head, 1)[0];
      this.head++;
      return data;
    }
  }

  print() {
    console.log(this.stroage, this.size());
  }
}

let queue = new Queue(1);

queue.enqueue(2);
queue.enqueue(3);

queue.print();

console.log(queue.dequeue());

queue.print();

queue.enqueue(4);
queue.print();