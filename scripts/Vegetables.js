import { setChoice } from "./TransientState.js";

export const generateVegetablesHTML = async () => {
    try {
        const response = await fetch('http://localhost:8088/vegetables');
        const data = await response.json();

        return `
        <div id="vegetables-container">
        ${data.map((vegetable) => `
            <div>
                <input type="radio" id="vegetable-${vegetable.id}" name="vegetable" value="${vegetable.id}">
                <label for="vegetable-${vegetable.id}">${vegetable.type} - $${vegetable.price.toFixed(2)}</label>
            </div>
        `).join('')}
        </div>`;
    } catch (error) {
        console.error('Error fetching vegetables data:', error);
        return `<p>Error fetching vegetables data: ${error.message}</p>`;
    }
};

export const attachVegetablesListeners = () => {
    document.querySelectorAll('#vegetables-container input[type="radio"]').forEach(input => {
        input.addEventListener('change', (event) => {
            setChoice('vegetableId', event.target.value);
        });
    });
};
