// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let largestSum;
    for(let r = 1; r < 5; r++){
        for(let c = 1; c < 5; c++){
            let sum = (arr[r-1][c-1] + arr[r-1][c] + arr[r-1][c+1] + 
                                       arr[r][c] + 
                       arr[r+1][c-1] + arr[r+1][c] + arr[r+1][c+1])
            if(largestSum === undefined || sum > largestSum) largestSum = sum;
        }
    }
    return largestSum;
}