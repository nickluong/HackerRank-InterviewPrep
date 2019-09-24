// Complete the sockMerchant function below.
function sockMerchant(n, ar) {

let colorMap = {};
let result = 0;

for(let i = 0; i < ar.length; i++){
    if(colorMap[ar[i]] === undefined){
         colorMap[ar[i]] = 1
    } else {
        colorMap[ar[i]]++ 
    }
    while(colorMap[ar[i]] >= 2){
        colorMap[ar[i]] -= 2
        result++;
    }
}

return result;
}

console.log(sockMerchant(7, [1,2,1,2,1,3,2]))

