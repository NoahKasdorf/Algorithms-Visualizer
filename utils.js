export const bars = [];

export function generateBars() {
    const array = Array(20).fill().map(() => Math.floor(Math.random() * 500));
    return array;
}

export function renderBars(barsContainer) {

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
