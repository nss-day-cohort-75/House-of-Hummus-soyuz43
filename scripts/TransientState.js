const transientState = {
    entreeId: null,
    vegetableId: null,
    sideId: null
};


export const setChoice = (category, value) => {
    if (category === 'entreeId' || category === 'vegetableId' || category === 'sideId') {
        transientState[category] = parseInt(value); // Parse the value to an integer
    } else {
        transientState[category] = value;
    }
    console.log("Updated State:", transientState);
};

// Function to get the current state (optional)
export const getTransientState = () => {
    return { ...transientState }; // Returns a copy of the state
};

// Function to submit the purchase
export const submitOrder = async () => {
    if (!transientState.entreeId || !transientState.vegetableId || !transientState.sideId) {
        alert("Please select an entreeId, vegetableId, and sideId before purchasing!");
        return;
    }

    const purchase = { ...transientState, timestamp: Date.now() };

    try {
        const response = await fetch("http://localhost:8088/purchases", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(purchase)
        });

        if (response.ok) {
            console.log("Order successfully submitted:", purchase);
            alert("Order placed successfully!");
            
            transientState.entreeId = null;
            transientState.vegetableId = null;
            transientState.sideId = null;

        } else {
            throw new Error("Failed to submit order.");
        }
    } catch (error) {
        console.error("Error submitting order:", error);
    }
};
