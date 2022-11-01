 //1. Write a program that checks if a given element e is in the array a.
    // Input: e = 3, a = [5, -4.2, 3, 7]
    // Output: yes
    // Input: e = 3, a = [5, -4.2, 18, 7]
    // Output: no
    
    // var inputE = 3;
    // var Arr2 = [5, -4.2, 3, 7];
    // var c = 0;

    // for (arIndex2 in Arr2) {
    //   if (inputE === Arr2[arIndex2]) c++;
    // }

    // if (c > 0) {
    //   console.log("YES");
    // } else {
    //   console.log("NO");
    // }
    // console.log("_____________");

    // 2. Write a program that multiplies every positive element of a given array by 2.
    // Input array: [-3, 11, 5, 3.4, -8]
    // Output array: [-3, 22, 10, 6.8, -8]
    // var Arr3 = [-3, 11, 5, 3.4, -8];
    // var Arr4 = [];

    // for (arrIndex3 in Arr3) {
    //   if (Arr3[arrIndex3] > 0) {
    //     Arr4[Arr4.length] = Arr3[arrIndex3] * 2;
    //   } else {
    //     Arr4[Arr4.length] = Arr3[arrIndex3];
    //   }
    // }

    // console.log(Arr4);
    // console.log("_____________");


    // 3. Write a program that finds the minimum of a given array and prints out its value and index.
    // Input array: [4, 2, 2, -1, 6]
    // Output: -1, 3

    // var niz1 = [4, 2, 2, -1, 6];
    // var minVr = niz1[0];
    // var minIn = 0;

    // for (var i = 0; i < niz1.length; i++) {
    //   if (minVr > niz1[i]) minVr = niz1[i];
    //   if (minVr === niz1[i]) minIn = i;
    // }

    // console.log(
    //   "Minimum u datom nizu je: " + minVr + "i njegov index je " + minIn
    // );
    // console.log("_____________");

    // 4. Write a program that finds the first element larger than minimum and prints out its value.
    // Input array: [4, 2, 2, -1, 6]
    // Output: 2
    var num=[4,-1,3,2,6];

num.sort(compare);
    function compare(a,b){
        return a-b;
    }
    console.log(num);
console.log(num[1]);
// sortiranje niza po vrednosti i nakon toga broj na indexu 1 je drugi najmanji broj u nizu.

    // 5. Write a program that calculates the sum of positive elements in the array.
    // Input array: [3, 11, -5, -3, 2]
    // Output: 16
    // var niz3 = [3, 11, -5, -3, 2];
    // var sum1 = 0;
    // for (Index3 in niz3) {
    //   if (niz3[Index3] > 0) {
    //     sum1 += niz3[Index3];
    //   }
    // }
    // console.log( sum1);
    // console.log("_____________");

    // 6. Write a program that checks if a given array is symmetric.
    // An array is symmetric if it can be read the same way both from the left and the right hand side.
    // Input array: [2, 4, -2, 7, -2, 4, 2]
    // Output: The array is symmetric.
    // Input array: [3, 4, 12, 8]
    // Output: The array isn’t symmetric.

    var simNiz=[2,4,-2,7,-2,4,2];

    for (let index = 0; index < simNiz.length ; index++)
      {
    
        if( simNiz[index]=== simNiz[simNiz.length-index-1]){
            console.log( 'Niz je simetrican')}
    
            else {
                console.log( 'Niz nije simetrican')
            }
        }
    

  

    // 7. Write a program that intertwines two arrays. You can assume the arrays are of the same length.
    // Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
    // Output array: [4, 3, 5, 8, 6, 11, 2, 9]

// function merge(...arrays) {
// let newArray=[];
// for(i=0; i<arrays.length;i++){
//     newArray.push(...arrays[i]);
// } return newArray;
// }
// console.log(merge ([4,5,6,2],[3,8,11,9]));

   
    // 8. Write a program that concatenates two arrays.
    // Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
    // Output array: [4, 5, 6, 2, 3, 8, 11, 9]
    // function merge(...arrays){
    //     let newArray2=[]; 
    //     for( i=0;i< arrays.length;i++){
    //         newArray2.push(...arrays[i]);
    //     } return newArray2
    // }
    // console.log(merge([4,5,6,2],[3,8,11,9]));

   
    // 9. Write a program that deletes a given element e from the array a.
    // Input: e = 2, a = [4, 6, 2, 8, 2, 2]
    // Output array: [4, 6, 8]
    function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }
    
    var result = arrayRemove([4,6,2,8,2,2], 2);
    console.log(result);


    // // 10. Write a program that inserts a given element e on the given position p in the array a.
    // // If the value of the position is greater than the array length, print the error message.
    // // Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
    // // Output: [2, -2, 33, 78, 12, 5, 8]



var sArray = [2, -2, 33, 12, 5, 8];
    var input3 = 78;
    var position = 3;
    var nArray = [];

    if (position > sArray.length) {
      someArr15 = "Error";
    } else {
      for (var ii = 0; ii < sArray.length; ii++) {
        if (ii !== position) {
          sArray[ii] = nArray[ii];
        } else {
          sArray[ii] = input3;
          break;
        }
      }

      for (var jj = position + 1; jj <= sArray.length; jj++) {
        console.log(jj);
        nArray[jj] = sArray[jj - 1];
      }
    } 

    console.log(nArray);