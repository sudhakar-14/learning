const findPalin = ()  =>{
    var newArr = []
    for(let i=1213; i>=0; i--){
        var rev = 0
        var temp = i
        while(temp>0){
            rev = temp%10 + rev*10
            temp = Math.floor(temp/10)
        }
        if(i === rev){
            return i
        }
    }
}
console.log(findPalin())


// for(let i=100; i<=200; i++){
//     var rev = 0
//     var temp = i
//     while(i > 0){
//         if(i != 0){
//             rev = i%10 + rev*10
//             i = Math.floor(i/10)
//         }
//     }
//     if(temp == rev){
//         console.log(rev)
//     }
// }
