const form = document.getElementById('login-form');
const exampleContainer = document.getElementById('example-container');  

const textElem = document.createElement('p');
exampleContainer.appendChild(textElem);

const login = document.getElementById('login');
const password = document.getElementById('password');

const handleSubmit = (event) =>{
    event.preventDefault();
   
    const inputValue = {
        login: login.value,
        password: password.value,
    }
    console.log(inputValue);
}

form.addEventListener('submit', handleSubmit);

const exampleInput = document.getElementById('example');

const handleChange = (event) =>{
    console.log(event);
    console.log(event.target.value);

    textElem.innerText = event.target.value;
}

exampleInput.addEventListener('change', handleChange);

const genderRadioGroup = document.getElementsByName('gender');

const getRadioValue = (radioGroup) =>{
    const checkedRadio = [...radioGroup].find((radio) => radio.checked);
    if(!checkedRadio){
        return null
    }

    return checkedRadio;
}

const res = getRadioValue(genderRadioGroup)
console.log(res);

const handleRadioButtonChange = (event) =>{
    console.dir(event.target);
}

genderRadioGroup.forEach((radio) =>{
    radio.addEventListener('change', handleRadioButtonChange);
})

// const amountInput = document.getElementById('amount');
// const currencySelect = document.getElementById('currency-select');
// const resultElement = document.getElementById('result');

// const getExchangeResult = () => {

// }
// const updateResult = () =>{

// }

// const handleCurrentSelectChange = (event) => {
//     const selectedCurrently = event.target.value;

//     console.log(selectedCurrently);
// }

// amountInput.addEventListener('input', handleCurrentSelectChange)
// currencySelect.addEventListener('input', handleCurrentSelectChange);



const amountInput = document.getElementById("amount");
const currencySelect = document.getElementById("currency-select");
const resultElement = document.getElementById("result");

const rates = {
  USD: 27.3,
  EUR: 31.7,
};

const getExchangeResult = (amount, currency) => {
  return (Number(amount) / rates[currency]).toFixed(2);
};

const updateResult = (exhangeAmount) => {
  resultElement.innerText = exhangeAmount;
};

const handleCurrencySelectChange = (event) => {
  const selectedCurrency = event.target.value;
  const amount = amountInput.value;

  const result = getExchangeResult(amount, selectedCurrency);
  updateResult(result);

  console.log(`selectedCurrency`, selectedCurrency);
};

const handleAmountInputChange = (event) => {
  const currentAmount = event.target.value;
  const currency = currencySelect.value;

  const result = getExchangeResult(currentAmount, currency);
  updateResult(result);

  console.log(`currentAmount`, currentAmount);
};

amountInput.addEventListener("input", handleAmountInputChange);
currencySelect.addEventListener("input", handleCurrencySelectChange);


const exampleForm = document.getElementById("form-data-example");

const convertFormDataToObject = (formData) => {
  const formValues = {}

  for (let pair of formData.entries()) {
    console.log(`pair`, pair)
    formValues[pair[0]] = pair[1] 

  }

  return formValues
}

const handleFormSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const preparedData = convertFormDataToObject(formData);
  console.log(`preparedData`, preparedData)

  
};

exampleForm.addEventListener("submit", handleFormSubmit);


