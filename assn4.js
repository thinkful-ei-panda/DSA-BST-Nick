import BinartSearchTree from './BST.js';

function main() {
  const BST = new BinartSearchTree();

  const nums = [3, 1, 4, 6, 9, 2, 5, 7];
  for (const i in nums)
    BST.insert(nums[i], nums[i]);

  console.log(tree(BST));
}

// adds all values in a BST at O(log(n)) 
function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

main();