import BinartSearchTree from './BST.js';

function main() {
  const BST = new BinartSearchTree();

  const nums = [3, 1, 4, 6, 9, 2, 5, 7];
  for (const i in nums)
    BST.insert(nums[i], nums[i]);

  console.log(nthLargest(BST, 3));
  // BST.print();
}

function nthLargest(t, n) {
  if (!t)
    return null;

  const allNodes = getAllNodes(t);
  let count = 1;
  let index = allNodes.length - 1;

  while (count < n) {
    index--;
    count++;
  }

  return allNodes[index];
}

function getAllNodes(t, allNodes = []) {
  if (!t)
    return null;

  getAllNodes(t.left, allNodes);
  allNodes.push(t.value);
  getAllNodes(t.right, allNodes);

  return allNodes;
}

main();