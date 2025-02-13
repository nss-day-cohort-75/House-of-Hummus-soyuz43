import { FoodTruck } from "./FoodTruck.js";
import { attachSidesListeners } from "./SideDishes.js";
import { attachEntreeListeners } from "./Entrees.js";
import { attachVegetablesListeners } from "./Vegetables.js";
import { attachOrderButtonListener } from "./OrderButton.js";

const mainContainer = document.querySelector("#container");

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck();

    // Attach event listeners after rendering
    attachSidesListeners();
    attachEntreeListeners();
    attachVegetablesListeners();
    attachOrderButtonListener();
};

renderAllHTML();
