import { setChoice } from "./TransientState.js";

export const generateEntreeHTML = async () => {
    try {
        const response = await fetch('http://localhost:8088/entrees');
        const data = await response.json();

        return `
        <div id="entree-container">
        ${data.map((entree) => `
            <div>
                <input type="radio" id="entree-${entree.id}" name="entree" value="${entree.id}">
                <label for="entree-${entree.id}">${entree.name} - $${entree.price.toFixed(2)}</label>
            </div>
        `).join('')}
        </div>`;
    } catch (error) {
        console.error('Error fetching entree data:', error);
        return `<p>Error fetching entree data: ${error.message}</p>`;
    }
};

export const attachEntreeListeners = () => {
    document.querySelectorAll('#entree-container input[type="radio"]').forEach(input => {
        input.addEventListener('change', (event) => {
            setChoice('entreeId', event.target.value);
        });
    });
};
