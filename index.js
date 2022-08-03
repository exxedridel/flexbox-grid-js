/* 
    Use fetch() to load 1, then 5, then 25 colors from the hexcolors api

    Use FlexBox to create a Responsive 5x5 Grid displaying the colors    
*/

function displayColors(colors) {
  let myColorsHtml = colors
    .map((color) => {
      return `<div class="my-color" style="background-color: ${color.value}">
         ${color.value}
      </div>`;
    })
    .join("");

  document.body.innerHTML = `<div class="my-colors">
      ${myColorsHtml}   
   </div>`;
}

async function getColors() {
  let response = await fetch("https://apis.scrimba.com/hexcolors?count=25");
  let data = await response.json();
  let colors = data.colors;

  displayColors(colors);
}

getColors();
