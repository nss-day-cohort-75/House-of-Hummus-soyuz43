import { Sales } from "./Sales.js"
import { generateEntreeHTML } from "./Entrees.js"
import { generateVegetablesHTML } from "./Vegetables.js"
import { generateSidesHTML } from "./SideDishes.js"
import { generateOrderButtonHTML } from "./OrderButton.js";

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const sidesHTML = await generateSidesHTML();
    const entreeHTML = await generateEntreeHTML();
    const vegetablesHTML = await generateVegetablesHTML();
    const orderButtonHTML = generateOrderButtonHTML();


    const fullHTML = `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>


        <article>
            <h2>Entrees</h2>
            ${entreeHTML}
            <h2>Veggies</h2>
            ${vegetablesHTML}
            <h2>Sides</h2>
            ${sidesHTML}
            ${orderButtonHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `;
    return fullHTML
}
