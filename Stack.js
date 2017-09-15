class Stack {

  constructor(...args) {
    this.size = [...args].length;
    this.storage = [...args];
  }

  push(data) {
    this.storage.push(data);
    this.size++;
  }

  pop() {
    if (this.size) {
      return this.storage.splice(this.size-1, 1)[0];
    }
  }

  print() {
    console.log(this.storage);
  }
}

let stack = new Stack(0);

stack.push(1);
stack.push(2);
stack.push(3);

stack.print();

console.log(stack.pop());
stack.print();