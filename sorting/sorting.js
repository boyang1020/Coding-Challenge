//bubble sort

function bubbleSort(arr) {
	const swap = (arr, index1, index2) => {
		[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
	};

	let noSwap;
	for (let i = arr.length; i > 0; i--) {
		noSwap = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
			noSwap = false;
		}
		if (noSwap) break;
	}
	return arr;
}

// selection sort

function ss(arr) {
	const swap = (arr, i, j) => {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	};

	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		swap(arr, l, i);
	}
	return arr;
}

//binary search

function binarySearch(arr, target) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] == target) {
			return mid;
		} else if (arr[mid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
}

//insertion sort

function is(arr) {
	let currentVal;
	for (let i = 1; i < arr.length; i++) {
		currentVal = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}
	return arr;
}

// merge two sorted arrays

function m2(arr1, arr2) {
	let res = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			res.push(arr1[i]);
			i++;
		} else {
			res.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		res.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		res.push(arr2[j]);
		j++;
	}

	return res;
}

// merge sort arrays

function ms(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = ms(arr.slice(0, mid));
	let right = ms(arr.slice(mid));

	return m2(left, right);
}

//  find pivot index

function pivot(arr, start = 0, end = arr.length - 1) {
	const swap = (arr, i, j) => {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	};

	let pivot = arr[start];
	let swapIndex = start;

	for (let i = start + 1; i <= end; i++) {
		if (arr[i] < pivot) {
			swapIndex++;
			swap(arr, swapIndex, i);
		}
	}
	swap(arr, start, swapIndex);
	return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		quickSort(arr, left, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

// quick sort

// function pivot(arr, start = 0, end = arr.length - 1) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   // We are assuming the pivot is always the first element
//   let pivot = arr[start];
//   let swapIdx = start;

//   for (let i = start + 1; i <= end; i++) {
//     if (pivot > arr[i]) {
//       swapIdx++;
//       swap(arr, swapIdx, i);
//     }
//   }

//   // Swap the pivot from the start the swapPoint
//   swap(arr, start, swapIdx);
//   return swapIdx;
// }

// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     let pivotIndex = pivot(arr, left, right) //3
//     //left
//     quickSort(arr, left, pivotIndex - 1);
//     //right
//     quickSort(arr, pivotIndex + 1, right);
//   }
//   return arr;
// }

console.log(ss([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));

// console.log(qu([ 1,9,17, 11,  8, 15, 13, 16,18,21,19]))
