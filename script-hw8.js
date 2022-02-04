// const flat = (arr, res = []) => {
//     // const res = [];
  
//     for (let elem of arr) {
//       if (Array.isArray(elem)) {
//         flat(elem, res);
//       } else {
//         res.push(elem);
//       }
//     }
  
//     return res;
//   };
  
//   // const flatArray = flat([[1, 2], [3, 4], 5, [6, 7, 8]]);
//   const flatArray = flat([[1, 2], [3, 4, [11, 12]], 5, [6, 7, 8]]);
  
//   console.log(`flatArray`, flatArray);

  // задание 1

//   const getMean = (arr) =>{

//     let meanTrue = 0;

//     for (let item of arr){
//         // console.log(item);
//       if (item === true){
//           meanTrue += 1;
//       }    
//    }
//    return meanTrue;
// };

// const number = getMean([true, false, false, true, true]);
// console.log(number);

// задание 2

const getOccurrencesCount = (arr) => {
  const res = {};

  for (let item of arr) {
    

    if (!res[item]) {
      res[item] = 1;
    } else {
      res[item] += 1;
    }
  }

  return res;
};

let result = getOccurrencesCount(["a","f","f","s","f","a"])
console.log (result);
  
// задание 3

// function numbers(arr) {
//   let j = false;
//   let d = false;
//   if (((arr[0] % 2 === 0) && (arr[1] % 2 === 0)) || ((arr[1] % 2 === 0) && (arr[2] % 2 === 0))) {
//     d = true;
//   } else {
//     j = true;
//   }

//   if (j) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         return arr[i];
//       }
//     }
//   } else if (d) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 !== 0) {
//         return arr[i];
//       }
//     }
//   }
// }

// let result = numbers([5,7,9,2,3,13] );
// console.log(result);

