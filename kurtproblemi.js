let result = (input) => {
    let inputMaxValue = Math.max(...input)
    let countArray = Array(inputMaxValue + 1).fill(0)

    input.forEach((item) => {
        countArray[item] += 1
    })
    const countArrayMaxValue = Math.max(...countArray)
    let smallestMode;
    try { 
        countArray.forEach((item, index) => {
            if (item == countArrayMaxValue) {
                smallestMode = index;
                throw BreakException;
            }
        })
    } catch (e) {
        return smallestMode;
    }
    
}

console.log(result([1, 1, 3, 2, 2, 2, 5, 5, 4, 5]))