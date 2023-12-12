const array = [1, "2", 5, 3, "5", 4, 5, 6, "7"];
function removeElement(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            arr.splice([i], 1);
            i--;
        }
    }
    return arr;
}

removeElement(array, 5);
console.log(array);
