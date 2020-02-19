class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    // make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    // if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}


class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  // insert

  // find

  // dfs (depth-first search) //traverse the nodes adding them to a values array
 //if there is a left hand branch, recursively search the nodes there and push 
 // this is called an in-order traversal or search because left branch is visited
 // then the node itself is handled
 // then the right branch is visited
  dfs(values=[]) {   // this is called an in-order traversal or search
    if (this.left) {
      values = this.left.dfs(values);
    }
    values.push(this.value);

    if (this.right) {
      values = this.right.dfs(values);
    }
    return values;
  }

  // depth first search


  dfs(values = []) {
    if (this.left) {
      values = this.left.dfs(values);
    }
    values.push(this.value);

    if (this.right) {
      values = this.right.dfs(values);
    }

    return values;
  }

  bfs(tree, values = []) {
    const queue = new Queue();
    const node = tree.root;
    queue.enqueue(node);
    while (queue.length) {
      const node = queue.dequeue(); // remove from the queue
      values.push(node); // add that value from the queue to an array

      if (node.left) {
        queue.enqueue(node.left); // add left child to the queue
      }

      if (node.right) {
        queue.enqueue(node.right); // right child to queue
      }
    }
    return values;
  }

  bfs(tree, values = []) {
    const queue = new Queue();
    const node = tree.root;
    queue.enqueue(node);

    while (queue.length) {
      const node = queue.dequeue();
      values.push(node);

      if (node.left) {
        queue.enqueue(node.left);
      }

      if (node.right) {
        queue.enqueue(node.right);
      }
    }
    return values;
  }

  bfs(tree, values = []) {
    const queue = new Queue();
    const node = tree.root;
    queue.enqueue(node);

    while (queue.length) {
      const node = queue.dequeue();
      values.push(node);

      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node.right) {
        queue.enqueue(node.right);
      }
    }
    return values;
  }

  dfs(values = []) {  // in-order travsersal/search
    if (this.left) {
      values = this.left.dfs(values);
    }
    values.push(this.value);
    if (this.right) {
      values = this.right.dfs(values);
    }
    return values;
  }

  // remove

  // find minimum

  // replace with
}






function binarySearch(array, value, start, end) {
  let start = start === undefined ? 0 : start;
  let end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }
  
  const index = Math.floor((start + end) / 2);
  const item = array[index];

  if (item == value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index -1);
  }
};

function binarySearch(array, value, start, end) {
  let start = start === undefined ? 0 : start;
  let end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const item = array[index];

  if (item == value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }

};

function binarySearch(array, value, start, end) {
  let start = start === undefined ? 0 : start;
  let end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  if (item == value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index -1);
  }
}