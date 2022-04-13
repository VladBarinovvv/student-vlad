const form = document.getElementById('form');
const formInputs = document.querySelectorAll('input[type=text]');
const agreeCheckbox = document.getElementById('agree');
const submitBtn = document.getElementById('submit');

const loginInput = document.getElementById("login");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const takenLogins = ["alexxx", "john_cena", "sam", "ANDROMEDA2000"];

const validationRules = {
    email: [
      {
        validator: (value) => Boolean(value),
        errorMessage: "Вы не ввели email",
      },
    ],
    login: [
      {
        validator: (value) => Boolean(value),
        errorMessage: "Вы не ввели логин",
      },
      {
        validator: (value) => !takenLogins.includes(value),
        errorMessage: "Этот логин уже занят",
      },
    ],
    password: [
      {
        validator: (value) => Boolean(value),
        errorMessage: "Вы не ввели пароль",
      },
      {
        // validator: (value) => value !== "" && value.length >= 6,
        validator: (value) => (value === "" ? true : value.length >= 6),
        errorMessage: "Пароль должен содержать 6+ символов",
      },
    ],
    realName: [
      {
        validator: (value) => Boolean(value),
        errorMessage: "Вы не ввели имя",
      },
      {
        validator: (value) => value[0].toUpperCase() === value[0],
        errorMessage: "Имя должно начинаться с большой буквы"
      }
    ]
  };

  const validateForm = (values, rules) =>{
    const errors = {};
    let isFormValid = true;

    for(let name in values){
        console.log(`${name}: ${values[name]}`);

        const currentRules = rules[name];
        const value = values[name];

        currentRules.forEach((rule) => {
            const isValid = rule.validator()
        

        if(!isValid){
            isFormValid = false;
            errors[name] = rule.errorMessage;
        }

    })
    }

    return{
        isFormValid,
        errors,
    };
  }

const simpleValidateForm = (login, email, password) => {

    const errors = {};
    let isFormValid = true;

          if (!login) {
            isFormValid = false;
            errors.login = "Вы не ввели логин";
          }
        
          if (!email) {
            isFormValid = false;
            errors.email = "Вы не ввели email";
          }
        
          if (!password) {
            isFormValid = false;
            errors.password = "Вы не ввели пароль";
          }
        
          if (password !== "" && password.length < 6) {
            isFormValid = false;
            errors.password = "Пароль должен содержать 6+ символов";
          }
        
          if (takenLogins.includes(login)) {
            isFormValid = false;
            errors.login = "Этот логин уже занят";
          }

    return{
        isFormValid,
        errors,
    }
}

const handleCheckboxChange = (event) => {
    const checked = event.target.checked;

    if(checked) {
        submitBtn.removeAttribute('disabled');
    }else{
        submitBtn.setAttribute('disabled', '');
    }
};

const highlightErroredInputs = (errors) =>{
  for (let name in errors){
      const text = errors[name];

      const erroredInput = form.querySelector(`input[name=${name}]`)
    //   console.log('erroredInput', erroredInput);
      const errorTextElement = form.querySelector(
          `input[name=${name}] ~ .errorMessage`
      )
    //   console.log('errorTextElement', errorTextElement);
    erroredInput.setAttribute('data-invalid', '');
    errorTextElement.innerText = text;
  }
}

const handleInput = (event) =>{
    const currentInput = event.target;

    if(currentInput.hasAttribute('data-invalid')){
        currentInput.removeAttribute('data-invalid');
    }

    const errorTextElement = form.querySelector(
        `input[name=${currentInput.name}] ~ .errorMessage`
    );

    errorTextElement.innerText = '';
}

const convertFormDataToObject = (formData) => {
    const formValues = {};
  
    for (let pair of formData.entries()) {
      formValues[pair[0]] = pair[1];
    }
  
    return formValues;
  };

const handleFormSubmit = (event) =>{
    event.preventDefault();

     const loginValue = loginInput.value;
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

//   const validationResult =  simpleValidateForm(
//       loginValue, 
//       emailValue, 
//       passwordValue
//     );
    
     const formData = new FormData(event.target);
     formData.delete('agree');
     const values = convertFormDataToObject(formData);

     const validationResult = validateForm(values,validationRules);


    if (!validationResult.isFormValid){
        highlightErroredInputs(validationResult.errors)
    } else{
        console.log({
            login: loginValue,
            email: emailValue,
            password: passwordInput,
        })
    }
};

agreeCheckbox.addEventListener('change', handleCheckboxChange);
form.addEventListener('submit', handleFormSubmit);
formInputs.forEach((input) =>{
    input.addEventListener('input', handleInput)
})