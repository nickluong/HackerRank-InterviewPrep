// Complete the countingValleys function below.
function countingValleys(n, s) {

    let height = 0; 
    let result = 0;

    for(let i = 0; i < n-1; i++){
        s[i] === "D" ? height-- : height++
        if(height === -1 && s[i+1] === "U"){
            result++;
        }
    }
    return result;
}

console.log(countingValleys(8, ["D","D","U","U","U","U","D","D"]))