// 1. Write a code to find the sum of first 10 natural numbers and show that sum on screen.

//  n = 1; sum = 0;
//     do
//     {
//         sum = sum + n;
//         n++;
//     } while (n <= 10);{
//     console.log ("Sum of first 10 natural numbers is :", sum);
//     return 0;}

    // 2.zadatak

    var numA = 3;
    var cube = 1;
    var j = 0;

    while (j <= 2) {
      cube *= numA;
      j++;
    }

    console.log(numA + " cubed is " + cube);
    console.log("_____________");
    
  
    // // 3. Write a code to calculate the factorial of a given number and show it on screen.
    // //Example: The Factorial of 5 is 120.   5 * 4 * 3 * 2 * 1

    var numA=5;
    var faktorijal=1;
    for(var j=numA; j>=1; j--){
      faktorijal *=j   ; }
      console.log(faktorijal);

      // 4. Write a code to display the n terms of even natural number and their sum.
      // Example:
      // Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10". 

      var numOfTerms = 5;
      var evenNums = "";
      var evenSum = 0;

      for (var n = 2; n <= numOfTerms * 2; n++) {
        if (n % 2 === 0) {
          evenNums += " " + n;
          evenSum += n;
        }
      }
  
     console.log(evenNums);
     console.log(evenSum);

    //  5.Write a code to calculate the sum of digits in a number and show that sum on screen.
    //   Example: "Sum of digits in number 232 is 7". 

var num= 234+"0";
var suma=0
for(i=0; i< num.length;i++){
  suma+= +num[i];
}
console.log(suma);

// 6. Write a code to count all letters in a word and show that count on screen. Example: Given word is "Eclip542se".
//  Result should be something like "There is 7 letters in this word".

var rec = "Eclip542se";
    var suma = rec.length;

    for (var index in rec) {
      if (
        rec[index] === "0" ||
        rec[index] === "1" ||
        rec[index] === "2" ||
        rec[index] === "3" ||
        rec[index] === "4" ||
        rec[index] === "5" ||
        rec[index] === "6" ||
        rec[index] === "7" ||
        rec[index] === "8" ||
        rec[index] === "9"
      ) {
        suma--;
      }
    }

    console.log(suma);
    
    // 7. Write a code to find on which index in array is letter "C" and show that index on screen.
    //  Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2]. 

    var niz=[1, 3, 32, "$", "g", "h", "t", "s", "c", 66, 23, "h2"]
    for(var i=0;i< niz.length; i++) {
     if ( niz[i]==="c"){
      console.log( "c se nalazi na mestu"+i);
     }

     }
    