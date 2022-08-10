/* 
    Jeopardy
    
    Write an async function 
        that uses fetch() to fetch 4 categories 
        from https://jservice.io/api/categories
        parameters: count, offset
        
    Display the categories
        in a simplified 4x5 Jeopardy Board 
        using CSS Grid
*/

async function getCategories() {
  let response = await fetch(
    "https://jservice.io/api/categories?count=4&offset=44"
  );
  let data = await response.json();

  return data;
}

getCategories().then((categories) => {
  console.log(categories);
  let myCategoriesHtml = categories
    .map((categorie) => {
      return `
         <div class="my-categorie">${categorie.title}</div>
         <div class="my-category-clue" style="grid-row-start: 2">$100</div>
         <div class="my-category-clue" style="grid-row-start: 3">$200</div>
         <div class="my-category-clue" style="grid-row-start: 4">$300</div>
         <div class="my-category-clue" style="grid-row-start: 5">$400</div>
      `;
    })
    .join("");

  document.body.innerHTML = `
      <a href="../index.html">
         <button>Go back</button>
      </a>
   
      <div class="board">${myCategoriesHtml}</div>
   `;
});
