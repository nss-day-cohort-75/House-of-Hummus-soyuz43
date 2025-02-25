```mermaid
sequenceDiagram
    participant User as User
    participant UI as DOM
    participant MainJS as Main.js
    participant FoodTruckJS as FoodTruck.js (HTML Construct)
    participant MenuModules as Menu Modules (Veg/Side/Base)
    participant PurchaseButton as Purchase Button (Sales)
    participant TransientState as TransientState
    participant Data as database.json

    MainJS->>FoodTruckJS: Request HTML Construct
    FoodTruckJS->>MenuModules: Request HTML Data
    MenuModules->>Data: Request arrays for each option (Veg/Side/Base)
    Data->>+MenuModules: Return data for (Veg/Side/Base)
    MenuModules->>FoodTruckJS: Send Mapped Data & Radio Buttons
    FoodTruckJS->>+MainJS: Constructs and sends HTML for rendering
    MainJS->>UI: Render food selection options
    User->>UI: Selects side/veg/entree
    UI->>TransientState: Send user-selected food choices
    User->>PurchaseButton: Click "Purchase Combo"
    PurchaseButton->>TransientState: Purchase Made
    TransientState->>+Data: Send Purchase Object
    PurchaseButton->>UI: Window Alert that the purchase completed
    Data->>-PurchaseButton: Send POST response
    PurchaseButton->>FoodTruckJS: Confirmation Passed
    FoodTruckJS->>MainJS:  Pass POST 
    MainJS->>UI: Display updated ledger

