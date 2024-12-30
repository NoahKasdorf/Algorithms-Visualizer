import { renderBars, bars } from "../utils.js";



//NEED TO FIX !!!!!!!!!!!!!!
//----------------------------------------------------------------------------------
export async function mergeSort(barsContainer, arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return;
  }

  const mid = Math.floor((start + end) / 2);


  // Recursively sort left and right halves
  await mergeSort(barsContainer, arr, start, mid);
  await mergeSort(barsContainer, arr, mid + 1, end);

  // Merge the sorted halves
  await merge(barsContainer,arr, start, mid, end);

  renderBars(barsContainer);
  // Highlight the sorted section
  for (let i = start; i <= end; i++) {
    barsContainer.children[i].style.backgroundColor = "lightgreen";
  }
  await new Promise((resolve) => setTimeout(resolve, 500));

 
  renderBars(barsContainer);
}

export async function merge(barsContainer, arr, start, mid, end) {
  // Create temporary arrays
  const leftArr = arr.slice(start, mid + 1);
  const rightArr = arr.slice(mid + 1, end + 1);

  let i = 0, j = 0, k = start;

  // Merge the two arrays
  while (i < leftArr.length && j < rightArr.length) {

    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }

    k++;

    // Render the current state of the array
    renderBars(barsContainer);

    // Highlight the section being sorted
    for (let i = start; i <= end; i++) {
      barsContainer.children[i].style.backgroundColor = "yellow";
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
    // Highlight the active elements
    barsContainer.children[k - 1].style.backgroundColor = "red";
    await new Promise((resolve) => setTimeout(resolve, 500));
  }


  while (i < leftArr.length) {
    arr[k] = leftArr[i];

    i++;
    k++;

    renderBars(barsContainer);
    // Highlight the section being sorted
    for (let i = start; i <= end; i++) {
      barsContainer.children[i].style.backgroundColor = "yellow";
    } 
    await new Promise((resolve) => setTimeout(resolve, 300));
    barsContainer.children[k - 1].style.backgroundColor = "red";
    await new Promise((resolve) => setTimeout(resolve, 500));
  }


  while (j < rightArr.length) {
    arr[k] = rightArr[j];

    j++;
    k++;


    renderBars(barsContainer);
    // Highlight the section being sorted
    for (let i = start; i <= end; i++) {
      barsContainer.children[i].style.backgroundColor = "yellow";
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
    barsContainer.children[k - 1].style.backgroundColor = "red";
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

}

export function mergeSortInfo(infoContainer) {
  infoContainer.innerHTML = "";

  const header = document.createElement("h2");
  header.textContent = "Merge Sort";

  const timeComplexity = document.createElement("p");
  timeComplexity.textContent = "Time Complexity: O(n log n) in all cases.";

  const spaceComplexity = document.createElement("p");
  spaceComplexity.textContent = "Space Complexity: O(n) - Requires additional memory for temporary arrays.";

  const description = document.createElement("p");
  description.textContent = "Merge Sort is a divide-and-conquer algorithm. It divides the array into smaller subarrays, sorts them, and then merges them back together.";

  const useCase = document.createElement("p");
  useCase.textContent = "Suitable for large datasets where stability is important.";

  infoContainer.appendChild(header);
  infoContainer.appendChild(timeComplexity);
  infoContainer.appendChild(spaceComplexity);
  infoContainer.appendChild(description);
  infoContainer.appendChild(useCase);
}


