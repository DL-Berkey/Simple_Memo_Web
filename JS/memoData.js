class Node {
    // private field 선언
    #uniqueID;
    #shortTitle;
    #title;
    #memo;
    #previousNode;
    #nextNode;


    constructor(title) {
        this.#uniqueID = 1;
        this.#shortTitle = title;
        this.#title = title;
        this.#memo = "";
        this.#previousNode = null;
        this.#nextNode = null;
    }


    setUniqueID(number) {
        this.#uniqueID = number;
    }    


    setTitle(text) {
        this.#title = text;

        if(this.#title.length >= 6) {
            this.#shortTitle = this.#title.substring(0, 7) + "...";
        } else {
            this.#shortTitle = this.#title;
        }
    }


    setMemo(text) {
        this.#memo = text;
    }


    setPreviousNode(node) {
        this.#previousNode = node;
    }


    setNextNode(node) {
        this.#nextNode = node;
    }


    getUniqueID() {
        return this.#uniqueID;
    }


    getShortTitle() {
        return this.#shortTitle;
    }


    getTitle() {
        return this.#title;
    }


    getMemo() {
        return this.#title + "\n" + this.#memo;
    }

    
    getPreviousNode() {
        return this.#previousNode;
    }

    
    getNextNode() {
        return this.#nextNode;
    }
}


class MemoLinkedList {
    constructor() {
        this.head = null;
    }


    createMemo(title) {
        let node = new Node(title);

        if(this.head === null) {
            this.head = node;

        } else {
            let currentNode = this.head;
            while(currentNode.getNextNode() !== null) {
                currentNode = currentNode.getNextNode();
            }

            currentNode.setNextNode(node);
            node.setPreviousNode(currentNode);

            node.setUniqueID(currentNode.getUniqueID() + 1);
        }
        node.setTitle(node.getTitle() + " "  + String(node.getUniqueID()));

        return node;
    }


    deleteMemo(node) {
        currentNode = node.getPreviousNode();
        currentNode.setNextNode(node.getNextNode());
    }


    insert(previousNode, node) {
        nextNode = previousNode.getNextNode();
        previousNode.setNextNode(node);
        node.setNextNode(nextNode);

        node.setUniqueID(nextNode.getUniqueID());

        currentNode = nextNode;
        while(currentNode) {
            currentNode.setUniqueID(currentNode.getUniqueID() + 1);
            currentNode = currentNode.getNextNode();
        }
    }


    getMemo(title) {
        let currentNode = this.head;

        console.log("pre-while")
        console.log(currentNode)
        while(currentNode) {
            console.log("while")
            if(currentNode.getTitle() === title || currentNode.getShortTitle() === title) {
                this.setSelectedNode(currentNode);
                return currentNode;
            }
            currentNode = currentNode.getNextNode();
        }

        return null;
    }


    getAllMemo() {
        let nodeArray = [];
        let currentNode = this.head;

        while(currentNode) {
            nodeArray.push(currentNode);
            currentNode = currentNode.getNextNode();
        }

        return nodeArray;
    }
}