

const formConfig = [
  {
    element: "text",
    name: "login",
    label: "Логин",
  },
  {
    element: "text",
    name: "name",
    label: "имя",
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

  const createFields = (formConfig) => {
  const container = document.createElement('div'); 
  const form = document.createElement('form');

  form.classList.add('form');


  formConfig.forEach(field =>{
    const wrapper = document.createElement('div');
    const label = document.createElement('label');

    wrapper.classList.add('wrapper');
    label.setAttribute('for', field.name);
    label.classList.add('label');
    label.innerText = field.label;

    wrapper.append(label);
    form.append(wrapper);

    if (field.element === 'text'){
    const input = document.createElement('input');
    input.classList.add('input');
    input.setAttribute('name', field.name);
    input.setAttribute('id', field.name);
    input.type = field.element;
    wrapper.append(input);

    }else if (field.element === 'select'){
      const optionValue = field.options;
      const select = document.createElement('select');
      select.classList.add('select');
      select.setAttribute('name', field.name);
      select.setAttribute('id', field.name);
      
      optionValue.forEach(opp =>{
         const options = document.createElement('option');
         options.innerText = opp.text;
         options.value = opp.value;

         select.append(options);
      })
      
      wrapper.append(select);
    }
  
    
    
  })

  const button = document.createElement('button');
  button.className = 'button';
  button.innerText = 'submit';
  form.append(button);
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    const formData = new FormData(form);
    const formValues  = Object.fromEntries(formData.entries());
  
    console.log(formValues);
  } 
  
  form.addEventListener('submit', handleSubmit);

  
  container.append(form);
  document.body.append(container);
}

createFields(formConfig);










  












