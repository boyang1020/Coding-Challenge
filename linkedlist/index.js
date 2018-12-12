// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);

    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }
    }

    getFirst() {
        return this.head;
    }

    getLast() {
         if (!this.head) {
             return null;
         }
         
         let node = this.head;
         while(node) {
             if(!node.next) {
                 return node;
             }
             node = node.next;
         }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
       if (!this.head) {
           return;
       }

       this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;

    }

    insertLast() {
        const last = this.getLast();

        if (last) {
            // There are some existing nodes in our chain
           last.next = new node(data);

        }else {
            // Tht chain is empty!
            this.head = new node(data);

        }
    }
}

// const nodeOne = new Node(5);
// const list = new LinkedList();
// list.head = nodeOne;
// list.insertFirst(15);
// list 

module.exports = { Node, LinkedList };
