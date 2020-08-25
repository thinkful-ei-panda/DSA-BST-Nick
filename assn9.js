import BinartSearchTree from './BST.js';

function main() {
  const nums1 = [3, 1, 4, 6, 9, 2, 5, 7];
  const nums2 = [3, 1, 4, 6, 9, 2, 5, 7];

  console.log(willBeEqualBST(nums1, nums2, nums1.length, 0, 0, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER,));
}

function willBeEqualBST(arr1, arr2, n, i1, i2, min, max) {
  let j = 0, k = 0;

  for (j = i1; j < n; j++)
    if (arr1[j] > min && arr1[j] < max)
      break;
  for (k = i2; k < n; k++)
    if (arr2[k] > min && arr2 < max)
      break;

  if (j === n && k === n)//If the parent element is leaf in both arrays
    return true;
  if ((j === n) ^ (k === n) || arr1[j] !== arr2[k])
    return false;

  return willBeEqualBST(arr1, arr2, n, j + 1, k + 1, arr1[j], max) && willBeEqualBST(arr1, arr2, n, j + 1, k + 1, min, arr1[j]);
}

main();