function split(wholeArray) {
  //code here
  var firstHalf = wholeArray.slice(0, wholeArray.length/2);
  var secondHalf = wholeArray.slice((wholeArray.length/2), wholeArray.length);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
  var merged = [];
  var index1 = 0;
  var index2 = 0;

  while ((index1 < arr1.length) && (index2 < arr2.length)){
    if (arr1[index1] < arr2[index2]){
      merged.push(arr1[index1]);
      index1++;
    } else {
      merged.push(arr2[index2]);
      index2++;
    }
  }

  for (; index1 < arr1.length; index1++){
    merged.push(arr1[index1]);
  }
  for (; index2 < arr2.length; index2++){
    merged.push(arr2[index2]);
  }
  return merged;
}

function mergeSort(arr){
  if (arr.length < 2) {
    return arr; //base case
  }
  var splitUps = split(arr);
  var arrLeft = splitUps[0];
  var arrRight = splitUps[1];
  return merge(mergeSort(arrLeft), mergeSort(arrRight));
}
