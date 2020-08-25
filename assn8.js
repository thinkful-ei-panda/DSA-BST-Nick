import BinartSearchTree from './BST.js';

function main() {
  const nums = [3, 1, 4, 6, 9, 2, 5, 7];

  const unbalancedBST = new BinartSearchTree();
  const balancedBST = createBalanced(nums.sort());

  for (const i in nums)
    unbalancedBST.insert(nums[i], nums[i]);

  console.log(checkIfBalanced(unbalancedBST));
  console.log(checkIfBalanced(balancedBST));
}

function checkIfBalanced(t) {
  if (!t)
    return true;

  if (t.left)
    if (t.left.left && !t.right)
      return false;

  if (t.right)
    if (t.right.right && !t.left)
      return false;

  if (!checkIfBalanced(t.left) || !checkIfBalanced(t.right))
    return false;

  return true;
}

function createBalanced(arr, start = 0, end = arr.length) {
  if (start >= end)
    return null;

  const middleIndex = Math.floor((start + end) / 2);
  const middleValue = arr[middleIndex];

  const node = new BinartSearchTree(middleValue);

  node.left = createBalanced(arr, start, middleIndex);
  node.right = createBalanced(arr, middleIndex + 1, end);
  return node;
}


main();