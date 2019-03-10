function reverseWords(message) {

    reverseChar(message, 0, message.length - 1);
    
    let currentWordStartIndex = 0;
    for(let i = 0; i < message.length; i++) {
      if(i === message.length || message[i] === ' ') {
        reverseChar(message, currentWordStartIndex, i - 1);
        currentWordStartIndex = i + 1;
        }
      }
    }
    
function reverseChar(message, leftIndex, rightIndex) {
    while (leftIndex < rightIndex) {
        const temp = message[leftIndex];
        message[leftIndex] = message[rightIndex];
        message[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
}