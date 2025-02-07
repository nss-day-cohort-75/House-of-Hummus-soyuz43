import { FoodTruck } from "./FoodTruck.js";
import { setChoice, submitOrder } from "./TransientState.js";
const mainContainer = document.querySelector("#container");

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck();

    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.addEventListener('change', (event) => {
            const category = event.target.name; // "entree", "vegetable", or "side"
            const value = event.target.value;
            setChoice(category, value); // Update the transient state
        });
    });

    document.querySelector("#purchase").addEventListener("click", submitOrder);
};

renderAllHTML();
