//mplement the function sunMix(arr) that gven an array of integers as strings
//and numbers the sum of the array values as f all were numbers


let arr = [3, 9, '7', '3']

const sumMixArray = (arr) => arr.reduce((a,b)=> parseInt(a) + parseInt(b))
    

//console.log(sumMixArray(arr))

let arr2 = [9, 2, 3,8, 7,6,1]

function sum2SmallNumber(arr2){
    let sorted = arr2.sort((a,b) => a-b)
    return sorted[2] + sorted[1]
} 

//console.log(sum2SmallNumber(arr2))

function songDecoder(song) {
    return song.replace(/(WUB)/g, " ").trim()
}
//console.log(songDecoder("WUBWEWUBAREWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))


let letters = "abcdefghijklmnopqrstuvwxyz" 

function scoreWord(word){
    let newWord = word.toLowerCase()
    let score = 0;
    for(let i = 0; i <  newWord.length; i++){
        let indexOfletter = letters.indexOf(newWord[i]) +1
        score =score + indexOfletter
    
    }
    return score
}
//console.log(scoreWord("Elias"))


 

//A function to chec prime factors of a number
// A prime number is a number that can only be devided by itself and one

const primeFactors = (num) => {
    let result = [];
    let number = num;
    let divider = 2;
    while (number > 1){
if(number % divider === 0){
    result.push(divider);
    number = number / divider;
}else{
   divider++;
}
    }
    let formattedResult = result.join('*');
    return `The prime factor of ${num} are ${formattedResult}`;
};

//console.log(primeFactors(20));



//index Position
let arr3 = [1, 2, 3, 5, 7, 9, 6, 10, 4, 8]
let target = 10;

const findTargetOfArr = (arr3, target) => {
let newArr = arr3
    return  newArr.indexOf(target)
}
//console.log(findTargetOfArr(arr3, target))

const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)


console.log(`the system uptime is ${os.uptime()} seconds and released ${os.release}`)

const currentOS = {
    release: os.release(),
    totalmem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);

const fuelPrice = (amount) => {
    

    if (amount < 10) {
        console.log(`N${amount} is a small Amount`)
    }else{
        console.log(`N${amount} is a huge Amount`);
        }
        return amount
    }
    console.log(fuelPrice(20))


// setInterval(() => {
//     console.log('Hello Wolrd')
// }, 1000)

