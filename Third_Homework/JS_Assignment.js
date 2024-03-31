// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223 
numberReverse=(x)=>Number(x.toString().split("").reverse().join(""))
// x = 32243;
// console.log(typeof(numberReverse(x)))

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
palindromeChecker=(x)=>{
    const fromLeft=x.toLowerCase();
    const fromRight=x.toLowerCase().split("").reverse().join("")
    return fromLeft===fromRight
}
// console.log(palindromeChecker("madam"))

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 
combinationsOfString=(x)=>{
    const combonation=[];
    for(let i=0; i<x.length; i++){
        for(let j=i+1; j<x.length+1; j++){
            combonation.push(x.slice(i,j))
        }
    }
    return combonation;
}
// console.log(combinationsOfString("dog"))


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
sortString=(x)=>{
    return x.split("").sort().join("")
}
// console.log(sortString("webmaster"));


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '
uppercaseFirstLetter=(x)=>{
    return x.split(" ").map((x)=>x.charAt(0).toUpperCase()+x.slice(1)).join(" ")
}
// console.log(uppercaseFirstLetter("the quick brown fox"));


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'
longestWord=(x)=>{
    splitArray=x.split(" ")
    lengthArray=splitArray.map(x=>x.length) //[3,11,8]
    return splitArray[lengthArray.indexOf(Math.max(...lengthArray))]
}
// console.log(longestWord("Web Development Tutorial"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5
countVowels=(x)=>{
    vowels=['a','e','i','o','u']
    return x.split("").filter(x=>vowels.includes(x)).length
    
}
// console.log(countVowels("The quick brown fox"));


// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
primeNumberChecker=(x)=>{
    let isPrime=true;

    if(x>1){
        for(let i=2; i<x; i++){
            if(x%i===0){
                isPrime=false;
                break;
            }
        }
    }
    else
        isPrime=false

    return isPrime;
}
// for(let i=0; i<=10; i++){
//     console.log(primeNumberChecker(i)); //check number from 0 to 10, only 2,3,5,7 is prime number
// }


// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
argType=(x)=>{
    return typeof(x)
}
// console.log(argType(123));


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
identityMatrix=(x)=>{
    for(let i=0; i<x; i++){
        let arr=[];
        for(let j=0; j<x; j++){
            if(i===j){
                arr.push("1")
            }
            else arr.push("0")
        }
        console.log(arr);
    }
}
// identityMatrix(4);

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 
secondNumber=(x)=>{
    let sorted=x.sort((a,b)=>a-b)
    let ans=[]
    ans.push(sorted[1])
    ans.push(sorted[sorted.length-2])
    return ans
}
// console.log(secondNumber([1,2,3,4,5]));


// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, 
// that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number 
// is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, 
// the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
// This is followed by the perfect numbers 496 and 8128.
perfectNumber=(x)=>{
    let divisor=[];
    let isPerfect=true;
    if(x<1){
        isPerfect=false; //check if number is a positive integer
    }
    for(let i=0; i<x; i++){
        if(x%i===0){
            divisor.push(i)
        }
    }
    let sum=divisor.reduce((a,b)=>a+b)
    if(sum!==x){
        isPerfect=false //check equal to sum of its proper positive divisors
    }
    if((sum+x)/2!==x){
        isPerfect=false // check  equal to half the sum of all its positive divisors, this step is redundant
    }
    return isPerfect
}
// console.log(perfectNumber(8128));


// 13. Write a JavaScript function to compute the factors of a positive integer. 
factorNumber=(x)=>{
    let arr=[]
    for(let i=0; i<=x; i++){
        if(x%i===0){
            arr.push(i)
        }
    }
    return arr
}
// console.log(factorNumber(8)) //output [ 1, 2, 4, 8 ]


// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1
amountTocoins=(x, y)=>{
    let arr=[];
    for(let i=0; i<y.length; i++){
        if(x>=y[i]){
            x-=y[i];
            arr.push(y[i])
            i--;
            
        }
    }
    return arr
}
// console.log(amountTocoins(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where 
// n is the exponent and b is the bases. Accept b and n from the user and display the result. 
calculateExponent=(b,n)=>{
    return b**n
}
// console.log(calculateExponent(2,4))

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
extractChar=(x, string)=>{
    return string.split("").filter((f)=>f!==x).join("")
}
// console.log(extractChar("o", "thequickbrownfoxjumpsoverthelazydog"))


// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
occurenceLetter=(x)=>{
    arr=x.toLowerCase().replace(" ", "").split("");
    const map=new Map();
    for(let i=0; i<arr.length; i++){
        if(map.has(arr[i])){
            let w=map.get(arr[i])+1;
            map.set(arr[i], w)
        }else{
            map.set(arr[i], 1)
        }
    }
    return map
}
// console.log(occurenceLetter("HEllow world"));

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
binarySearch=(x, array)=>{
    arr=array.sort((a,b)=>a-b);
    return arr
}
console.log(binarySearch(78, [21, 34, 43, 66, 57, 78]));


// 19. Write a JavaScript function that returns array elements larger than a number. 

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

// 29. Write a JavaScript function to get the function name. 
