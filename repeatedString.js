// Complete the repeatedString function below.

function repeatedString(s, n) {
    const min = 1;
    const maxs = 100;
    const maxn = 1000000000000;
    let as = s.split('').filter(i => i === "a").length;
    if (typeof s === "string"
         && s.length >= min
         && s.length <= maxs
         && n === parseInt(n, 0)
         && n >= min
         && n <= maxn) {
         as = (parseInt(n / s.length, 0) * as) + (s.slice(0, (n % s.length)).split('').filter(i => i === "a").length);
    }
    return as; 
}

// function repeatedString(s, n) {
//     let hash = {};
//     let remainder = n % s.length
//     let lastString = s.slice(0,s.length-remainder-1)
//     let result = 0;

//     if(s === 'a') return n;
    
//     for(let i = 0; i < s.length; i++){
//         if(s[i] === 'a'){
//             hash[s[i]] === undefined ? hash[s[i]] = 1 : hash[s[i]]++;
//         }
//     }

//     if(lastString.length < s.length){
//         for(let i = 0; i < lastString.length; i++){
//             if(lastString[i] === 'a') result++;
//         }
//     }

//     result += hash['a']*((n-1)/s.length);

//     return result;
// }

console.log(repeatedString('aba', 10))