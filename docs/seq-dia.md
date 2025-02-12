```mermaid
sequenceDiagram
    participant MenuModules as Menu Modules (Veg/Side/Base)
    participant PurchaseButton as Purchase Button (Sales)
    participant FoodTruckJS as FoodTruck.js (HTML Construct)
    participant MainJS as Main.js
    participant UI as DOM
    participant Data as database.json
    participant User as User

    Data->>+MenuModules: Send available food data
    MenuModules->>FoodTruckJS: Send Base Dishes & Radio Buttons
    FoodTruckJS->>+MainJS: Constructs and sends HTML for rendering
    MainJS->>UI: Render food selection options
    User->>UI: Selects side/veg/entree
    UI->>PurchaseButton: Send user-selected food choices
    User->>PurchaseButton: Click "Purchase Combo"
    PurchaseButton->>+Data: POST purchase data
    Data->>-UI: Confirm purchase stored
    PurchaseButton->>UI: Confirm purchase completed
    UI->>User: Display updated ledger
