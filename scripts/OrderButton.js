import { submitOrder } from "./TransientState.js";

export const generateOrderButtonHTML = () => {
    return `<button id="purchase">Purchase</button>`;
};

export const attachOrderButtonListener = () => {
    const purchaseButton = document.querySelector("#purchase");
    if (purchaseButton) {
        purchaseButton.addEventListener("click", submitOrder);
    }
};
