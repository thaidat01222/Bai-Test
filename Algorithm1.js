random = () => {
    let random = Math.floor(Math.random() * 100);
    return random % 2 == 0;
}

function sleep(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

retry = async (f, delay, retryTime) => {
    let max = retryTime.max;
    if (typeof max === 'string' ||  max <=0 || delay <= 0 || typeof delay === 'string'){
        console.log('loi delay, hoac max')
        return;
    }
    if (max != null ) {
        for (let index = 1; index <= max; index++) {
            console.log(new Date(), 'true after ', index, 'time ');
            if (f) {
                return true;
            }
            await sleep(delay);
            f = random();
        }
        return false;
    } else {
        for (let index = 1; index > 0; index++) {
            console.log(new Date(), 'retry ', index, 'num ', f);
            if (f) {
                return true;
            }          
            await sleep(delay);
            f = random();
        }
        return false
    }

}
let f = random();
let a = retry(f, 1000, { max: 5 });
let result = a.then((res)=>{
    console.log(new Date(),res);
})
