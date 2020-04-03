function quickSort(arr) {
  if (arr.length < 2) return arr
  const target = arr[0]
  const left_arr = []
  const right_arr = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < target) {
      left_arr.push(arr[i])
    } else {
      right_arr.push(arr[i])
    }
  }
  return quickSort(left_arr).concat([target], quickSort(right_arr))
}

function selectSort(arr) {
  if (arr.length < 2) return arr
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // let m = arr[minIndex]
    // arr[minIndex] = arr[i]
    // arr[i] = m
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr
}

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let target = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[target] < arr[j]) {
        [arr[target], arr[j]] = [arr[j], arr[target]]
        target = j;
      } else {
        console.log(11)
        break;
      }
    }
  }
  return arr;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

const arrItems = [3, 1, 4, 7, 2, 18, 28, 11, 22, 24, 5]

