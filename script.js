// Write a JavaScript function that generates all combinations of a string( example : 'dog' → d,do,dog,o,og,g)

function generateString(str){
    if( str.length <= 1 ){
        return str;
    }
    const ans = [];
    for(let i=0; i<str.length; i++){
        let a = "";
        for(let j=i; j<str.length; j++){
            a += str[j];
            ans.push(a);
        }
    }
    return ans;
}

function generate(){
    // var str = prompt("Enter a string");
    let str = document.getElementById("que1Input").value;
    if(str!=null){
        let temp = document.getElementById("que1");
        temp.innerHTML = "<h3>"+generateString(str)+"</h3>";
    }
}

// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// (example: 'Web Development Tutorial' → 'Development')

function largestString(str){
    if(str.length<=1){
        return str;
    }
    const arr = str.split(" ");
    // put first element in the s variable
    let s = arr[0];
    // put a length of the first element in the len
    let len = arr[0].length;
    
    for(let i=1; i<arr.length; i++){
        if(arr[i].length>len){
            s = arr[i];
            len = arr[i].length;
        }
    }
    return s;
}

function str(){
    let str = document.getElementById("que5Input").value;
    // var str = prompt("Enter a string");
    if(str!=null){
        let temp = document.getElementById("que5");
        temp.innerHTML = "<h3>"+largestString(str)+"</h3>";
    }
}

// Write a JavaScript function to compute the factors of a positive integer.(example : factor(15) → [1,3,5,15])

function factors(str){
    let num = parseInt(str);
    if(isNaN(num) || num<=0){
        return "Invalid Input";
    }
    if(num===1){
        return [1];
    }
    let arr = [1];
    for(let i=2; i<=num/2; i++){
        if(num%i === 0){
            arr.push(i);
        }
    }
    arr.push(num);
    return arr;
}

function fact(){
    var str = parseInt(document.getElementById("que6Input").value);
    if(str!=null){
        let temp = document.getElementById("que6");
        temp.innerHTML = "<h3>"+factors(str)+"</h3>";
    }
}

// Write a JavaScript function to find the first not repeated character.(example: 'abacddbec' → ‘e’)

function notRepeatCharacter(str){
    if(str.length<=1){
        return str;
    }  
    let map = new Map();
    for(let i=0; i<str.length; i++){
        if(map.has(str[i])){
            // If character already in the map than set their value is true
            map.set(str[i], true);
        }else{
            // If character not in the map than and char in map and set the value false
            map.set(str[i], false);
        }
    }
    for(const[key, value] of map.entries()){
        // traverse the map if we find the value false then we return the
        if(value == false){
            return key;
        }
    }
    return "all character are repeated";
}

function notRepeateChar(){
    let str = document.getElementById("que2Input").value;
    if(str!=null){
        let temp = document.getElementById("que2");
        temp.innerHTML = "<h3>"+notRepeatCharacter(str)+"</h3>";
    }
}

// Write a JavaScript function that reverses a number (example: 32243 → 34223)

function reverse(str){
    let num = parseInt(str);
    if(isNaN(num) || num<=0){
        return "Invalid Input";
    }
    if(num===1){
        return [1];
    }
    let ans=0;
    while(num>0){
        let a = num%10;
        ans = ans*10 + a;
        let temp = parseInt(num/10);
        num = temp;
    }
    return ans;
}

function reverseNumber(){
    var str = parseInt(document.getElementById("que3Input").value);
    if(str!=null){
        let temp = document.getElementById("que3");
        temp.innerHTML = "<h3>"+reverse(str)+"</h3>";
    }
}

// Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
// (example: [1, 2, 3] and subset length is 2 →  [[2, 1], [3, 1], [3, 2], [3, 2, 1]])

function subsets(arr, num){
    let n = arr.length;
    let ans = [];
    // Here loop start from 0 to end with 2^n (1<<n) because the total number of subset of given set if 2^n
    for(let i=0; i<(1<<n); i++){
        let temp = [];
        // Here loop start from 0 to n
        for(let j=0; j<n; j++){
            // Here we check bit is set or not if bit is set than add a number in the temp arr
            // For example i=5
            // j=0 --> 001&101 = 1 --> so add first element of set
            // j=1 --> 010&101 = 0 --> so don't add second element of the set
            if((1<<j)&i){
                temp.push(arr[j]);
            }
        }
        // check if given num is in the temp arr if yes then add temp arr into the ans arr
        for(let j=0; j<temp.length; j++){
            if(temp[j]===num){
                ans.push(temp);
                break
            }
        }
    }
    return ans;
    
}
function fixedLenSubsets(){
    let str = document.getElementById("que4aInput").value;
    let arr = JSON.parse(str);
    let num = parseInt(document.getElementById("que4bInput").value);
    let ans = subsets(arr, num);
    if(str!=null){
        let temp = document.getElementById("que4");
        temp.innerHTML = "";
        for(let i=0; i<ans.length; i++){
            let formattedStr = "["+ans[i].join(", ")+"]";
            let paragraph = document.createElement("p");
            paragraph.textContent = formattedStr;
            temp.appendChild(paragraph);
        }
    }
}












