import BinartSearchTree from './BST.js';

function main() {
  const BST = new BinartSearchTree();

  // const nums = [3, 1, 4, 6, 9, 2, 5, 7];
  // for (const i in nums)
  //   BST.insert(nums[i], nums[i]);

  const letters = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N',];
  for (const i in letters)
    BST.insert(letters[i], i);


  BST.print();
}

main();