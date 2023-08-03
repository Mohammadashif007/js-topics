// 1. Print hello world

// const hello = function(){
//     console.log("hello world");
// }

// hello();


// 2. square of a number

// const squareNum = function(n){
//     const square = n * n;
//     return square;
// }

// const result = squareNum(12);
// console.log(result);

// function squareNum(n){
//     const square = n*n;
//     console.log(square);
// }
// squareNum(105);


// 3. Celsius to Fahrenheit 

// const celsiusToFahrenheit = function(c){
//     const fahrenheit = c*(9/5)+32;
//     return fahrenheit;
// }

// const result = celsiusToFahrenheit(30);
// console.log(result);

// 4. Rectangle area find 

// const rectangle = function(w, h){
//     const area = w * h;
//     return area;
// }

// const result = rectangle(105, 10);
// console.log(result);


// 5. Circle perimeter 

// const circleToPerimeter = function(r){
//     const perimeter = 2*3.14*r;
//     return perimeter;
// }

// const result = parseFloat(circleToPerimeter(90).toFixed(2));
// console.log(result);

// 6. Reverse a number 

// const reverseNumber = function(num){
//     let reverse = 0;
//     while(num != 0){
//         reverse = reverse * 10;
//         reverse = reverse + num % 10;
//         num = Math.trunc(num/10);
//     }
//     return reverse;
// }

// const result = reverseNumber(123);
// console.log(result);

// function reverseNumber(num){
//     let reverse = 0;
//     while(num != 0){
//         reverse = reverse * 10;
//         reverse = reverse + num % 10;
//         num = Math.trunc((num/10));
//     }
//     return reverse;
// }

// console.log(reverseNumber(123));


// 7. Count number of vowels

// const countVowels = function(str){
//     let vowels = 0;
//     for(let i = 0; i <= str.length; i++){
//         if(str.charAt(i) == "a" || str.charAt(i) == "e"|| str.charAt(i) == "i"|| str.charAt(i) == "o" || str.charAt(i) == "u" ){
//             vowels += 1;
//         }
//     }
//     return vowels;
// }

// console.log(countVowels("hello"));
// console.log(countVowels("union"));
// console.log(countVowels("Universe"))

