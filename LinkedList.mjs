import Node from "./Node.mjs";
export default class {
    constructor(nodes) {
        this.nodes = nodes;
        this.size = 1;
    }
    add(node) {
        let currentNode = this.nodes;
        if (currentNode === null) {
            this.nodes = new Node(node.key, node.value);
        } else if (currentNode.key === node.key) {
            currentNode.value = node.value;
        } else {
            for (let i = 0; i < this.size; i++) {
                if (currentNode.nextNode === null) {
                    currentNode.nextNode = new Node(node.key, node.value);
                    this.size++;
                } else {
                    currentNode = currentNode.nextNode;
                }
            }
        }
    }
    get(nodeKey) {
        let currentNode = this.nodes;
        for (let i = 0; i < this.size; i++) {
            if (currentNode.key === nodeKey) {
                return currentNode;
            } else {
                currentNode = currentNode.nextNode;
            }
        }
        return null;
    }
    delete(nodeKey) {
        let currentNode = this.nodes;
        if (currentNode.key === nodeKey && currentNode.nextNode !== null) {
            currentNode.key = currentNode.nextNode.key;
            currentNode.value = currentNode.nextNode.value;
            currentNode.nextNode = currentNode.nextNode.nextNode;
        } else {
            while (currentNode.nextNode !== null) {
                if (currentNode.nextNode.key === nodeKey) {
                    currentNode.nextNode = currentNode.nextNode.nextNode;
                }
            }
        }
        this.size--;
    }
}