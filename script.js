

//container object
const barsContainer  = document.getElementById("bars-container")
const infoContainer = document.getElementById("info-container");

//button objects
const generateBarsButton = document.getElementById("generate-bars-button");
const selectionSortButton = document.getElementById("selection-sort-button");
const insertionSortButton = document.getElementById("insertion-sort-button");
const bubbleSortButton = document.getElementById("bubble-sort-button");
const mergeSortButton = document.getElementById("merge-sort-button");
const quickSortButton = document.getElementById("quick-sort-button");
const heapSortButton = document.getElementById("heap-sort-button");

const resetButton = document.getElementById("reset-button");


function generateBars() {
  const array = Array(20).fill().map(() => Math.floor(Math.random() * 500));
  return array;
}



function renderBars() {

  barsContainer.innerHTML = "";

  bars.forEach((value, index) => {
    console.log(value);
    const bar = document.createElement("div");
    const valueText = document.createElement("p");
    valueText.textContent = value;
    bar.appendChild(valueText);
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
    renderBars();
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

function selectionSortInfo() {
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

function insertionSortInfo() {
  infoContainer.innerHTML = "";

  const header = document.createElement("h2");
  header.textContent = "Insertion Sort";

  const timeComplexity = document.createElement("p");
  timeComplexity.textContent = "Time Complexity: O(n^2) in the worst and average cases, O(n) in the best case (already sorted).";

  const spaceComplexity = document.createElement("p");
  spaceComplexity.textContent = "Space Complexity: O(1) - In-place sorting.";

  const description = document.createElement("p");
  description.textContent = "Insertion Sort works similarly to sorting playing cards. It iteratively takes one element and inserts it into its correct position relative to the already sorted part of the array.";

  const useCase = document.createElement("p");
  useCase.textContent ="Efficient for small datasets or nearly sorted arrays due to its low overhead.";

  infoContainer.appendChild(header);
  infoContainer.appendChild(timeComplexity);
  infoContainer.appendChild(spaceComplexity);
  infoContainer.appendChild(description);
  infoContainer.appendChild(useCase);
}


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

function bubbleSortInfo() {
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


//NEED TO FIX
//----------------------------------------------------------------------------------
async function mergeSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return;
  }

  const mid = Math.floor((start + end) / 2);


  // Recursively sort left and right halves
  await mergeSort(arr, start, mid);
  await mergeSort(arr, mid + 1, end);

  // Merge the sorted halves
  await merge(arr, start, mid, end);

  renderBars();
  // Highlight the sorted section
  for (let i = start; i <= end; i++) {
    barsContainer.children[i].style.backgroundColor = "lightgreen";
  }
  await new Promise((resolve) => setTimeout(resolve, 500));

 
  renderBars();
}

async function merge(arr, start, mid, end) {
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
    renderBars();

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

    renderBars();
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


    renderBars();
    // Highlight the section being sorted
    for (let i = start; i <= end; i++) {
      barsContainer.children[i].style.backgroundColor = "yellow";
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
    barsContainer.children[k - 1].style.backgroundColor = "red";
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

}

function mergeSortInfo() {
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


//-----------------------------------------------------------------------------------


async function quickSort(arr, start=0, end = arr.length -1){
  if(start < end) {
    renderBars();

    const pivotIndex = partition(arr, start, end);
    await quickSort(arr, start, pivotIndex - 1);
    await quickSort(arr, pivotIndex + 1, end);

    renderBars();
    for (let i = start; i <= end; i++) {
      barsContainer.children[i].style.backgroundColor = "lightgreen";
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
   renderBars();
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

function quickSortInfo() {
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




function heapSort(){

}

function heapSortInfo(){}

//event listeners
generateBarsButton.addEventListener("click", () => {bars = generateBars(), renderBars()});
selectionSortButton.addEventListener("click", () => {selectionSort(), selectionSortInfo() });
insertionSortButton.addEventListener("click", () => {insertionSort(), insertionSortInfo()});
bubbleSortButton.addEventListener("click", () => {bubbleSort(), bubbleSortInfo()});
mergeSortButton.addEventListener("click", () => {mergeSort(bars), mergeSortInfo()});
quickSortButton.addEventListener("click", () => {quickSort(bars), quickSortInfo()});
heapSortButton.addEventListener("click", () => {heapSort(), heapSortInfo()});


resetButton.addEventListener("click", () => {bars = location.reload()}); 