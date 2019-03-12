// Write a function that takes an array of characters and reverses the letters in place.
// credit to interview cake

function reverse(arrayOfChars) {

    // Reverse the input array of characters in place
    
  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;
  
  while(leftIndex < rightIndex) {
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;
    
    leftIndex++;
    rightIndex--;
  }
  }
  
  
  