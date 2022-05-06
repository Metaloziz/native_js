class Node {
    constructor(value, parent = null) {
        this.value = value;
        this.parent = parent;
        this.children = [];
    }
}

class Tree {
    #root
    constructor(value) {
        this.#root = new Node(value);
    }

    walkInDeps(callback) {
        // function helper(node) {
        //     callback(node);
        //     if (node.children.length !== 0) {
        //         node.children.forEach(helper);
        //     }
        // }
        // helper(this.#root);

        ( function helper(node) {
            callback(node);
            if (node.children.length !== 0) {
                node.children.forEach(helper);
            }
        })(this.#root);
    }

    walkInWidth(callback) {
        let arr = [...this.#root.children];
        callback(this.#root);
        let currentNode;
        while (arr.length > 0) {
            currentNode = arr.shift();
            callback(currentNode);
            if(currentNode.children.length !== 0) {
                arr.push(...currentNode.children);
            }
        }
    }

    findByWidth(id) {
        let foundedNode = null;
        this.walkInWidth(node => {
            if (node.value.id === id) {
                foundedNode = node;
            }
        });
        if (foundedNode === null) {
            throw new Error ('There is no node with such id');
        }
        return foundedNode;
    }

    add(value, parentId) {
        const parent = this.findByWidth(parentId);
        const newNode = new Node(value, parent);
        parent.children.push(newNode);
    }
}



const data = [
    {
        itemId: 16,
        order: 1,
        parentItemId: null,
        title: "Item 1",
    },
    {
        itemId: 17,
        order: 0,
        parentItemId: null,
        title: "Item 1",
    },
    {
        itemId: 6,
        order: 4,
        parentItemId: 17,
        title: "Item 1",
    },
    {
        itemId: 7,
        order: 2,
        parentItemId: 17,
        title: "Item 1",
    },
    {
        itemId: 8,
        order: 3,
        parentItemId: 17,
        title: "Item 1",
    },
    {
        itemId: 35,
        order: 15,
        parentItemId: 6,
        title: "Item 1",
    },
    {
        itemId: 22,
        order: 11,
        parentItemId: 6,
        title: "Item 1",
    },
];

function createTree(data) {
    const tree = { children: []}
    const order = {};
    const mappedData = {};
    data.forEach(el => {
        order[el.order] = el; // если нельзя мутировать исходные данные, то тут нужно делать копии
        mappedData[el.itemId] = el;
    });
    // забираем элементы попорядку
    for (let key in order) {
        // забираем ветку
        const branch = mappedData[order[key].itemId];
        if (branch.parentItemId === null) {
            tree.children.push(branch);
        } else {
            const parent = mappedData[branch.parentItemId];
            if (parent.children) {
                parent.children.push(branch);
            } else {
                parent.children = [branch];
            }
        }
    }
    return tree
}

console.log(createTree(data))
