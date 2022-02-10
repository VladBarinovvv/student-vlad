// задание 1
const data = [
    {
      name: "John",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Peter",
      age: 33,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sam",
      age: 29,
      position: "junior",
      isActive: true,
    },
    {
      name: "Mary",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Steve",
      age: 23,
      position: "middle",
      isActive: true,
    },
    {
      name: "Kate",
      age: 31,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sally",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Jack",
      age: 19,
      position: "middle",
      isActive: true,
    },
  ];

const similarObject = []
const peopleData = data
for (let i = 0 ; i < peopleData.length; i++){
    for (let item of peopleData){
        if (!similarObject[item]) {
            similarObject[item] = 1;
          } 
    }
}

// console.log(peopleData);

// console.log('similarObject', similarObject);

// задание 2

  function ownFilter (arr) {

    let allNegative = [];

    for (let item of arr){
      if (item < 0){
          allNegative.push(item);
      }    
   }
   console.log(allNegative);
};
// ownFilter([10, 20, -5, 3, -5]);


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
    


ownForEach([5, 6, 8]);
 



  



