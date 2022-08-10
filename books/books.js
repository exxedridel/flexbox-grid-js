/* 
    Library
    
    Fetch the collection of books 
        from books.json, assign each 
        a unique id
        
    Create a div to represent a book
        using Grid & grid-template-areas 
        build a book component
        display all books using Flexbox
*/

async function getBooksCollection() {
  let response = await fetch("books.json");
  let data = await response.json();
  /* Adds ID++ to data json */
  let n = 1;
  console.log(data)
  return data.map((book) => {
    book.id = n;
    n += 1;
    return book;
  });
}

function getBookHTML(aBook) {
  return `
      <div class="a-book">
         <div class="a-book-id">Id: ${aBook.id}</div>
         <div class="a-book-author">${aBook.author}</div>
         <div class="a-book-title">${aBook.title}</div>
         <div class="a-book-wiki"> ${aBook.wiki}</div>
      </div>
   `;
}

/* Better to read */
function displayLibrary(allBooks) {
  document.body.innerHTML = `
      <div class="my-library">
         ${allBooks.map(getBookHTML).join("")}
      </div>
   `;
}

getBooksCollection().then(displayLibrary);

/* Switch commends */
// getBooksCollection().then(allBooks => {
//    document.body.innerHTML = `
//       <div class="my-library">
//          ${allBooks.map(getBookHTML).join("")}
//       </div>
//    `;
// });
