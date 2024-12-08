

// grab objects
//const barsContainer  = document.getElementById("bars-container")
const generateBarsButton = document.getElementById("generate-bars-button");



function generateBars() {
  const array = Array(10).fill().map(() => Math.floor(Math.random() * 100));
  return array;
}

function renderBars() {

  const barsContainer = document.getElementById("bars-container");

  //reset basr container aka remove past bars
  barsContainer.innerHTML = "";
  const bars = generateBars();

  bars.forEach((value, index) => {

    console.log(value);
    const bar = document.createElement("div");

    //set height to value 
    bar.style.height = `${value * 5}px`;

    barsContainer.appendChild(bar);
  });


}


function sectionSort() {

}

//event listeners
generateBarsButton.addEventListener("click", () => {renderBars()});

