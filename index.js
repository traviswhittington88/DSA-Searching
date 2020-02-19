function binarySearch(array, value, start, end) { //divide the range each time
  var start = start === undefined ? 0: start; // if the start argument is not passed default it to 0
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];
  console.log(start, end);
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

// the function takes 4 arguments: the array, the value to search for, and 
// "optional" start and end indices. If these are omitted teh function uses the 
// start and end of the array.
// if the start index is greater than the end index then clearly the value hasn't
// been found so you return -1.
// Pick and index in the middle of the start and end indices, if the item of 
// that index is equal to the value you are searching for then return the index
// else if the item is less than the value you are searching for then 
// recursively search the right half of the array and if the item was greater
// than the value, recursively search the left side of the array.



// Depth first search DFS

function dfs(values = []) {
  if (this.left) {
    values = this.left.dfs(values);
  }
  values.push = this.value;
  if (this.right) {
    values = this.right.dfs(values);
  }

  return values;
}

function dfs(values = []) {
  if (this.left) {
    values = this.left.dfs(values);
  }
  values.push(this.value);
  if (this.right) {
    values = this.right.dfs(values);
  }
  return values;
}

function dfs(values = []) {
  if (this.left) {
    values = this.left.dfs(values);
  }
  if (this.right) {
    values = this.right.dfs(values);
  }
  values.push(this.value);
}

function dfs(values = []) {
  values.push(this.value);
  if (this.left) {
    values = this.left.dfs(values);
  }
  if (this.right) {
    values = this.right.dfs(values);
  }
  return values;
}