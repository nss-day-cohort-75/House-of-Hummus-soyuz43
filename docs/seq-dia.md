```mermaid
sequenceDiagram
    participant User as User
    participant UI as DOM
    participant Main as Main.js
    participant foodtruck.js as HTML Construct
    participant Modules as Modules (Veg/Side/Base)
    participant Data as database.json
    participant purchaseBtn as Purchase Button (Sales)

    Data->>+Modules: Sends food data
    Modules->>+foodtruck.js: Provide Base Dishes & Radio Buttons
    foodtruck.js->>+Main: Constructed HTML elements
    Main->>+UI: Render food options

    User->>UI: Selects side, veg, and entree
    UI->>purchaseBtn: Sends selection
    User->>purchaseBtn: Clicks "Purchase Combo"
    
    purchaseBtn->>+Data: POST new purchase
    Data-->>-purchaseBtn: Confirms purchase stored
    purchaseBtn-->>-UI: Confirms purchase completed

    Data-->>+UI: Updates ledger
    UI-->>-User: Displays updated ledger
