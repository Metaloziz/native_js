class Node {
    constructor(value, prev) {
        this.value = value;
        this.prev = prev;
    }
}

class Stack {
    #length = 0;
    constructor() {
        this.tail = null;
    }

    push(value) {
        const node = new Node(value, this.tail);
        this.tail = node;
        this.#length += 1;
    }

    pop() {
        if (this.#length === 0) {
            throw new Error('Нельзя так делать!!! Ололо');
        } else {
            const current = this.tail;
            this.tail = this.tail.prev;
            this.#length -= 1;
            return current;
        }
    }
}