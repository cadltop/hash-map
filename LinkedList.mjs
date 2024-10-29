import Node from "./Node.mjs";
export default class {
    constructor(nodes) {
        this.nodes = nodes;
        this.size = 1;
    }
    add(node) {
        let currentNode = this.nodes;
        if (currentNode === null) {
            this.nodes = node;
            this.size++;
        } else {
            for (let i = 0; i < this.size; i++) {
                if (currentNode.key === node.key) {
                    currentNode.value = node.value;
                } else if (currentNode.nextNode === null) {
                    currentNode.nextNode = node;
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
    all() {
        let currentNode = this.nodes;
        const nodeArray = [];
        for (let i = 0; i < this.size; i++) {
            nodeArray.push(currentNode);
            currentNode = currentNode.nextNode;
        }
        return nodeArray;
    }
}