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

// let result = getOccurrencesCount(["a","f","f","s","f","a"])
// console.log (result);
  
// задание 3

function findExcess(integers) {
  
  let evenArr = [];
  let oddArr = [];

  
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenArr.push(integers[i]);
    } else {
      oddArr.push(integers[i]);
    }
  }

  if (evenArr.length > oddArr.length) {
    return oddArr[0];
  } else {
    return evenArr[0];
  }
}


let result = findExcess([5, 4, 6, 8, 2]);
console.log(result);

