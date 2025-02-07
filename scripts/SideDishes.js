export const Sides = async () => {
    try {
        const response = await fetch('http://localhost:8088/sides');
        const data = await response.json();

        let html = `
        <div>
        ${data.map((side) => `
            <div>
                <input type="radio" id="side-${side.id}" name="side" value="${side.id}">
                <label for="side-${side.id}">${side.title} - $${side.price}</label>
            </div>
            `).join('')}
            </div>
            `;
        return html
    } catch (error) {
        console.error('Error fetching sides data:', error);
        return `<p>Error fetching sides data: ${error.message}</p>`;
    }
};
