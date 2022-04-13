
// функция кликер 

const button = document.getElementById('btn');
const handleClicksCounter = () => {
  
    const clickCounterElement = document.querySelector("#clicksCounter");
    const currentClicks = Number(clickCounterElement.innerText);
    clickCounterElement.innerText = currentClicks + 1;
  };
  
  button.addEventListener("click", handleClicksCounter);


// Подсвечивать текущую нажатую клавишу.

// Алгоритм:
// 1. По keydown подсвечивать нужную клавишу
//    Находим ее свойству события key
// 2. По keyup находим подсвеченную клавишу и убираем подсветку

const keysList = [...document.querySelectorAll(".keyboard-item")];

const getCurrentPressedKey = (event) => {
  const curentKey = event.key;
 
  return keysList.find((key) => {
    return key.innerText.toLowerCase() == curentKey.toLowerCase();
  });
};


const handleKeyDown = (event) => {
  const currentKeyElement = getCurrentPressedKey(event);

  if (!currentKeyElement) {
    return;
  }

  currentKeyElement.classList.add("keyboard-item--pressed");
};

const handleKeyUp = (event) => {
  const currentKeyElement = getCurrentPressedKey(event);

  if (!currentKeyElement) {
    return;
  }

  currentKeyElement.classList.remove("keyboard-item--pressed");
};

window.addEventListener("keyup", handleKeyUp);
window.addEventListener("keydown", handleKeyDown);

// При нажатии на кнопку - появление картинки

const langTitles = [...document.querySelectorAll(".title")];
const langImages = [...document.querySelectorAll(".language-logo")];

const toggleLogos = () => {
  const selectedTilte = langTitles.find((title) => {
    console.log(`title.dataset`, title.dataset);
    return title.hasAttribute('data-selected')
    
  });

  const contentValue = selectedTilte.dataset.content;


  langImages.forEach((image) => {
    if (image.dataset.title === contentValue) {
      image.removeAttribute("hidden");
    } else {
      image.setAttribute("hidden", "");
    }
  });

  console.log(`contentValue`, contentValue);
};

const handleTitleClick = (event) => {
  const currentTitle = event.target;

  const prevTitle = langTitles.find((title) => {
    return title.dataset.hasOwnProperty("selected");
  });

  prevTitle.removeAttribute("data-selected");
  currentTitle.setAttribute("data-selected", "");

  toggleLogos();

};

langTitles.forEach((title) => {
  title.addEventListener("click", handleTitleClick);
});

toggleLogos();