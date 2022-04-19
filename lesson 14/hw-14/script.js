

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

  const createFields = (formConfig) => {
  const container = document.createElement('div'); 
  const form = document.createElement('form');

  form.className = 'form';
  container.className = 'container';


  formConfig.forEach(field =>{
    const wrapper = document.createElement('div');
    const label = document.createElement('label');

    wrapper.className = 'wrapper';
    label.setAttribute('for', field.name);
    label.className = 'label';
    label.innerText = field.label;

    wrapper.append(label);
    form.append(wrapper);

    if (field.element === 'text'){
    const input = document.createElement('input');
    input.className = 'input';
    input.name = field.name;
    input.id = field.name;
    input.type = field.element;
    wrapper.append(input);

    }else if (field.element === 'select'){
      const optionValue = field.options;
      const select = document.createElement('select');
      select.className = 'select';
      select.name = field.name;
      select.id = field.name;
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








  












