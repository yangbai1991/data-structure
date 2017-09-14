class Event {

  constructor() {
    this.events = {};
  }

  add(type, handler) {
    if (this.events[type] === undefined) {
      this.events[type] = [];
    }
    this.events[type].push(handler);
  }

  fire(event, ...args) {
    if (this.events[event]) {
      const handlers = this.events[event];
      handlers.map(function (handler) {
        typeof handler === 'function' && handler(...args);
      });
    }
  }

  remove(event, handler) {
    if (this.events[event]) {
      const handlers = this.events[event];
      const len = handlers.length;

      for (let i=0; i<len; i++) {
        if (handlers[i] === handler) {
          handlers.splice(i, 1);
          break;
        }
      }
    }
  }
}

let event = new Event();

const handler1 = function (...args) {
  console.log(...args);
}

handler2 = function (...args) {
  console.log(args);
}

event.add('haha', handler1);
event.add('haha', handler2);

event.fire('haha', 1, 2, 3);

event.remove('haha', handler2);

event.fire('haha', 1, 2, 3, 4);

