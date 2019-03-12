function mergeArrays(myArray, alicesArray) {
    const meragedArray = [];
    let currentMeragedArrayIndex = 0;
    let currentIndexMine = 0;
    let currentIndexAlice = 0;

    while (currentMeragedArrayIndex < (myArray.length + alicesArray.length)) {
        const isMyArrayExhausted = currentIndexMine >= myArray.length;
        const isAlicesArrayExhausted = currentIndexAlice >= alicesArray.length;

        if(!isMyArrayExhausted && (isAlicesArrayExhausted || (myArray[currentIndexMine] < alicesArray[currentIndexAlice]))) {
              meragedArray[currentMeragedArrayIndex] = myArray[currentIndexMine];
              currentIndexMine++;

        }else {
            meragedArray[currentMeragedArrayIndex] = alicesArray[currentIndexAlice];
            currentIndexAlice++;
        }
        currentMeragedArrayIndex++;
    }
    return meragedArray;
}