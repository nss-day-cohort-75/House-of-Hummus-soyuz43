import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entreesHTML = await Entrees()
    const veggiesHTML = await Veggies()
    const sidesHTML = await Sides()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>


        <article>
            <h2>Entrees</h2>
            ${entreesHTML}
            <h2>Veggies</h2>
            ${veggiesHTML}
            <h2>Sides</h2>
            ${sidesHTML}
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
FoodTruck();