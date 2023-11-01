function fizzBuzz() { //Exercitiu 1
    for(let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0){
            console.log("Fizz")
        } else if (i % 5 === 0){
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz()


function findMissingNumber() { //Exercitiu 2
    const n = arr.length + 1;
    for (let i = 0; i <= n; i++){
        if(!arr.includes(i)) {
            return i
        }
    }
    return null
}
arr = [3,0,1]

const missingNumber = findMissingNumber(arr)
console.log(missingNumber)