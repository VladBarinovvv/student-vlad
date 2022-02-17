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

  const filterData = (data, filterBy) => {
    const filtered = [];
  
    for (let i = 0; i < data.length; i++) {
      let isMatch = true;
      for (let key in filterBy) {
        if (data[i][key] !== filterBy[key]) {
          isMatch = false;
        }
      }
      if (isMatch) {
        filtered.push(data[i]);
      }
    }
  
    return filtered;
  
  
  };

  // const result = filterData(data, {age: 19, position: "junior"});
  // console.log(result);
    

// задание 2

  const ownFilter = (arr, callback) =>{
    let resultArr = [];

    for(let i=0; i<arr.length; i++ ){
      const operatioResault = callback(arr[i], i, arr);

      if(operatioResault){
        resultArr.push(arr[i]);
      }
    }
    return resultArr;
  }
 

  const ownMap = (arr, callback) =>{
    let resultArr = [];

    for(let i=0; i<arr.length; i++ ){
      const operatioResault = callback(arr[i], i, arr);

      if(operatioResault){
        resultArr.push(arr[i]);
      }
    }
    return resultArr;
  }

  const ownForEach = (arr, callback) => {
    for(let i=0; i<arr.length; i++ ){
       callback(arr[i], i, arr);
  }
  };

