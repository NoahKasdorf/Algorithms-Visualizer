import { renderBars, bars } from "../utils.js";




export async function bubbleSort(barsContainer) {
  for (let i = 0; i < bars.length; i++) {

    for(let j = 1; j < bars.length - i; j++) {

      renderBars(barsContainer);
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

      renderBars(barsContainer);
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

export function bubbleSortInfo(infoContainer) {
  infoContainer.innerHTML = "";

  const header = document.createElement("h2");
  header.textContent = "Bubble Sort";

  const timeComplexity = document.createElement("p");
  timeComplexity.textContent = "Time Complexity: O(n^2) for worst and average cases, O(n) for best case (already sorted).";

  const spaceComplexity = document.createElement("p");
  spaceComplexity.textContent = "Space Complexity: O(1) - In-place sorting.";

  const description = document.createElement("p");
  description.textContent = "Bubble Sort repeatedly compares adjacent elements in the array and swaps them if they are in the wrong order. The process continues until the array is fully sorted.";

  const useCase = document.createElement("p");
  useCase.textContent = "Rarely used in practice due to its inefficiency but is useful for educational purposes.";

  infoContainer.appendChild(header);
  infoContainer.appendChild(timeComplexity);
  infoContainer.appendChild(spaceComplexity);
  infoContainer.appendChild(description);
  infoContainer.appendChild(useCase);
}
