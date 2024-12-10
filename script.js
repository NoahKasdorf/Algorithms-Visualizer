
//container object
const barsContainer  = document.getElementById("bars-container")
const infoContainer = document.getElementById("info-container");

//button objects
const generateBarsButton = document.getElementById("generate-bars-button");
const selectionSortButton = document.getElementById("selection-sort-button");
const insertionSortButton = document.getElementById("insertion-sort-button");
const bubbleSortButton = document.getElementById("bubble-sort-button");

function generateBars() {
  const array = Array(30).fill().map(() => Math.floor(Math.random() * 500));
  return array;
}

const bars = generateBars();

function renderBars() {
  barsContainer.innerHTML = "";

  bars.forEach((value, index) => {
    console.log(value);
    const bar = document.createElement("div");
    bar.style.height = `${value}px`; //set height of bar to value
    barsContainer.appendChild(bar);
  });
}




async function selectionSort() {


  //loop through array
  for (let i = 0; i < bars.length; i++) {
    let minIndex = i;

    //re render array to reset colours
    renderBars();
    barsContainer.children[i].style.backgroundColor = "red";
    //also want all sorted bars to be light green
    for (let j = 0; j < i; j++) {
      barsContainer.children[j].style.backgroundColor = "lightgreen";
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
   

    //loop through unsorted array
    for (let j = i + 1; j < bars.length; j++) {

      barsContainer.children[j].style.backgroundColor = "yellow";
      await new Promise((resolve) => setTimeout(resolve, 200));
      barsContainer.children[j].style.backgroundColor = "skyblue";

      if (bars[j] < bars[minIndex]) {

        //make sure min index was not first index
        if (minIndex !== i) {
          barsContainer.children[minIndex].style.backgroundColor = "skyblue";
        }

        minIndex = j;

        barsContainer.children[minIndex].style.backgroundColor = "green";
        await new Promise((resolve) => setTimeout(resolve, 200));
      }

    }

    //pause to show selected bar to swap
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const temp = bars[i];
    bars[i] = bars[minIndex];
    bars[minIndex] = temp;

    //render the change in the array
    renderBars();
    //highlight the bars opposite to above to show they have been swapepd

    //also want all sorted bars to be light green
    for (let j = 0; j < i; j++) {
      barsContainer.children[j].style.backgroundColor = "lightgreen";
    }

    barsContainer.children[i].style.backgroundColor = "green";
    barsContainer.children[minIndex].style.backgroundColor = "red";
    await new Promise((resolve) => setTimeout(resolve, 1000));

    barsContainer.children[i].style.backgroundColor = "skyblue";
    barsContainer.children[minIndex].style.backgroundColor = "skyblue";

  }
  console.log(bars);
}


function selectionSortInfo(){
  infoContainer.innerHTML = ""

  const header = document.createElement("h2");
  header.textContent = "Time Complexity: O(n^2)";
  const header2 = document.createElement("h2");
  header2.textContent = "Space Complexity: O(1)";
  infoContainer.appendChild(header);
  infoContainer.appendChild(header2);

}


async function insertionSort() {
  //start at second index in array and go back looking for spot to swap
  for (let i = 1; i < bars.length; i++) {

    barsContainer.children[i].style.backgroundColor = "red";
    for (let l = i-1; l >= 0; l--) {
      barsContainer.children[l].style.backgroundColor = "lightgreen";
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));

    for (let j = i-1; j >= 0; j--) {

      //keep swapping until j is less than i
      if (bars[j] < bars[j + 1]) {
        break;
      }
      else {
        const temp = bars[j];
        bars[j] = bars[j + 1];
        bars[j + 1] = temp;

        renderBars();
        
        //after swap show where index curr is
        for (let l = i; l >= 0; l--) {
          barsContainer.children[l].style.backgroundColor = "lightgreen";
        }
        barsContainer.children[j].style.backgroundColor = "red";
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

    }

    
  }
  console.log(bars);
  renderBars();

}

function insertionSortInfo() {  }



async function bubbleSort() {
  for (let i = 0; i < bars.length; i++) {

    for(let j = 1; j < bars.length - i; j++) {

      renderBars();
      barsContainer.children[j].style.backgroundColor = "red";
      barsContainer.children[j-1].style.backgroundColor = "red";

      //make everything i inexes past end of array green
      for (let l = bars.length - 1; l >= bars.length - i; l--) {
        barsContainer.children[l].style.backgroundColor = "lightgreen";
      }

      await new Promise((resolve) => setTimeout(resolve, 50));

      console.log(bars[j]);
      if (bars[j-1] > bars[j]) {
        const temp = bars[j];
        bars[j] = bars[j - 1];
        bars[j - 1] = temp;
      }

      renderBars();
      barsContainer.children[j].style.backgroundColor = "red";
      barsContainer.children[j - 1].style.backgroundColor = "red";

      //make everything i inexes past end of array green
      for (let l = bars.length - 1; l >= bars.length - i; l--) {
        barsContainer.children[l].style.backgroundColor = "lightgreen";
      }

      await new Promise((resolve) => setTimeout(resolve, 50));
    }


  
  }
  console.log(bars);

 
}

function bubbleSortInfo() {  }

//event listeners
generateBarsButton.addEventListener("click", () => {renderBars()});
selectionSortButton.addEventListener("click", () => {selectionSort(), selectionSortInfo() });
insertionSortButton.addEventListener("click", () => {insertionSort(), insertionSortInfo()});
bubbleSortButton.addEventListener("click", () => {bubbleSort(), bubbleSortInfo()});