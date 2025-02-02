const input = document.querySelector("#controls input");
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.querySelector("#boxes");
const getRandomColor = () => `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
const createBoxes = (amount) => {
    destroyBoxes();
    const boxes = [];
    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.style.width = box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomColor();
        boxes.push(box);
    }
    boxesContainer.append(...boxes);
};
const destroyBoxes = () => (boxesContainer.innerHTML = "");
createBtn.addEventListener("click", () => createBoxes(Number(input.value)));
destroyBtn.addEventListener("click", destroyBoxes);
