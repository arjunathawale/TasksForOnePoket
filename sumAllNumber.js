const sumfunction = () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let totalSum = 0;
    // solution 1
    // totalSum = numbers.reduce((preVal, curVal) => preVal + curVal, 0)



    // solution 2
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        totalSum += element
    }
    console.log(totalSum);
}


sumfunction()