import { generateBars, renderBars, bars } from './utils.js';

import { insertionSort, insertionSortInfo } from './sortFunctions/insertionSort.js';
import { selectionSort, selectionSortInfo } from './sortFunctions/selectionSort.js';
import { quickSort, quickSortInfo } from './sortFunctions/quickSort.js';
import { mergeSort, mergeSortInfo } from './sortFunctions/mergeSort.js';
import { bubbleSort, bubbleSortInfo } from './sortFunctions/bubbleSort.js';

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


//event listeners
generateBarsButton.addEventListener("click", () => {
  bars.length = 0;
  bars.push(...generateBars());
  renderBars(barsContainer);
});
//generateBarsButton.addEventListener("click", () => {bars = generateBars(), renderBars()});

selectionSortButton.addEventListener("click", () => {
  selectionSort(barsContainer), 
  selectionSortInfo(infoContainer) 
});

insertionSortButton.addEventListener("click", () => {
  insertionSort(barsContainer), 
  insertionSortInfo(infoContainer)
});

bubbleSortButton.addEventListener("click", () => {
  bubbleSort(barsContainer), 
  bubbleSortInfo(infoContainer)
});

mergeSortButton.addEventListener("click", () => {
  mergeSort(barsContainer, bars), 
  mergeSortInfo(infoContainer)
});

quickSortButton.addEventListener("click", () => {
  quickSort(barsContainer,bars),
  quickSortInfo(infoContainer)
});

heapSortButton.addEventListener("click", () => {heapSort(), heapSortInfo()});


resetButton.addEventListener("click", () => {bars = location.reload()}); 