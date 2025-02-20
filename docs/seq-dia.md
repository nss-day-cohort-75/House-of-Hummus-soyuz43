```mermaid
sequenceDiagram
    participant Data as database.json
    participant MenuModules as Menu Modules (Veg/Side/Base)
    participant PurchaseButton as Purchase Button (Sales)
    participant FoodTruckJS as FoodTruck.js (HTML Construct)
    participant TransientState as TransientState
    participant MainJS as Main.js
    participant UI as DOM
    participant User as User

    Data->>+MenuModules: Send available food data
    MenuModules->>FoodTruckJS: Send Base Dishes & Radio Buttons
    FoodTruckJS->>+MainJS: Constructs and sends HTML for rendering
    MainJS->>UI: Render food selection options
    MainJs->>UI:Send Event Listeners
    User->>UI: Selects side/veg/entree
    UI->>TransientState: Send user-selected food choices
    User->>PurchaseButton: Click "Purchase Combo"
    PurchaseButton->>TransientState: Purchase Made
    TransientState->>+Data: Send Purchase Object
    PurchaseButton->>UI: Window Alert that the purchase completed
    Data->>-UI: Confirm purchase stored
    UI->>User: Display updated ledger
