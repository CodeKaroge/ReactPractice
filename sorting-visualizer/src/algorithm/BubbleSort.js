export function bubbleSort(array) {
    let animation = []
    let tempArray = [...array];
    for (let i = 0; i < tempArray.length - 1; i++) {
        for (let j = 0; j < tempArray.length - 1; j++) {
            if (tempArray[j] > tempArray[j + 1]) {
                animation.push([j, j + 1, true]);
                let temp = tempArray[j];
                tempArray[j] = tempArray[j + 1];
                tempArray[j + 1] = temp;
            } else {
                animation.push([j, j + 1, false])
            }
        }
    }
    return animation;
}