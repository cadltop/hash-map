import Node from "./Node.mjs";
export default class {
    constructor(nodes) {
        this.nodes = nodes;
        this.size = 1;
    }
    add(node) {
        let currentNode = this.nodes;
            if (currentNode.key === node.key) {
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
}