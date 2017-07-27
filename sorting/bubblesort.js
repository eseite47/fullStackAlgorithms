function bubbleSort(array){
  if (array.length > 1){
    for (var j=0; j < array.length; j++) {
      for (var i = 0; i < array.length - 1; i++){
        if(array[i] > array[i+1]){
          var holder = array[i];
          array[i] = array[i+1];
          array[i+1] = holder;

        }
      }
    }
  }
  return array;
}
