//Function to calculate sum of all odd numbers.
function calculateOddSum(numbers){
    let sum=0;
    //Iteration over array of numbers.
    for(let i=0;i<numbers.length;i++){
        //checking if number is odd or not.
        if(numbers[i]%2!==0){
            //storing all odd numbers in the variable sum.
            sum+=numbers[i]
        }
    }
    //returning sum of all odd numbres to the function.
    return(sum)
}
//input of array of numbers.
const numbers = [3, 8, 5, 12, 7, 14, 11]

//calling the function to print sum of all odd numbers.
let array1=calculateOddSum(numbers)
console.log("Sum of odd numbers:",array1)

//Function to find any prime number exists in the array.
function containsPrime(numbers){
    let i=0;
    //iterating numbers array till its length.
    while(i<numbers.length){
        var j=1,count=0, found=false;
        //Another iteration on numbers array till length of numbers[i].
        while(j<=numbers[i]){
            //checking wether number is prime or not.
            if(numbers[i]%j===0){
                count++
            }
            j++
        }
        i++
        //checking if count is equal to 2 make found true.
        if(count===2){
            found=true;
            break;
        }
    }
    //returning true value to the function if found is true.
    if(found===true){
        return("true");
    }
    //returning false value to the function if found is false.
    else{
        return("false");
    }
}

//calling the function to print the  value wether true or false.
let array2=containsPrime(numbers);
console.log("Contains prime number:", array2);

function allPrime(numbers){
    let primeNumbers=[],i=0;
    //iterating numbers array till its length.
    while(i<numbers.length){
        var j=1,count=0, found=false;
        //Another iteration on numbers array till length of numbers[i].
        while(j<=numbers[i]){
            //checking wether number is prime or not.
            if(numbers[i]%j===0){
                count++;
            };
            j++;
        }
        //checking if count is equal to 2 make found true.
        if(count===2){
            primeNumbers.push(numbers[i])
        };
        i++
    }
    //returning the all Prime Numbers to the function.
   return(primeNumbers);
}
//calling the function to print the array of all prime numbers.
let prime=allPrime(numbers)
console.log("Prime numbers:", prime);

//funtion to calculate Average Sum of array of numbers.
let average=numbers.reduce((sum,value) =>{
    return((sum+value/numbers.length));
    
},0);

//removing any numbers after point by using math.floor() built in funtion.
let averageOfNumbers=Math.floor(average);

//printing the Average Sum of array of numbers.
console.log("Average of numbers:", averageOfNumbers);

//finding maximum number in the array of numbers using Math.max() built in function.
let maxNumber=Math.max(...numbers);
//finding minimum number in the array of numbers using Math.min() built in function.
let minNumber=Math.min(...numbers);
//printint the maximum and minimum number in the array of numbers.
console.log("Maximum Number:", maxNumber);
console.log("Minimum Number:", minNumber);

//sorting the array uaing .sort() built in function.
let sortedArray=numbers.sort((a,b)=> a-b);
//printint the sorted array of numbers.
console.log("Sorted array:", sortedArray);

//reversing the array using .reverse() built in function.
let reverseArray=numbers.reverse();
//printing the reversed array of numbers.
console.log("Reversed array:", reverseArray);