

const formConfig = [
  {
    element: "text",
    name: "login",
    label: "Логин",
  },
  {
    element: "text",
    name: "age",
    label: "Возраст",
  },
  {
    element: "select",
    name: "language",
    label: "Выберите язык программирования",
    options: [
      {
        text: "JavaScript",
        value: "js",
      },
      {
        text: "Java",
        value: "java",
      },
      {
        text: "Python",
        value: "python",
      },
    ],
  },
];



let firstConfig = formConfig[0];
let secondConfig = formConfig[1];
let thirdConfig = formConfig[2];



const container = document.createElement('form');
container.id = 'form';
document.body.prepend(container);

const createInput = (arr) =>{
  const elem = arr.element;
  const name = arr.name;
  const label = arr.label;

 
  const input = document.createElement('input');
  const labelElem = document.createElement('label');
  
    input.name = name;
    input.type = elem;
    labelElem.innerText = label;
    container.append(labelElem, input);
    
}

const createSelect = (arr) =>{
  const elem = arr.element;
  const name = arr.name;
  const label = arr.label;
  const options = arr.options;
  
  const select = document.createElement('select');
  const labelElem = document.createElement('label');
  const firstOptions = document.createElement('option');
  const secondOption = document.createElement('option');
  const thirdOption = document.createElement('option');

  select.name = name;
  select.type = elem;
  labelElem.innerText = label;
  firstOptions.innerText = options[0].text;
  secondOption.innerText = options[1].text;
  thirdOption.innerText = options[2].text;

  select.append(firstOptions, secondOption, thirdOption);
  container.append(labelElem, select);
}

const createSubmit = () =>{
   const button = document.createElement('button');
   

   button.name = 'submit';
   button.innerText = 'submit';

   container.append(button);
}

// const convertFormDataToObject = (formData) =>{
//   const formValues = {};

//   for (let pair of formData.entries()){
//     formValues[pair[0]] = pair[1]
//   }

//   return formValues
// }

const getValuesForm = (event) =>{
  event.preventDefault();
  
  const formData = new FormData(container);
  const formValues  = Object.fromEntries(formData.entries());
  
  console.log(formValues);
} 

createInput(firstConfig);
createInput(secondConfig);
createSelect(thirdConfig);
createSubmit();

container.addEventListener('submit', getValuesForm);




