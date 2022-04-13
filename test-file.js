function ownMap (arr) {

    let incrementPush = [];

    for (let item of arr){
      item += 1; 
      incrementPush.push(item);
   }
   console.log(incrementPush);
};

// ownMap([10, 20, -5, 3, -5]);


    

function ownForEach (array) {
  let ownForEachDid = [];
 for(let index in array){
     ownForEachDid.push(`In array [${array}] on position ${index}: ${array[index]}`);
 }
 console.log(ownForEachDid);
}