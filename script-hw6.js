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
    const falsePassword = ' ';
    const sixSymbol = 'qwerty';

    while(!userName2 || userName2 === falseName ){

    userName2 = prompt('Введите имя и фамилию:');
     if (!userName2 || userName2 === falseName ){
         alert ('Вы не ввели имя и фамилию');
         continue;
    
     }

    }
    while(!userPassword2 || userPassword2 === falsePassword){
     userPassword2 = prompt('Введите пароль');
     if (!userPassword2 || userPassword2 === falsePassword){
         alert ('Вы не ввели пароль');
         continue;
     }
    }
    const str = ( sixSymbol.localeCompare( userPassword2));
    while( str > 0 ){ 
        const str = ( sixSymbol.localeCompare( userPassword2));
        console.log (str);
        userPassword2 = prompt('Введите пароль');
     if (str > 0){
         alert ('Вы ввели не корректный  пароль');
         continue;
     }
    }

     
   

  

   
}

// enter();

//задание 2


const getRandomInteger = (min,max) => {
    return Math.round(Math.random() * (max - min) + min);
  };
  
  const integerRandom = getRandomInteger(500,1000);

  console.log(`integerRandom`, integerRandom);