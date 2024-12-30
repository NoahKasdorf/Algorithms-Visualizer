import { renderBars, bars } from "../utils.js";



export async function selectionSort(barsContainer) {

  //loop through array
  for (let i = 0; i < bars.length; i++) {
    let minIndex = i;

    //re render array to reset colours
    renderBars(barsContainer);
    barsContainer.children[i].style.background = "linear-gradient(to top,rgb(255, 137, 153),rgb(110, 0, 0))";
    //also want all sorted bars to be light green
    for (let j = 0; j < i; j++) {
      barsContainer.children[j].style.background = "linear-gradient(to top,rgb(97, 238, 120),rgb(6, 170, 41))";
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
   

    //loop through unsorted array
    for (let j = i + 1; j < bars.length; j++) {

      barsContainer.children[j].style.background = "linear-gradient(to top,rgb(239, 248, 118),rgb(89, 95, 2))";
      await new Promise((resolve) => setTimeout(resolve, 200));
      barsContainer.children[j].style.background = "linear-gradient(to top, #63eaec, #3c928b)";

      if (bars[j] < bars[minIndex]) {

        //make sure min index was not first index
        if (minIndex !== i) {
          barsContainer.children[minIndex].style.background = "linear-gradient(to top, #63eaec, #3c928b)";
        }

        minIndex = j;

        barsContainer.children[minIndex].style.background = "linear-gradient(to top,rgb(30, 139, 49),rgb(3, 70, 18))";
        await new Promise((resolve) => setTimeout(resolve, 200));
      }

    }

    //pause to show selected bar to swap
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const temp = bars[i];
    bars[i] = bars[minIndex];
    bars[minIndex] = temp;

    //render the change in the array
    renderBars(barsContainer);
    //highlight the bars opposite to above to show they have been swapepd

    //also want all sorted bars to be light green
    for (let j = 0; j < i; j++) {
      barsContainer.children[j].style.background = "linear-gradient(to top,rgb(97, 238, 120),rgb(6, 170, 41))";
    }

    barsContainer.children[i].style.background = "linear-gradient(to top,rgb(30, 139, 49),rgb(3, 70, 18))";
    barsContainer.children[minIndex].style.background = "linear-gradient(to top,rgb(255, 137, 153),rgb(110, 0, 0))";
    await new Promise((resolve) => setTimeout(resolve, 1000));

    barsContainer.children[i].style.background = "linear-gradient(to top, #63eaec, #3c928b)";
    barsContainer.children[minIndex].style.background = "linear-gradient(to top, #63eaec, #3c928b)";

  }
  console.log(bars);
}

export function selectionSortInfo(infoContainer) {
  infoContainer.innerHTML = "";

  const header = document.createElement("h2");
  header.textContent = "Selection Sort";

  const timeComplexity = document.createElement("p");
  timeComplexity.textContent = "Time Complexity: O(n^2) in all cases.";

  const spaceComplexity = document.createElement("p");
  spaceComplexity.textContent = "Space Complexity: O(1) - In-place sorting.";

  const description = document.createElement("p");
  description.textContent = "Selection Sort is an in-place comparison-based algorithm. It divides the input array into two parts: the sorted part and the unsorted part. At each iteration, it selects the smallest (or largest) element from the unsorted part and swaps it with the first unsorted element.";

  const useCase = document.createElement("p");
  useCase.textContent = "Best used for small datasets where memory is limited, as it is simple but inefficient for larger datasets.";

  infoContainer.appendChild(header);
  infoContainer.appendChild(timeComplexity);
  infoContainer.appendChild(spaceComplexity);
  infoContainer.appendChild(description);
  infoContainer.appendChild(useCase);
}