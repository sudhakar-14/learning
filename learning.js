// const FirstName = document.getElementById("firstName").value
// const LastName = document.getElementById("lastName").value

// const Lists = []

// const postData = (event) =>{
//     console.log(FirstName)

//     const newList = {
//         id : 1, 
//         FirstName: FirstName, 
//         FirstName:LastName
//     }
//     console.log(newList)
//     Lists.unshift(newList)
// }


// const taskArray = ["a", "b", "c", "a", "b", "c", "a", "e"]

// const printDub = (item) => {

    // const counting = {}
    // let count = 0
    // for (let i = 0; i < item.length; i++) {
    //     if (item[i]  !==  Object.keys(counting)){
    //         counting[item[i]] = 1
    //     }
    //     counting[item[i]]++
        
    // }
    // console.log(counting)

    // let count = []
    // let value = 0
    // let final = {}
    // for (let i = 0; i < item.length; i++) {
    //     if(count.indexOf(item[i]) === -1){
    //         count.push(item[i])
           
    //     }
    // }
    // for (let i = 0; i < item.length; i++){
    //     for(let j=0; j < count.length; j++){
    //         if(count[j] === item[i]){
    //             final[count[j]] = value++
    //         }
    //     }
    // }
    // console.log(final)
// }

// printDub(taskArray)



// function count() {
//     array_elements = ["a", "b", "c", "a", "b", "c", "a", "e", "e", "e", "e", "e", "e", "e", "e", "e"];

//     array_elements.sort();

//     var current = null;
//     var cnt = 0;
//     for (var i = 0; i < array_elements.length; i++) {
//         if (array_elements[i] != current) {
//             if (cnt > 0) {
//                 if (cnt % 2 !==0 && cnt !== 1){
//                     console.log(current + ' comes --> ' + cnt + ' times');
//                 }
//             }
//             current = array_elements[i];
//             cnt = 1;
//         } else {
//             cnt++;
//         }
//     }
//     if (cnt > 0) {
//         if (cnt % 2 !==0 && cnt !== 1){
//         console.log(current + ' comes --> ' + cnt + ' times');
//         }
//     }

// }

// count();


// function dublicateFilter() {
//     const Arr = ["a", "b", "d", "c", "g", "a", "b", "d", "g", "a", "b", "d", "c", "b"]
//     Arr.sort()
//     var current = null
//     var count = 0
//     for (let i=0; i<Arr.length; i++){
//         if(Arr[i] != current){
//             if(count > 0){
//                 if(count % 2 != 0 && count != 1){
//                     console.log(current +" " + count +" "+ "times")
//                 }
//             }
//             current = Arr[i]
//             count = 1
//         }
//         else{
//             count++
//         }
//     }
//     if(count > 0){
//         if (count%2 != 0 && count < 1) {
//             console.log(current + count + "times")
//         }
//     }
// }

// dublicateFilter()

// function nonRepeated(str) {
//     for(let i = 0; i < str.length; i++) {
//        let j = str.charAt(i)
//        if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
//          return j;
//        }
//     }
//     return null;
//  }
 
//  nonRepeated(["a", "b", "d", "c", "g", "a", "b", "d", "g", "a", "b", "d", "c", "b"])


// const Input = [[],[]]
// var count = 0

// for (let i=0; i<Input.length; i++){
//   var Inputs = Input[i]

//   if(Input.length==2){
//     for(let j=0; j<Inputs.length; j++){
//       if(Inputs.length == 0){
//         console.log(0)
//       }
//       count += Inputs[j]
//       console.log(count)
//     }
//   } 
//   else if(Input.length == 1){
//     console.log(Inputs)
//   }
// }


// const nums = [[1,2],[2,3]]
// var count = 0

// const findArray = () =>{
//   for(let i=0; i<nums.length; i++){
//     var num = nums[i] 
//   }
//   if(nums.length == 2){
//     for(let j=0; j<num.length; j++){
//       count += num[j]
//     }
//   }
// }

// findArray()

// const arr = [{name: "sudhakar", age:14},{name: "sudha", age:18}]
// for (let i=0; i<arr.length; i++){
//   for (let j in arr[i]){
//     console.log(arr[i][j])
//   }
// }


// arr = [[1,2],[2,3]]
// const CreateNew = () => {
//   const newArr = []
//   for (let i=0; i<arr.length; i++){
//     var value = arr[i]
//     for(let j=0; j<value.length; j++){
//         newArr.push(value[j])
//     }
//   }
//   return newArr
// }
// console.log(CreateNew())



// ****************Find Two Sum****************
// const nums = [2,7,11,15]
// const target = 9
// const findSum = () =>{
//   for(let i=0; i<nums.length; i++){
//     var needNum = target - nums[i]
//     if (nums.includes(needNum) && i != nums.lastIndexOf(needNum)){
//       return [i,nums.lastIndexOf(needNum)]
//     }
//   }
// }
// console.log(findSum(nums,target))

// ****************Best Time to Buy and Sell Stock****************
// var prices = [7,1,5,3,6,4]
// const maxProfit = () => {
//   var left = 0
//   var right = 1
//   var max_Profit = 0
//   while (right < prices.length){
//       if(prices[left] < prices[right]){
//           let profit = prices[right] - prices[left]
//           max_Profit = Math.max(max_Profit, profit)
//       }
//       else{
//           left = right
//       }
//       right++
//   }
//   return max_Profit
// };
// console.log(maxProfit(prices))

// ****************Find Dublicate Numbers****************
// const nums = [0, 1, 2, 3]
// const findDub = () =>{
//   for(let i=0; i<nums.length; i++){
//     var currentNum = nums[i]
//     if(nums.indexOf(currentNum) != nums.lastIndexOf(currentNum)){
//       return true
//     }
//   }
//   return false
// }
// console.log(findDub(nums))

// ****************Common Words****************
// const words = ["bella","label","roller"]
// var dub = []
// for(let i of words){
//   for(let j of i){
//     current = j
//     if(i.indexOf(current) != i.lastIndexOf(current) && !dub.includes(j)){
//       dub.push(current)
//     }
//   }
// }
// console.log(dub)

// ****************Palindrome Number****************
// const revNum = (n) =>{
//   var rev = 0
//   var temp = n
//   while(n > 0){
//     if(n != 0){
//       rev = n%10 + rev*10
//       n = Math.floor(n / 10)
//     }
//   }
//   return rev
// }
// console.log(revNum(2001))

// var rev = 89
// var count = 0
// rev = rev.toString()
// for(let i=0; i<rev.length; i++){
//     count += Number(rev[i])
// }
// console.log(count)

// ****************Memoization****************
// function memoisedFibonacci(n, cache) {
    //     cache = cache || [1, 1]
    //     if (cache[n])
    //         return cache[n]
    //     return cache[n] = memoisedFibonacci(n - 1, cache) +  memoisedFibonacci(n - 2, cache);
    // }
// console.log(memoisedFibonacci(3))

// ****************Joined Two array by ID****************
// var arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ]
// var arr2 = [
//     {"id": 2, "x": 10},
//     {"id": 3, "x": 5}
// ]

// var join = function() {
//     const combinedArray = arr1.concat(arr2);
//     const merged = {};
//     combinedArray.forEach((obj) => {
//       const id = obj.id;
//       if (!merged[id]) {
//         merged[id] = { ...obj };
//       } else {
//         merged[id] = { ...merged[id], ...obj };
//       }
//     });
//     const joinedArray = Object.values(merged);
//     joinedArray.sort((a, b) => a.id - b.id);
  
//     return joinedArray;
//   };

//   console.log(join(arr1,arr2))

// ****************Function Composition****************
// const functions = [x => x + 1, x => x * x, x => 2 * x]
// var x = 4

// const compose = () => {
//     if(functions.length == 0){
//         return x
//     }
//     let input = x
//     for(const func of functions){
//         input = func(input)
//     }
//     return input
// }
// console.log(compose(functions,x))

// const functions = [x => x + 1, x => x * x, x => 2 * x]
// var x = 3

// const Test = () =>{
//     x = functions.reduceRight((val,f)=>f(val),x)
//     return x
// }
// console.log(Test(functions,x))

// ****************Array Reduce without using Reduce method****************
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr * curr; }
// init = 0
// const arrReduce = () =>{
//     if(nums.length == 0) return 0
//     for(let i=0; i<nums.length; i++){
//         init = fn(init,nums[i])
//     }
//     return init
// }
// console.log(arrReduce(nums,fn,init))

// ****************Fibonacci Generator****************
// var fibGenerator = function*() {
//     let a = 0;
//     let b = 1;
//     while(true){
//         yield a;
//         [a,b] = [b, a+b];
//     }

// };
// const gen = fibGenerator();
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2

// ****************Chunk Array****************
// var arr = [1, 2, 3, 4, 5];
// var size = 3;
// var chunk = function() {
//     var ans = [];
//     var index = 0;
  
//     while (index < arr.length) {
//       ans.push(arr.slice(index, index + size));
//       index += size;
//     }
//     return ans;
//   }
// console.log(chunk(arr, size));

// ****************Flatten Deeply Nested Array****************
// var arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// var n = 1
// var ans = []
// const flatArr = () => {
//     for(let i=0; i<arr.length; i++){
//         if(n>0 && Array.isArray(arr[i])) {
//             ans.push(...arr[i].flat(n-1))
//         } else {
//             ans.push(arr[i])
//         }
//     }
//     return ans

//     while(n>0) {
//         arr = arr.flat(n)
//         n = 0
//     }
//     return arr
// }
// console.log(flatArr(arr,n))

// var nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
// var rowsCount = 5
// var colsCount = 4

// const snailTrail = () => {
//     if(nums.length !==  rowsCount * colsCount) return [];
//     let result = Array(rowsCount).fill([]).map(() => []);
//     for(let j = 0; j < nums.length; j++){
//         const i = Math.floor(j / rowsCount);
//         if(i % 2 === 0){
//             result[j % rowsCount][i] = nums[j];
//         }else{
//             result[rowsCount - j % rowsCount - 1][i] = nums[j];
//         }
//     }
//     return result;
//     }
// console.log(snailTrail(nums,rowsCount,colsCount))

// ****************Median of Two Sorted Arrays****************
// var nums1 = [3]
// var nums2 = [-2,-1]
// var newArr = nums1.concat(nums2)
// newArr.sort((a,b) => a-b)
// if(newArr.length%2 == 1){
//     let index = Math.floor(newArr.length/2)
//     console.log(newArr[index].toPrecision(6))
// } else {
//     let index = newArr.length/2
//     var ans = (newArr[index] + newArr[index-1]) /2
//     console.log(ans.toPrecision(6))
// }
// console.log(newArr)

// ****************Find Out Prime Number****************
// const isPrime = (n) =>{
//     if(n <= 1) return `${n} is Not a Prime Number`
//     for(let i=2; i<n; i++){
//         if(n % i == 0) return `${n} is Not a Prime Number` 
//     }
//     return `${n} is a Prime Number`
// }
// console.log(isPrime(541))

// const isPrime = (n) =>{
//     if(n<=1) return n+" is not a prime Number"
//     for(let i=2; i<Math.ceil(Math.sqrt(n)); i++){
//         if(i%2 !== 0){
//             while(n%i == 0){
//                 return n+" is not a Prime Number"
//             }
//         }
//     }
//     return n+" is prime Number"
// }
// console.log(isPrime(21))

// var n = 999983
// const primeOrNot = () =>{

//     if(n !== 2 && n%2 == 0 || n !== 3 && n%3 == 0 || n !== 5 && n%5 == 0 || n !== 7 && n%7 == 0){
//         return "Not a Prime Number-1"
//     } 
//     for(let i=11; i<Math.ceil(n/2); i++){
//         if(i%2 !== 0 && i%3 !== 0 && i%5 !== 0 && i%7 !== 0){
//             if(n%i == 0){
//                 return "Not a Prime Number-2"
//             } else if(i*i > n){
//                 console.log(i)
//                 return "Prime Number"
//             }
//         }
//     }
//     return "Prime Number"
// }   
// console.log(primeOrNot(n))

//****************Get Prime Number using Factorize Method****************
// const factor = (n) => {
//     while(n%2 == 0){
//         console.log(2,)
//         n = n / 2
//     }
//     for(let i=3; i%2 !== 1>Math.floor(Math.sqrt(n))+1; i++){
//         if(i%2 !== 0){
//             while(n%i == 0 && n >= 3){
//                 console.log(i)
//                 n = n/i
//             }
//         }
//     }
//     if(n>2){
//         console.log(`n = ${n}`)
//     }
// }
// console.log(factor(75))

// ****************Get Monday Program****************
// var allDays = new Date(6,2023,0).getDate()
// for(let i=1; i<allDays+1; i++){
//     if(new Date(`2023-06-${i}`).getDay() == 1){
//         console.log(i)
//     }
// }

//****************Find out Prime Numbers into the range****************
// function getPrimes(max) {
//     var sieve = [], i, j, primes = [];
//     for (i = 2; i <= max; ++i) {
//         if (!sieve[i]) {
//             // i has not been marked -- it is prime
//             primes.push(i);
//             for (j = i << 1; j <= max; j += i) {
//                 sieve[j] = true;
//             }
//         }
//     }
//     return primes,sieve;
// }
// console.log(getPrimes(100))

// const getPrimes=num=>Array(num-1).fill().map((e,i)=>2+i).filter((e,i,a)=>a.slice(0,i).every(x=>e%x!==0));
// console.log(getPrimes(100))

// const getPrime = num => {
//     const numbers = Array(num-1).fill().map((e, i) => 2 + i)
//     const primes = numbers.filter((e, i, a) => a.slice(0, i).every(x => e % x !== 0));
//     return primes;
//   }
// console.log(getPrime(100));

// var n = 25
// for(let i=3; i<=n; i++){
//     var count = 3
//     for(let j=2; j<i; j++){
//         if(i%j !== 0){
//             if(count == i){
//                 if(i==3){
//                     console.log(2)
//                 }
//                 console.log(i)
//                 break
//             }
//             count++
//         } else {
//             break
//         }
//     }
// }

// ****************Reverse String****************
// var newArr = []
// const revStr = (s,k) =>{
//     for(let i=0; i<s.length; i++){
//         if((Math.floor(i/k))%2 == 0){
//             newArr.splice(i-i%k,0,s[i])
//         } else {
//             newArr.push(s[i])
//         }
//     }
//     newArr = newArr.join("")
//     return newArr
// }
// console.log(revStr("abcd",2))

// ****************Check Reverse String is a Palindrome or Not****************
// var s = "ab_a"
// var char2 = ""
// for(let i of s){
//     if((/[a-zA-Z0-9]/).test(i)){
//         newChar = char2+i
//     }
// }
// char2 = newChar.toLowerCase()
// var char3 = newChar
// char2 = newChar.split("").reverse().join("")
// if(char3 == char2){
//     console.log(true)
// } else {
//     console.log(false)
// }

// **************Star Pattern Program****************
// var n = 4
// for(let i=1; i<=n; i++){
//     var str = ""
//     for(let j=1; j<=n; j++){
//         if(j>=i){
//             str +="*"
//         } else {
//             str += " "
//         } 
//     }
//     console.log(str)
// }

//****************Pyramid Pattern Program****************
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(' ')
//   }
//   for (let k = 0; k < i; k++) {
//     process.stdout.write('* ')
//   }
//   console.log();
// }

// var n = 5
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         if(j<=n-i){
//             process.stdout.write(" ")
//         } else {
//             process.stdout.write("* ")
//         }
//     }
//     console.log()
// }

// ****************Fibonacci Series****************
// var a = []
// var n = 10
// if(a.length == 0){
//     a.push(0,1)
// }
// for(let i=a.length; i<n; i++){
//     var total = a[a.length-1] + a[a.length-2]
//     a.push(total)
// }
// console.log(a)

// ****************Find Repeated Values Without Sorting****************
// var a = [1,3,2,4,2,2,1]
// var ans = {}

// for(let i=0;i<a.length;i++){
//     if(!ans.hasOwnProperty(a[i].toString())){
//         ans[a[i].toString()] = 1
//     } else{
//         ans[a[i].toString()]++
//     }
// }
// for(let i in ans){
//     if(ans[i]>1){
//         console.log(`${i} is ${ans[i]} times`)
//     }
// }

//****************Palindrome String****************
// var a = "Malayalam"
// var b = []
// var rev = ""
// a = a.toLowerCase()
// for(let i=a.length-1; i>=0; i--){
//     rev += a[i]
// }
// if(a === rev){
//     console.log("It's a Palindrome")
// } else {
//     console.log("Not a Palindrome")
// }

// var str = "abaab"
// var newArr = []
// for(let i=1; i<=str.length; i++){
//     for(let j=0; j<str.length; j++){
//         if(i+j>str.length){
//             break
//         }
//         var palin = str.slice(j,i+j)
//         var rev = ""
//         for(let i=palin.length-1; i>=0; i--){
//             rev += palin[i]
//         }
//         if(palin == rev){
//             newArr.push(palin)
//         }
//     }

// }
// console.log(newArr)

//****************Find 2nd Max Num****************
// var a = [5,1,2,6,8,7]
// var max = -Infinity
// var min = Infinity
// for(let i=0; i<a.length; i++){
//     if(a[i]>max){
//         max = a[i]
//     }
// }
// a.splice(a.indexOf(max),1)
// var max2 = -Infinity
// for(let i=0; i<a.length; i++){
//     if(a[i]>max2){
//         max2 = a[i]
//     }
// }
// console.log(max2)

//****************Find 2nd Min Number****************
// var a = [5,1,2,6,8,7]
// var max = Infinity
// var max2 = Infinity
// for(let i=0; i<a.length; i++){
//     for(var j=0; j<a.length; j++){
//         if(a[j]<max){
//             max = a[j]
//         }
//     }
//     j= 6
//     if(a[i]<max2 && a[i] !== max){
//         max2 = a[i]
//     }
// }
// console.log(max,max2)

//****************Find 3rd Max and Min Number****************
// var a = [3,1,2,6,8,7]
// var newArr = []
// for(let i=0; i<a.length; i++){
//     var max = -Infinity
//     var min = Infinity
//     for(var j=0; j<a.length; j++){
//         if(a[j]>max && !newArr.includes(a[j])){
//             max = a[j]
//         }
//         if(a[j]<min && !newArr.includes(a[j])){
//             min = a[j]
//         }
//     }
//     newArr.push(max,min)
//     if(newArr.length == 6){
//         break
//     } else {
//         j=0
//     }
// }
// console.log(max, min)

//****************Diamond Star Pattern****************
// var n = 5
// for(let i=n; i>0; i--){
//     for(let j=1; j<=n; j++){
//         if(j>=i){
//             process.stdout.write("* ")
//         } else {
//             process.stdout.write(" ")
//         }
//     }
//     console.log()
// }
// for(let i=1; i<=n-1; i++){
//     for(let j=1; j<=n-1; j++){
//         if(j>=i){
//             process.stdout.write(" *")
//         } else {
//             process.stdout.write(" ")
//         }
//     }
//     console.log()
// }


//****************Reverse Whole Words****************
// var s = "  Bob    Loves  Alice   "
// s = s.replace(/\s+/g," ")
// var str = s.trim().split(" ").reverse().join(" ")
// console.log(str)

//****************Diamond Hollow Star Pattern****************
// var n = 6
// for(let i=n; i>0; i--){
//     for(let j=1; j<=n; j++){
//         if(j>=i){
//             if(j == i || j == n){
//                 process.stdout.write("* ")
//             } else{
//                 process.stdout.write("  ")
//             }
//         } else {
//             process.stdout.write(" ")
//         }
//     }
//     console.log()
// }
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         if(j>=i){
//             if(j == i || j == n){
//                 process.stdout.write("* ")
//             } else{
//                 process.stdout.write("  ")
//             }
//         } else {
//             process.stdout.write(" ")
//         }
//     }
//     console.log()
// }
