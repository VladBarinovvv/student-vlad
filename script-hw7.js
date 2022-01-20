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

const salaries = () => {

do {
const salaries = {
  [prompt ('Имя:')]: prompt('Зарплата:')
};
console.log(`salaries`, salaries);
question = confirm('Еще одно имя?');
continue
} while (question === true)

const getSalariesTotal = (salaries) => {
  let total = 0;
  for (let key in salaries) {
      console.log(`employee`, key);
    console.log(`salaries[empleyee]`, salaries[key])
    total += salaries[key];
  }

  return total;
};

const totalResult = getSalariesTotal(salaries);
console.log(`totalResult`, totalResult);

}

salaries();