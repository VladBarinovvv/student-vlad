

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



 createFields = (formConfig) => {
  const container = document.createElement('div'); 
  const form = document.createElement('form');

  formConfig.forEach(field =>{
    const label = document.createElement('label');

    label.setAttribute('for', field.name);
    label.innerText = field.label;

    form.append(label);

    if (field.element === 'text'){
    const input = document.createElement('input');
    input.type = field.element;
    form.append(input);

    }else if (field.element === 'select'){
      const optionValue = field.options;
      const select = document.createElement('select');
      optionValue.forEach(opp =>{
         const options = document.createElement('option');
         options.innerText = opp.text;
         options.value = opp.value;

         select.append(options);
      })
      
      form.append(select);
    }
    
  })

  const button = document.createElement('button');
  button.innerText = 'submit';
  form.append(button);
 
  const getValuesForm = (event) =>{
    event.preventDefault();
    
    const formData = new FormData(form);
    const formValues  = Object.fromEntries(formData.entries());
  
    console.log(formValues);
  } 

  form.addEventListener('submit', getValuesForm);
  container.append(form);
  document.body.append(container);
}
createFields(formConfig);







  












