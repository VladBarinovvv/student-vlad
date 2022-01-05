function showMassage(){
    console.log('hi');
}

showMassage();

// задание 1

// function getSum(){
//     const numb1 = Number(prompt('Первое число'));
//     const numb2 = Number(prompt('Второе число'));

//     const sum = numb1 + numb2;

//     alert('Сумма равна: ' + sum);
// }

// getSum();
// getSum();

// const sum = (a, b) => a+b;

// const resultSum = sum(10,5)
// console.log ('resultSum', resultSum)

// задание 2

// function greetings(){
//     const userName = (prompt('Ваше имя'));
//     const userAge =  Number(prompt ('Ваш возраст'));
   
//     if (userAge > 30){
//         alert ('Здравствуйте ' + userName + '.');
//     }else{
//         alert('Привет ' + userName + '.');
//     }
// }

// greetings();

// задание 3

 function calculate (a, b=2){
     console.log('a', a);
     console.log('b', b);

   console.log (Math.pow(a,b));
 }

calculate(2,3);





