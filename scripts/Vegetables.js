export const Veggies = async () => {
    try {
        const response = await fetch('http://localhost:8088/vegetables');
        const data = await response.json();
        let html = `
        <div>
            ${data.map((vegetable) => `
            <div>
                <input type="radio" id="vegetable-${vegetable.id}" name="vegetable" value="${vegetable.id}">
                <label for="vegetable-${vegetable.id}">${vegetable.type} - $${vegetable.price.toFixed(2)}</label>
            </div>
            `).join('')}
        </div>
        `
        return html;
    } catch (error) {
        console.error('Error fetching Vegetables data:', error);
        return `<p>Error fetching Vegetables data: ${error.message}</p>`;
    }
}
