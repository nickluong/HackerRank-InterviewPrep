function jumpingOnClouds(c){
    let jumps = 0; 
    let i = 0;
    while(i < c.length-1){
        if(i+2 < c.length && c[i+2] === 0) {
            i+=2;
            jumps++;
        }
        else {
            i++;
            jumps++;
        }
    }
    return jumps;
}

console.log(jumpingOnClouds([0,1,0,0,0,1,0]))