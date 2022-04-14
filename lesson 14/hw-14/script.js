// const text =  {
//   element: 'text',
//   name: 'login',
//   label: 'Логин',
// }

  
// let element = text.element;
// let name = text.name;
// let label = text.label;
// console.log(label); 


// function createElement (element, name, label){
//   const container = document.createElement('div');
//   const input = document.createElement('input');
//   const labelElem = document.createElement('label');

//   input.name = name;
//   input.type = element;
//   labelElem.innerText = label;

//   container.append(labelElem, input);
//   document.body.prepend(container);
// }

// createElement(element, name,  label);


// let label = document.createElement('label');

// label.innerText = 'логин';
// label.setAttribute('for', 'login');
// input.setAttribute('type', 'text');
// input.setAttribute('name', 'login');
// input.setAttribute('id', 'login');


// div.prepend(label);


// document.body.prepend(div);

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

const allElem = [];
const allLabel = [];
const allOpt = [];

console.log(allLabel);

formConfig.forEach((elem) =>{
  allLabel.push(elem.label)
})

formConfig.forEach((elem) =>{
  allOpt.push(elem.options)
})

formConfig.forEach((elem) =>{
  allElem.push(elem.element)
})

const container = document.createElement('div');
document.body.prepend(container);

allElem.forEach((elem) =>{
  if (elem === 'text'){
      const input = document.createElement('input');
      container.append(input);
  } else if (elem === 'select'){
    const select = document.createElement('select');

    container.append(select);
    console.log('select');
  }
})






// function createInput (elem) {
//   if (elem === 'text'){
//     const container = document.createElement('div');
//   const input = document.createElement('input');

//   container.append(input);
//     document.body.prepend(container);
//   }else{
//     console.log('error');
//   }
// }

// createInput(firstElem);
// createInput(secondElem);
// createInput(thirdElem);

