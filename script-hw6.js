const getRGBFromHex = (hexCode) =>{
    const red = hexCode.slice(1, 3);
    const green = hexCode.slice(3, 5);
    const blue = hexCode.slice(5,7);
    
    console.log('red', red);
    console.log('green', green);
    console.log('blue', blue);

    const decimalRed = parseInt(red, 16);
    const decimalGreen = parseInt(green, 16);
    const decimalBlue = parseInt(blue, 16);

    return `rgb(${decimalRed}, ${decimalGreen}, ${decimalBlue})`


}

// const rgbResult = getRGBFromHex('#fe9a60');
// console.log ('rgbResult', rgbResult)

const getHexFromRGB = (r, g, b) => {
    return`#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
}

// const resultHex = getHexFromRGB(123, 202, 135)
// console.log(`resultHex`, resultHex)

const maskCreditCard = (cardNumber) => {
  const  MASK ='****';
  let result = '';

  for (let i = 0, j = 1; i < cardNumber.length; i += 4, j++){
      const numbers = cardNumber.slice(i, i + 4);
      let maskingResult;
      console.log(`numbers`, numbers);

      if (j === 2 || j === 3){
          maskingResult = MASK
      }else{
          maskingResult = numbers
      }
      if (j !== 4){
          result += `${maskingResult} `
      }else {
          result += maskingResult
      }

     

  }

  return result
}

// const res = maskCreditCard('4141414141414141');
// console.log(`res`, res)

// задание 1 


const enter = () => {
    
    let userName2;
    let userPassword2;
    const falseName = ' ';
    let check = false;
    

    while(!userName2 || userName2 === falseName ){

    userName2 = prompt('Введите имя и фамилию:');
     if (!userName2 || userName2 === falseName ){
         alert ('Вы не ввели имя и фамилию!');
         continue;
    
     }

    }
    
     

    while (check = true){
         
        userPassword2 = prompt('Введите пароль:');
        
        if ( !userPassword2 ){
            alert ('Вы не ввели пароль!');
            continue;
            
        } if (userPassword2.length < 6){
            alert('Данные не верны!');
          
        }  else if (userPassword2.toLowerCase() === userPassword2)  {
        alert('Данные не верны!');
    } else{
        alert('Добро пожаловать!')
        check = true;
        break;
    }
        
       }  
       
       alert( userName2.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '));

  

   
}

// enter();

//задание 2

function letRandom(min, max) {
    
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
//   console.log( letRandom(300,1000) );

 
