class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    #length = 0;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value) {
        const node = new Node(value);
         if (this.#length === 0) {
             this.head = node;
             this.tail = node;
             this.#length += 1;
         } else {
             this.tail.next = node;
             this.tail = node;
             this.#length += 1;
         }
    }

    get length() {
        return this.#length;
    }

    dequeue() {
        if (this.#length === 0) {
            throw new Error('Нельзя так делать!!! Ололо');
        } else {
            const current = this.head;
            this.head = this.head.next;
            this.#length -= 1;
            return current;
        }
    }
}