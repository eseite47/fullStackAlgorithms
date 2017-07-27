describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([47, 34, 67, 86, 26])).toEqual([[47, 34],[67, 86, 26]])
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(mergeSort([47, 34, 67, 86, 26])).toEqual([26, 34, 47, 67, 86])
  });
});
