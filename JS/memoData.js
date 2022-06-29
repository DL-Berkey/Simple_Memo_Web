class Node {
    constructor(title) {
        this.shortTitle = title;
        this.title = title;
        this.memo = "";
        this.previousNode = null;
        this.nextNode = null;
    }


    setTitle(text) {
        this.title = text;

        if(this.title.length >= 6) {
            this.shortTitle = this.title.substring(0, 7) + "...";
        } else {
            this.shortTitle = this. title;
        }
    }


    setMemo(text) {
        this.memo = text;
    }


    getShortTitle() {
        return this.shortTitle;
    }


    getTitle() {
        return this.title;
    }


    getMemo() {
        return this.title + "\n" + this.memo;
    }
}


class MemoLinkedList {
    constructor() {
        this.head = null;
        this.selectedNode = null;
    }


    createMemo(title) {
        let node = new Node(title)

        if(this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while(currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }

            currentNode.nextNode = node;
            node.previousNode = currentNode;
            this.setSelectedNode(node);
        }
    }


    deleteMemo(node) {
        currentNode = node.previousNode;
        currentNode.nextNode = node.nextNode;
    }


    insert(previousNode, node) {
        nextNode = previousNode.nextNode;
        previousNode.nextNode = node;
        node.nextNode = nextNode;
        this.setSelectedNode(node);
    }


    getNode(title) {
        let currentNode = this.head;
        
        while(currentNode) {
            if(currentNode.title === title || currentNode.shortTitle === title) {
                this.setSelectedNode(currentNode);
                return currentNode;
            }
            currentNode = currentNode.nextNode;
        }

        return null;
    }


    getAllNode() {
        let nodeArray = [];
        let currentNode = this.head;

        while(currentNode) {
            nodeArray.push(currentNode);
            currentNode = currentNode.nextNode;
        }

        return nodeArray;
    }


    setSelectedNode(node) {
        this.selectedNode = node;
    }

    
    getSelectedNode() {
        return this.selectedNode;
    }
}