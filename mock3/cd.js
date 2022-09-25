function runProgram(input){
    input = input.trim().split("\n");
    let t = +input[0];
    let line = 1;
    for(let x=0; x<t; x++){
        let n = +input[line++];
        let secret = input[line++].trim().split("").map(Number);
        let guess = input[line++].trim().split("").map(Number);
        cowBull(n,secret,guess);
    }
}

function cowBull(n,secret,guess){
    let i = 0;
    let j = 0;
    let obj1 = {};
    let obj2 = {};
    for(let p=0; p<n; p++){
        if(secret[p]===guess[p]){
            i++;
        }else{
           obj1[secret[p]] = (obj1[secret[p]] || 0) + 1;
           obj2[guess[p]] = (obj2[guess[p]] || 0) + 1;
        }
    }

    // console.log(obj1,obj2);
    
    for(let x in obj1){
        j += Math.min(obj1[x],(obj2[x]||0));
    }
    
    console.log(i+"A"+j+"B");
}