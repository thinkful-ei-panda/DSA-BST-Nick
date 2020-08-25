import BinartSearchTree from './BST.js';

function main() {
  const BST = new BinartSearchTree();

  const nums = [3, 1, 4, 6, 9, 2, 5, 7];
  for (const i in nums)
    BST.insert(nums[i], nums[i]);

  console.log(treeHeight(BST));
  BST.print();
}

// returns the height of a BST at O(log(n)) 
function treeHeight(t) {
  if (!t) {
    return 1;
  }
  return treeHeight(findMax(t.left, t.right)) + 1;
}

function findMax(a, b) {
  if (!a)
    return b;
  if (!b)
    return a;
  if (!a && !b)
    return 0;
  return (a.key >= b.key) ? a : b;
}

main();