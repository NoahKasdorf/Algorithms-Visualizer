
import { renderBars, bars } from "../utils.js";


export async function quickSort(barsContainer, arr, start=0, end = arr.length -1){
  if(start < end) {
    renderBars(barsContainer);

    const pivotIndex = partition(arr, start, end);
    await quickSort(barsContainer, arr, start, pivotIndex - 1);
    await quickSort(barsContainer, arr, pivotIndex + 1, end);

    renderBars(barsContainer);
    for (let i = start; i <= end; i++) {
      barsContainer.children[i].style.backgroundColor = "lightgreen";
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
   renderBars(barsContainer);
}

function partition(arr, start, end) {
  const pivot = arr[end];
  let i = start - 1;

  for (let j = start ; j < end; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i+1, end);

  return i+1;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export function quickSortInfo(infoContainer) {
  infoContainer.innerHTML = "";

  const header = document.createElement("h2");
  header.textContent = "Quick Sort";

  const timeComplexity = document.createElement("p");
  timeComplexity.textContent = "Time Complexity: O(n log n) on average, O(n^2) in the worst case.";

  const spaceComplexity = document.createElement("p");
  spaceComplexity.textContent = "Space Complexity: O(log n) due to recursive calls (in-place for iterative).";

  const description = document.createElement("p");
  description.textContent = "Quick Sort uses a pivot element to partition the array into two halves. Elements smaller than the pivot go to the left, and elements larger go to the right. The process is then repeated for each partition.";

  const useCase = document.createElement("p");
  useCase.textContent = "Often the fastest for large datasets but requires careful pivot selection to avoid worst-case performance.";

  infoContainer.appendChild(header);
  infoContainer.appendChild(timeComplexity);
  infoContainer.appendChild(spaceComplexity);
  infoContainer.appendChild(description);
  infoContainer.appendChild(useCase);
}