
document.addEventListener('DOMContentLoaded', () => {

    let n = parseInt(prompt("Enter the no of squares per line (1-100):"))

    if (isNaN(n) || n <= 0 || n > 100) {
        alert("Please enter a valid number!")
        return;
    }

    const gridContainer = document.querySelector('#gridContainer');

    //gridContainer.setAttribute("style", `grid-template-rows : repeat(${n}, 1fr)`);
    //gridContainer.setAttribute("style", `grid-template-columns" : repeat(${n}, 1fr)`);

    gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    for (let i = 0; i < n * n; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = i + 1;
        gridContainer.appendChild(square);


        square.addEventListener('mouseover', () => {
        square.style.backgroundColor = '#ff9800';
        });
    }
})