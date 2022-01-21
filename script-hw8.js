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
//       let meanTrue = 0;
     
//       for (let i = 0; i < arr.length; i++){
//         if (arr === true){
//             meanTrue += 1;
//         }
//         return meanTrue;
//      }
//   };

//   const number = getMean([true, false, false, true]);
//   console.log(number);

  
  const getMean = (arr) =>{

    let meanTrue = 0;

    for (let item of arr){
        // console.log(item);
      if (item === true){
          meanTrue += 1;
      }    
   }
   return meanTrue;
};

const number = getMean([true, false, false, true, true]);
console.log(number);