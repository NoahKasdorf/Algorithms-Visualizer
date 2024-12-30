import{ renderBars, bars } from "../utils.js";

export async function insertionSort(barsContainer) {
    //start at second index in array and go back looking for spot to swap
    for (let i = 1; i < bars.length; i++) {

        barsContainer.children[i].style.backgroundColor = "red";
        for (let l = i - 1; l >= 0; l--) {
            barsContainer.children[l].style.backgroundColor = "lightgreen";
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));

        for (let j = i - 1; j >= 0; j--) {

            //keep swapping until j is less than i
            if (bars[j] < bars[j + 1]) {
                break;
            }
            else {
                const temp = bars[j];
                bars[j] = bars[j + 1];
                bars[j + 1] = temp;

                renderBars(barsContainer);

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
    renderBars(barsContainer);

}

export function insertionSortInfo(infoContainer) {
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
    useCase.textContent = "Efficient for small datasets or nearly sorted arrays due to its low overhead.";

    infoContainer.appendChild(header);
    infoContainer.appendChild(timeComplexity);
    infoContainer.appendChild(spaceComplexity);
    infoContainer.appendChild(description);
    infoContainer.appendChild(useCase);
}