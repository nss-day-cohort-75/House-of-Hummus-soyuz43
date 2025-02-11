export const Sales = async () => {
    try {
        // Fetch purchases with expanded entree, vegetable, and side details
        const purchases = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
            .then(res => res.json());

        if (!Array.isArray(purchases)) {
            console.error("Expected an array but got:", purchases);
            return "<p>Error: Sales data is not an array.</p>";
        }

        // Fetch actual entrée, vegetable, and side data
        const entrees = await fetch("http://localhost:8088/entrees").then(res => res.json());
        const vegetables = await fetch("http://localhost:8088/vegetables").then(res => res.json());
        const sides = await fetch("http://localhost:8088/sides").then(res => res.json());

        // Convert purchases into a displayable list with expanded names
        let salesDivs = purchases.map(purchase => {
            // Find the matching entree, vegetable, and side based on IDs
            const entree = entrees.find(e => e.id == purchase.entreeId);
            const vegetable = vegetables.find(v => v.id == purchase.vegetableId);
            const side = sides.find(s => s.id == purchase.sideId);

            const totalPrice = (entree ? entree.price : 0) + (vegetable ? vegetable.price : 0) + (side ? side.price : 0);

            return `
            <div class="sale-item">
                <p>
                    <strong>Order #${purchase.id}</strong> - 
                    Entree: ${entree ? entree.name : "Unknown"}, 
                    Vegetable: ${vegetable ? vegetable.type : "Unknown"}, 
                    Side: ${side ? side.title : "Unknown"}
                    Total Price: $${totalPrice.toFixed(2)}
                </p>
                <small>Purchased at: ${new Date(purchase.timestamp).toLocaleString()}</small>
            </div>
            `;
        });

        return salesDivs.join("");

    } catch (error) {
        console.error("Error fetching sales data:", error);
        return `<p>Error fetching sales data: ${error.message}</p>`;
    }
};
