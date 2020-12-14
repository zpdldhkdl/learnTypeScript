const merge = <A,B>(a: A, b: B): A&B => {
    return {
        ...a,
        ...b
    }
}

const merged = merge({ foo: 1 }, { bar: '123213' });

console.log(merged);

const wrap = <T>(param: T) => {
    return {
        param
    }
}

const wrapped = wrap(10);

console.log(wrapped);

interface Items<T> {
    list: T[];
}

const items: Items<string> = {
    list: ['a', 'b', 'c']
}

console.log(items);

class Queue<T> {
    list: T[] = [];

    get length() {
        return this.list.length;
    }

    enqueue(item: T) {
        this.list.push(item);
    }

    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(`length: ${queue.length}`);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

class Stack<T> {
    stack: T[] = [];

    push(item: T) {
        this.stack.push(item);
    }

    pop(): T {
        if (this.stack.length === 0)
            throw new Error(`stack is empty`);

        const top = this.stack[this.stack.length - 1];

        this.stack.pop();

        return top;
    }

    peek(): T {
        return this.stack[this.stack.length - 1];
    }

    isEmpty(): boolean {
        return this.stack.length === 0;
    }
}

const stack = new Stack<number>();

console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek());
console.log(stack.isEmpty());
