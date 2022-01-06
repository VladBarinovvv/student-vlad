const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';

const authorize = () => {
   let userPassword;
   let userLogin;
   let b=3;

        for(i=0; i<3; i++ ){
            console.log (b--);
            userLogin = prompt('Логин:');
            if (!userLogin){
                alert('Введите логин');
                continue
            }
            userPassword = prompt('Пароль:');
        if (!userLogin){
            alert('Введите пароль');
            continue
        }
            if (userLogin === LOGIN || userPassword === PASSWORD){
                alert('Добро пожаловать!');
                break;
            } else{
                alert(`Доступ закрыт. Осталось попыток ${b}. `);

            }

      } 
   
} 

// authorize();

const drawPyramid = (height) => {
    for (let i = 0; i < height; i++) {
        let spaceBefore = '';
        let stars = '';

        for(let j = 0; j < 2 * i + 1; j++){
            stars += "*";
        }
        for (let k = 0; k < height - i - 1; k++) {
            spaceBefore += ' '
        }

        console.log(spaceBefore + stars)
    }
};

// const desiredHeight = Number (prompt('Какая высота пирамиды?'));
// drawPyramid(desiredHeight)
    
    
    firstNumber = Number (prompt('Первое число'));
    secondNumber = Number (prompt ('Второе число'));
    
const showSimpleNumbers = (firstNumber,secondNumber) =>{
    
    for (let i = firstNumber; i <= secondNumber; i++){
        if (i % 2 !== 0){
            console.log (i);
        }
       
    }

}

showSimpleNumbers (firstNumber,secondNumber);

 