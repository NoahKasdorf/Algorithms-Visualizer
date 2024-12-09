

// bars-container object
const barsContainer  = document.getElementById("bars-container")

//button objects
const generateBarsButton = document.getElementById("generate-bars-button");
const selectionSortButton = document.getElementById("selction-sort-button");


function generateBars() {
  const array = Array(20).fill().map(() => Math.floor(Math.random() * 500));
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

    //highlight minIndex as green to show that it is the smallest and to show that it has been selected
    barsContainer.children[minIndex].style.backgroundColor = "green";
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const temp = bars[i];
    bars[i] = bars[minIndex];
    bars[minIndex] = temp;

    //render the change in the array
    renderBars();
    //highlight the bars opposite to above to show they have been swapepd
    barsContainer.children[i].style.backgroundColor = "green";
    barsContainer.children[minIndex].style.backgroundColor = "red";
    await new Promise((resolve) => setTimeout(resolve, 1000));

    barsContainer.children[i].style.backgroundColor = "skyblue";
    barsContainer.children[minIndex].style.backgroundColor = "skyblue";

  }
  console.log(bars);
}



//event listeners
generateBarsButton.addEventListener("click", () => {renderBars()});
selectionSortButton.addEventListener("click", () => {selectionSort() });
