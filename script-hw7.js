const cube = {
   color: 'black',
   dimensions: {
       height: 100,
       width: 200,
   },
};


const user7 = {
    name: 'john',
};

const userClone = {};
userClone.name = user7.name;

console.log(user7);
console.log(userClone);

const car = {
    name: 'BMW',
    year:'2020',
    price: '20000',
};

const makeClone = (obj) => {
    const clone = {};
  
    for (let key in obj) {
      clone[key] = obj[key];
    }
  
    return clone;
  };

const cubeClone = makeClone(cube);

// console.log (cube);
// console.log(cubeClone);

// задание 1

const timetable = () =>{

do{
const timetable = {
    [prompt ('Ключ:')]: prompt('Значение: ')
  };
  console.log(`timetable`, timetable);
   question = confirm('Еще одна строка?');
 continue
}while (question === true)
}

// timetable();

// задание 2

const salaries = {
  John: "4300.00",
  Ann: "5700.40",
  Pete: "4900.95",
};

function getSalariesSum(salaries) {
  let result = 0;
  for (let name in salaries) {
    result += Number(salaries[name]) * 100;
  }
   
    return result / 100;

} 

const totalResult = getSalariesSum(salaries);
console.log(totalResult);