var hours = 7;

var sumArr = (arr) => {
    let sum = 0;
    arr.forEach(element => sum+=element);
    return sum;
}

var result = [];

var numberOfResult = 0;

var conduct = (k) => {
    let currentSum = sumArr(result);
    if (currentSum>= hours) return;
    for (let i = 1; i<=2; i++){
        
        let newSum = currentSum + i;
        
        result.push(i);

        if (newSum == hours){
            console.log("kết quả = " + result)
            numberOfResult ++;
        } else {
            conduct(k+1)
        }
         result.splice(k,1) 
    }
}

conduct(0);

console.log("số kết quả "+ numberOfResult);