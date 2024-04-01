// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223 
numberReverse = (x) => Number(x.toString().split("").reverse().join(""))
// x = 32243;
// console.log(typeof(numberReverse(x)))

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
palindromeChecker = (x) => {
    const fromLeft = x.toLowerCase();
    const fromRight = x.toLowerCase().split("").reverse().join("")
    return fromLeft === fromRight
}
console.log(palindromeChecker("madam"))

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 
combinationsOfString = (x) => {
    const combonation = [];
    for (let i = 0; i < x.length; i++) {
        for (let j = i + 1; j < x.length + 1; j++) {
            combonation.push(x.slice(i, j))
        }
    }
    return combonation;
}
// console.log(combinationsOfString("dog"))


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
sortString = (x) => {
    return x.split("").sort().join("")
}
// console.log(sortString("webmaster"));


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of 
// each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '
uppercaseFirstLetter = (x) => {
    return x.split(" ").map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join(" ")
}
// console.log(uppercaseFirstLetter("the quick brown fox"));


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'
longestWord = (x) => {
    splitArray = x.split(" ")
    lengthArray = splitArray.map(x => x.length) //[3,11,8]
    return splitArray[lengthArray.indexOf(Math.max(...lengthArray))]
}
// console.log(longestWord("Web Development Tutorial"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5
countVowels = (x) => {
    x=x.toLowerCase();
    vowels = ['a', 'e', 'i', 'o', 'u']
    return x.split("").filter(x => vowels.includes(x)).length

}
// console.log(countVowels("The quick brown fox"));


// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
primeNumberChecker = (x) => {
    let isPrime = true;

    if (x > 1) {
        for (let i = 2; i < x; i++) {
            if (x % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    else
        isPrime = false

    return isPrime;
}
// for(let i=0; i<=10; i++){
//     console.log(primeNumberChecker(i)); //check number from 0 to 10, only 2,3,5,7 is prime number
// }


// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
argType = (x) => {
    return typeof (x)
}
// console.log(argType(123));


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
identityMatrix = (x) => {
    for (let i = 0; i < x; i++) {
        let arr = [];
        for (let j = 0; j < x; j++) {
            if (i === j) {
                arr.push("1")
            }
            else arr.push("0")
        }
        console.log(arr);
    }
}
identityMatrix(4);

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 
secondNumber = (x) => {
    let sorted = x.sort((a, b) => a - b)
    let ans = []
    ans.push(sorted[1])
    ans.push(sorted[sorted.length - 2])
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
perfectNumber = (x) => {
    let divisor = [];
    let isPerfect = true;
    if (x < 1) {
        isPerfect = false; //check if number is a positive integer
    }
    for (let i = 0; i < x; i++) {
        if (x % i === 0) {
            divisor.push(i)
        }
    }
    let sum = divisor.reduce((a, b) => a + b)
    if (sum !== x) {
        isPerfect = false //check equal to sum of its proper positive divisors
    }
    if ((sum + x) / 2 !== x) {
        isPerfect = false // check  equal to half the sum of all its positive divisors, this step is redundant
    }
    return isPerfect
}
// console.log(perfectNumber(8128));


// 13. Write a JavaScript function to compute the factors of a positive integer. 
factorNumber = (x) => {
    let arr = []
    for (let i = 0; i <= x; i++) {
        if (x % i === 0) {
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
amountTocoins = (x, y) => {
    let arr = [];
    for (let i = 0; i < y.length; i++) {
        if (x >= y[i]) {
            x -= y[i];
            arr.push(y[i])
            i--;

        }
    }
    return arr
}
// console.log(amountTocoins(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where 
// n is the exponent and b is the bases. Accept b and n from the user and display the result. 
calculateExponent = (b, n) => {
    return b ** n
}
// console.log(calculateExponent(2,4))

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
extractChar = (x, string) => {
    return string.split("").filter((f) => f !== x).join("")
}
// console.log(extractChar("o", "thequickbrownfoxjumpsoverthelazydog"))


// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
occurenceLetter = (x) => {
    arr = x.toLowerCase().replace(" ", "").split("");
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            let w = map.get(arr[i]) + 1;
            map.set(arr[i], w)
        } else {
            map.set(arr[i], 1)
        }
    }
    return map
}
// console.log(occurenceLetter("HEllow world"));

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
binarySearch = (x, array) => {
    isFound = false;
    arr = array.sort((a, b) => a - b);
    let start = 0, end = array.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === x) {
            isFound = true;
            break;
        }
        else if (arr[mid] > x) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return isFound
}
// console.log(binarySearch(78, [21, 34, 43, 57, 66, 78]));


// 19. Write a JavaScript function that returns array elements larger than a number. 
largerElement = (x, array) => array.filter(f => f > x)

// console.log(largerElement(5, [8,1,3,5,7,6]))

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
randomString = (x) => {
    list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    ans = ""
    for (let i = 0; i < x; i++) {
        ans += list.charAt(Math.floor(Math.random() * list.length));
    }
    return ans
}
// console.log(randomString(4))


// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]
subsetCombination = (x, arr) => {
    let result = [];
    recursiveFn = (currentArr, n) => {
        if (currentArr.length === x) {
            //console.log(currentArr)
            result.push([...currentArr])
            // return;
        } 
        // console.log(currentArr)
        else{
            // console.log(currentArr)
            for (let i = n; i < arr.length; i++) {
                currentArr.push(arr[i]);
                recursiveFn(currentArr, i + 1)
                currentArr.pop()

            }
        }
    }
    recursiveFn([], 0)
    return result

}//
// console.log(subsetCombination(3, [1, 2, 3,4,5]))

// function getCombinationSubsets(arr, subsetLength) {
//     const result = [];

//     // 辅助函数，用于递归生成组合
//     function generateCombination(currentSubset, start) {
//         if (currentSubset.length === subsetLength) {
//             result.push(currentSubset.slice()); // 将当前组合添加到结果中
//             return;
//         }

//         for (let i = start; i < arr.length; i++) {
//             currentSubset.push(arr[i]); // 将当前元素添加到当前组合中
//             generateCombination(currentSubset, i + 1); // 递归生成下一个组合
//             currentSubset.pop(); // 回溯，移除最后添加的元素
//         }
//     }

//     generateCombination([], 0); // 从空组合开始生成所有组合
//     return result;
// }

// // 测试示例
// const arr = [1, 2, 3, 4, 5, 6];
// const subsetLength = 4;
// const subsets = getCombinationSubsets(arr, subsetLength);
// console.log(subsets);

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 
countOccurence = (arr, x) => {
    return [...arr].filter(f => f === x).length

}
// console.log(countOccurence('microsoft.com', 'o'))

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 
firstNoRepeat = (x) => {
    for (let i = 0; i < x.length; i++) {
        // console.log(x.replace(x.charAt(i),"").includes(x.charAt(i)))
        if (!x.replace(x.charAt(i), "").includes(x.charAt(i))) {
            return x.charAt(i)
        }
    }
    return "not Found"

}
// console.log(firstNoRepeat('abacddbec'))


// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that 
// works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {  // 两层循环嵌套if条件语句的参考视频见底部
        for (var j = 0; j < len - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;   // 这三局的意思是:
                // var temp = array[j];：创建一个临时变量 temp，用于暂时存储当前位置(例index0)的元素值，以便稍后进行交换。
                // array[j] = array[j + 1];：将下一个位置(index1)的元素值赋值给当前位置(index0)的元素，实现元素交换的第一步。
                // array[j + 1] = temp;：将临时变量中存储的当前位置(index0)的元素值赋值给下一个位置(index1)的元素，实现元素交换的第二步。
                // 简单举例来说，创建临时变量a，先让a=12(index0)，然后把12变成345(令新index0的值等于原index1)，最后再让345=12(把a的值赋给原index1)
                // 因为此时index0已经变成了345，而index0的原值10被储存进了临时变量里，所以此处为345=12(令新index1的值等于原index0)
                // 故，三句操作结束后，结果由【12，345】变为【345,12】
            }
        }
    }
    return arr;
}

// test data
var sampleArray = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
var sortedArray = bubbleSort(sampleArray);
// console.log(sortedArray);
// output: [ 3223, 546, 455, 345, 234, 213, 122,  98,  84,  64, 23,  12,   9,   4,   1 ]


// reference : https://www.bilibili.com/video/BV13J411L72U/?spm_id_from=333.337.search-card.all.click&vd_source=262d8ade3eafcc5f96e584879cc8d9db




// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
longestCountry = (arr) => {
    return arr[arr.map(m => m.length).indexOf(Math.max(...arr.map(m => m.length)))]
}
// console.log(longestCountry(["Australia", "Germany", "United States of America"]))


// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
longestSubstring = (string) => {
    // let result=""
    // for(let i=0; i<str.length; i++){
    //     if(str.substring(i+1).indexOf(str[i])===-1){ //check if charater not repeat
    //         if(str.substring(i+1).length>longest.length){
    //             longest=str.substring(i)
    //         }
    //     }
    //     else if(str.substring(i+1).indexOf(str[i])>0){ //check if character repeat
    //         if(str.substring(i, str.substring(i+1).indexOf(str[i])+1).length>longest.length){
    //             longest=str.substring(i, str.substring(i+1).indexOf(str[i])+1)
    //         }
    //     }
    // }
    // for(let i=0; i<str.length; i++){
    //     let newStr=str.slice(i+1);
    //     let hasValue=newStr.indexOf(i);

    //     if(hasValue===-1){//repeat not found

    //         //console.log(newStr)
    //         if(newStr.length>result.length){
    //             result=newStr
    //         }
    //     }
    //     else{             //found repeated char
    //         temp=str.slice(i,hasValue)
    //         if(temp>result){
    //             result=temp
    //         }
    //     }

    // }


    // for(let i=0; i<str.length; i++){
    //     let newStr=str.slice(i+1)
    //     hasValue=newStr.indexOf(str.charAt(i))
    //     if(hasValue!==-1){
    //         let temp=str.slice(i, hasValue+i+1)
    //         // console.log(hasValue)
    //         // console.log(temp)
    //         if(temp.length>result.length){
    //             result=temp
    //         }
    //     }
    //     else{
    //         let temp=str.slice(i)
    //         // console.log(str.charAt(i))
    //         // console.log(hasValue)
    //         // console.log(temp)
    //         if(temp.split("").filter((item, index) => temp.split("").indexOf(item) !== index)){
    //             longestSubstring()
    //         }
    //         if(temp.length>result.length){
    //             result=temp
    //         }
    //     }

    // }
    // return result

    var max = "", current_string = "", i, char, pos;

    for (i = 0; i < string.length; i += 1) {
        char = string.charAt(i);
        // console.log(char)
        pos = current_string.indexOf(char);
        // console.log(pos)
        if (pos !== -1) {
            // cut "dv" to "v" when you see another "d"
            current_string = current_string.substr(pos + 1);
            // console.log(current_string)
        }
        current_string += char;
        // console.log(current_string)
        // max = Math.max(max, current_string);
        if (current_string.length > max.length) {
            max = current_string
        }
    }
    return max;
    // let max = 0;
    // let start = 0;
    // let map = {};
    // for (let i = 0; i < s.length; i++) {
    //     // console.log(map[s[i]])

    //     if (map[s[i]] > start) {
    //         console.log(map[s[i]])
    //         console.log(start)
    //         start = map[s[i]]
    //         // console.log(start)
    //     }
    //     map[s[i]] = i
    //     // console.log(map)
    //     // console.log(map[s[i]])
    //     max = Math.max(max, i - start + 1)
    // }
    // console.log(start)
    // return max


}
// console.log(longestSubstring("dvdfabcdf")); //output vdfabc


// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem 
// is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, 
// the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, 
// in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves 
// palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
// 编写一个JavaScript函数，返回给定字符串中最长的回文。注:根据维基百科“在计算机科学中，最长回文子串或最长对称因子问题是查找给定字符串的最大长度连续子字符串的问题，
// 该字符串也是回文。例如,"bananas"的最长回文子串是"anana"。最长的回文子串不保证是唯一的;例如,在字符串"abracadabra"中，没有长度大于3的回文子串，但有两个长度为3
// 的回文子串，即"aca"和"ada"。在某些应用程序中，可能需要返回所有最大回文子字符串(即所有自身为的子字符串)回文(不能扩展到更大的回文子串)，而不是只返回一个子串或返
// 回一个回文子串的最大长度。


function longestPalindromeicString(string) {
    if (string.length < 2) {
        return string
    }
    let result = ''
    for (let i = 0; i < string.length; i++) {

        centerOfPalindromicString(i, i) // 回文子串长度是奇数，以遍历过程中第i个索引位的数做中心数向两侧扩散。比如奇数12321，则从string[0]=1开始(包含数字1，因
        // 为单个数字本身就是回文数)开始向两侧扩散，实际扩散方法见下方函数

        centerOfPalindromicString(i, i + 1) // 回文子串长度是偶数，以遍历过程中第i个索引位的数做中心数向两侧扩散。比如偶数34566543，则从string[0]=3和string[1]
        // =4开始(包含数字3和4)开始向两侧扩散，实际扩散方法见下方函数
    }

    function centerOfPalindromicString(m, n) { // 此处定义了上方用到的关于回文字符串中心的函数
        while (m >= 0 && n < string.length && string[m] == string[n]) { // 实际上相当于将i,i和i,i+1定义为m和n方便书写
            // 当m大于等于0(从string[0])，并且n小于等于原数组长度，并且索引为m的数值等于为n的数值时

            m-- // m--向左移动一位
            n++ // n++向右移动一位
            // 例如偶数i=4时，意思是从偶数长度字符串1234554321的第4和第4+1位数字55开始向左右扩散一位，检查4554是否为回文字符串，如果是则继续扩散
            // 例如奇数i=3时，意思是从奇数长度字符串123454321的第4数字4开始向左右扩散一位，检查345是否为回文字符串，如果不是则循环跳出，返回345 ★
        }
        // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
        // 此时m到n的距离为n-m+1，因为由于如上★所说，输出的内容为345不是回文，所以只能取3和5中间的部分，也就是说mn两个边界不能取，所以应该取m+1到n-1的区间，长度是n-m-1
        // 例如跳出的是1234325，可取的部分长度为5，等于[6]-[0]-1
        if (n - m - 1 > result.length) { // 如果当前字符串长度大于上一次循环存下的字符串长度，则更新并给出最新最长的字符串
            // console.log(m, n)

            result = string.slice(m + 1, n) // 此处用到JavaScript中的内置slice方法，常用于对字符串进行切片。slice()方法返回一个新的字符串，包含从开始到结束(不包括结束)的部分。
            // 所以string.slice(m+1, n)表示从索引m+1处开始，到索引n-1处结束的子字符串(包含索引m+1处的字符，但不包含索引n处的字符)
            // 原本的写法应该是string.slice(m + 1, n-1)，但由于“不包含n处”，所以(m+1,n)其实就相当于是m+1到n-1
        }
    }
    return result
};

const string = "bananas"
const Cool = longestPalindromeicString(string)
// console.log(Cool)

// output：anana


// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
sumTwoVar = (a, b) => a + b
multiplyTwoVar = (callback, c) => callback(1, 2) * c

// console.log(multiplyTwoVar(sumTwoVar, 3))

// 29. Write a JavaScript function to get the function name. 
getFuncName = (fn) => {
    return fn.name;
}
// test=()=>{}
// console.log(getFuncName(test))
