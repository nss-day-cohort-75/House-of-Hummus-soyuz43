import { setChoice } from "./TransientState.js";

export const generateSidesHTML = async () => {
    try {
        const response = await fetch('http://localhost:8088/sides');
        const data = await response.json();

        let html =
        `
        <div id="sides-container">
        ${data.map((side) => `
            <div>
                <input type="radio" id="side-${side.id}" name="side" value="${side.id}">
                <label for="side-${side.id}">${side.title} - $${side.price.toFixed(2)}</label>
            </div>
        `).join('')}
        </div>`;

        return html 
    } catch (error) {
        console.error('Error fetching sides data:', error);
        return `<p>Error fetching sides data: ${error.message}</p>`;
    }
};

export const attachSidesListeners = () => {
    document.querySelectorAll('#sides-container input[type="radio"]').forEach(input => {
        input.addEventListener('change', (event) => {
            setChoice('sideId', event.target.value);
        });
    });
};
