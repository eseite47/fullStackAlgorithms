describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with one item', function(){
    expect( bubbleSort([47] )).toEqual( [47] );
  });
  it('handles an array with multiple items', function(){
    expect( bubbleSort([55, 10, 205, 32] )).toEqual( [10, 32, 55, 205] );
  });
});
