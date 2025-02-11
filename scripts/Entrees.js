export const Entrees = async () => {
    try {
        const response = await fetch('http://localhost:8088/entrees');
        const data = await response.json();
        let html =
            `
        <div>
        ${data.map((entree) => `
            <div>
                <input type="radio" id="entree-${entree.id}" name="entree" value="${entree.id}">
                <label for="entree-${entree.id}">${entree.name} - $${entree.price.toFixed(2)}</label>
            </div>
            `).join('')}
            </div>
            `;
        return html
    } catch (error) {
        console.error('Error fetching entrees data:', error);
        return `<p>Error fetching entrees data: ${error.message}</p>`;
    }
};