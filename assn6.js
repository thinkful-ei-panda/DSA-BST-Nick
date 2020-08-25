import BinartSearchTree from './BST.js';

function main() {
  const BST = new BinartSearchTree();

  const nums = [3, 1, 4, 6, 9, 2, 5, 7];
  for (const i in nums)
    BST.insert(nums[i], nums[i]);

  console.log(isBST(BST));
  BST.print();
}

function isBST(t) {
  if (!t)
    return true;

  if (t.left && t.left.value > t.value)
    return false;

  if (t.right && t.right.value < t.value)
    return false;

  if (!isBST(t.left) || !isBST(t.right))
    return false;

  return true;
}

main();
