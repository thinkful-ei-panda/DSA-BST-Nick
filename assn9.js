function main() {
  const nums1 = [3, 5, 4, 6, 1, 0, 2];
  const nums2 = [3, 1, 5, 2, 4, 6, 0];

  console.log(willBeEqualBST(nums1, nums2));
}

function willBeEqualBST(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;

  if (arr1.length === 0)
    return true;

  if (arr1[0] !== arr2[0])
    return false;

  let arrLeft1 = [], arrRight1 = [], arrLeft2 = [], arrRight2 = [];

  for (let i = 0; i < arr1.length; i++) {
    (arr1[i] < arr1[0]) ? arrLeft1.push(arr1[i]) : arrRight1.push(arr1[i]);

    (arr2[i] < arr2[0]) ? arrLeft2.push(arr2[i]) : arrRight2.push(arr2[i]);
  }

  return willBeEqualBST(arrLeft1, arrLeft2) && willBeEqualBST(arrRight1, arrRight2);
}

main();