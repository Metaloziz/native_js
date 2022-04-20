class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


class List {

    #length = 0;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    size() {
        return this.#length;
    }

    #changeLength( incrementer ) { // +1 | -1
        this.#length += incrementer;
    }

    append(value) {
        const newNode = new ListNode(value);

        if (this.head === null && this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
            this.#changeLength(1);

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.#changeLength(1);

        return this;
    }

    find(value) {
        if (this.head === null) {
            return null;
        }

        let currentNode = this.head;
        do {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        } while(currentNode);
        return null;
    }

    get(index) {
        if (index < 0) {
            throw new Error('Index can not be negative');
        }

        if (this.head === null) {
            throw new Error('Index outbound of list');
        }

        let currentIndex = 0;
        let currentNode = this.head;
        do {
            if (currentIndex === index) {
                return currentNode;
            }
            currentNode = currentNode.next;
            currentIndex += 1;
        } while(currentNode);
        throw new Error('Index outbound of list');
    }
}