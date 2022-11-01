// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.
// // var number = 15
var number=15;

for (var i = 0; i <= number; i++){
    if (i === 0){
        console.log(i + " is even")
    }
    else if (i % 2 === 0){
        console.log(i + " is even")
    }
    else{
        console.log(i + " is odd")
    }
}
// 2. Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
    for (var x = 0; x < 1000; x++)
    {
        if (x % 3 === 0 || x % 5 === 0)
        {
           sum += x;
        }
    }
    console.log(sum);
    

// 3. Write a program that will iterate from 0 to 10 and display squares of numbers.


     rezultat=1
for (var j = 0; j < 11; j++) {
    rezultat=j*j;
    console.log(rezultat);
}

// // ****Drugi nacin :

// rezultat=1

// for (var j = 0; j < 11; j++) {
//     for(var i=0; i<2; i++)
//     {
//         rezultat=rezultat*j;
//     }

//     for(var i=1; i<2; i++)
//     {
//         rezultat=rezultat*j;
//     }

//     for(var i=2; i<2; i++)
//     {
//         rezultat=rezultat*j;
//     }
//  console.log(rezultat);}

// 4. Write a program to compute the sum and product of an array of integers.

var aArray = [1, 2, 8, 10];
var result = 0;
var result2 = 1;
for (var i = 0; i < aArray.length; i++) {
  result += aArray[i];
  result2 *= aArray[i];
}
console.log("Zbir je " + result + " i proizvod je " + result2);

// 5. Write a program which prints the elements of the following array as a single string.


var aArray = ["1", "A", "B", "c", "r", true, NaN, undefined];
    var bArray = "";
    for (Arrayindex in aArray) {
      bArray += aArray[Arrayindex];
    }
    console.log(bArray);
    


// 6 .Write a program that prints the elements of the following array.

 var array = [

    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
    ];
    

    for(var i=0; i< array.length ; i++) {
        for (s=0; s< array[i].length; s++){
            console.log(array[i][s]);
        }
        
    }
    // 7. Write a program that outputs the sum of squares of the first 20 numbers.

    var SqSum=0
    for( a = 0;a<=20;a++){
        SqSum+=a*a
    }
    console.log(SqSum);


//     8. Write a program that computes average marks of the following students. Then use this
// average to determine the corresponding grade.   
let gradesArray=[80,77,83,91,59];
let average=0;
let suma1=0;

for(let i=0; i<gradesArray.length; i++){
    suma1 += gradesArray[i];
    average = suma1/gradesArray.length;
}console.log("Average grade is: " + average);
    if(average<60){
        console.log("Grade is F.");
    }else if(average>60 && average<70){
        console.log("Grade is D.");
    }else if(average>70 && average<80){
        console.log("Grade is C");
    }else if(average>80 && average<90){
        console.log("Grade is B");
    }else{
        console.log("Grade is A");
    }

    

   // 9. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
    // For numbers divisible by 3, print 'Fizz' instead of the number, and for numbers divisible by 5 (and not 3), print 'Buzz' instead.
    // When you have that working, modify your program to print 'FizzBuzz', for numbers that are divisible by both 3 and 5 (and still print
    // 'Fizz' or 'Buzz' for numbers divisible by only one of those).
    // Note: This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you’ve solved it, you’re now allowed to feel good about yourself.
    // 
    for (var b = 1; b <= 100; b++) {
        if (b % 5 === 0 && b % 3 === 0) {
          console.log("FizzBuzz");
        } else if (b % 3 === 0) {
          console.log("Fizz");
        } else if (b % 5 === 0 && b % 3 !== 0) {
          console.log("Buzz");
        } else {
          console.log(b);
        }
      }
  
      console.log("_____________");

