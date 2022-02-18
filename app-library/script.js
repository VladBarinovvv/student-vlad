const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
  { id: 1, author: "Фицджеральд", name: "Великий Гетсби", isReading: false, amount: 2 },
  { id: 2, author: "Толстой", name: "Анна Каренина", isReading: false, amount: 2 },
  { id: 3, author: "Оруел", name: "1984", isReading: false, amount: 2 },
  { id: 4, author: "Сервантес", name: "Дон Кихот", isReading: false, amount: 2 },
];

function library() {
  let action = prompt('Action?');

  if (action === null){
    alert('No such action');

    return;
  }


  action = action.trim().toLowerCase();

  switch (action){
    case "take":
      choiceBook();
      break;
    case "return":
      returnBook();
      break;
    case "add":
      addBook();
      break;
    default:
      alert('No action');
    
  }
}



function choiceBook  () {
 let choiceSearch = prompt('By author or by name?');

 if(choiceSearch === null){
   alert('No such action');

   return;
 }

 choiceSearch = choiceSearch.trim().toLowerCase();
 
 switch(choiceSearch){
   case "author":
   takeBookAuthor();
   break;
   case "name":
   takeBookName();
   break;
 }

}

const takeBookName = () =>{
  availableBookName = books
  .filter((book) => !book.isReading)
  .map((book) =>`- ${book.name}`)
  .join('\n');
  
  let userBookName = prompt(`Enter book name \n${availableBookName}`);

  if(!userBookName){
    alert('No book name');

    return
  }

  userBookName = userBookName.toLowerCase().trim();

  const userBook = books.find((book) =>{
    return book.name.toLowerCase() === userBookName
  });
  
  if(!userBook){
    alert('No book with this name');

    return;
  }

  if (userBook.isReading){
    alert('This book reading now');

    return;
  }
   
   userBook.isReading = true;

  alert(`Thank you! Your book id - ${userBook.id}`);

  console.log(books);
  
}

const takeBookAuthor = () =>{
  availableBookAuthor = books
  .filter ((book) => !book.isReading)
  .map ((book) => `- ${book.author}`)
  .join('\n')

  let userBookAuthor = prompt(`Enter book's author \n${availableBookAuthor}`)

  if(!userBookAuthor){
    alert('No book`s author');

    return;
  }

  userBookAuthor = userBookAuthor.toLowerCase().trim();

  const userBook2 = books.find((book) =>{
    return book.author.toLowerCase() === userBookAuthor
  });
  
  if(!userBook2){
    alert('No book with this name');

    return;
  }

  if (userBook2.isReading){
    alert('This book reading now');

    return;
  }

  userBook2.isReading = true;

  alert(`Thank you! Your book id - ${userBook2.id}`);

  console.log(books);
  

}


const returnBook = () =>{
  const returningBookId = Number(prompt("Enter book id:"));

  if (!returningBookId) {
    alert("No book id");

    return;
  }

  const currentBook = books.find((book) => book.id === returningBookId);

  if (!currentBook) {
    alert("Invalid book id");

    return;
  }

  if (!currentBook.isReading) {
    alert("This book is not reading now");

    return;
  }

  currentBook.isReading = false;
  alert(`Thanks, come again! Do you like "${currentBook.name}"? `);
   
  console.log(books);
}

const addBook = () =>{
  const name = prompt("Book name");
  const author = prompt("Book Author");

  const newBook = {
    name,
    author,
    isReaading: false,
    id: generateBookId(),
  };

  console.log(`newBook`, newBook);
  books.push(newBook);

  alert(`Book was added! Book's id: ${newBook.id}`);
  console.log(books);
};

function generateBookId () {
  let isBookWithIdExists = true;
  let generatedId;

  do {
    generatedId = Math.ceil(Math.random() * 100);
    isBookWithIdExists = Boolean(books.find((book) => book.id === generatedId));
  } while (isBookWithIdExists);

  return generatedId;
  

}