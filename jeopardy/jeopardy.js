/* 
    Jeopardy (Challenge)
    
    Update getCategories to take 
        count/offset arguments
    Fetch 5 Categories (Update the display as necessary)
    
    Write a getClueHtml() function
        calculate grid-row-start based on the input value
        which will be 100, 200, 300 and 400
*/

async function getCategories(count, offset) {
  let response = await fetch(`https://jservice.io/api/categories?count=${count}&offset=${offset}`);
  let data = await response.json();
  console.log(response)
  return data;
}

function getClueHtml(clueValue) {
  return `
      <div class="my-category-clue" style="grid-row-start: ${clueValue / 100 + 1}">$${clueValue}</div>
   `;
}

function getCategoryHtml(category) {
  return `
      <div class="my-category-title">${category.title}</div>
      ${getClueHtml(100)}
      ${getClueHtml(200)}
      ${getClueHtml(300)}
      ${getClueHtml(400)}
   `;
}

getCategories(5, 7).then((categories) => {
  document.body.innerHTML = `
      <div class="board">${categories.map(getCategoryHtml).join("")}</div>
   `;
});
