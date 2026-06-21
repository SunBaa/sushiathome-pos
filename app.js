// Sushi at Home POS
const menuData = {

    "Dranken": [
        { name: "Coca-Cola", price: 3.00 },
        { name: "Coca-Cola Zero", price: 3.00 },
        { name: "Fanta", price: 3.00 },
        { name: "Sprite", price: 3.00 },
        { name: "Ice Tea", price: 3.00 },
        { name: "Minute Maid Orange", price: 3.00 },
        { name: "Minute Maid Apple", price: 3.00 },
        { name: "Minute Maid Ace", price: 3.00 },
        { name: "Coconut Drink", price: 4.00 },
        { name: "Mango Drink", price: 4.00 },
        { name: "Nordic Tonic", price: 3.80 },
        { name: "Fever Tree", price: 3.80 },
        { name: "Chaudfontaine Niet-Bruisend Glas", price: 3.00 },
        { name: "Chaudfontaine Bruisend Glas", price: 3.00 },
        { name: "Chaudfontaine Niet-Bruisend Fles 1L", price: 7.50 },
        { name: "Chaudfontaine Bruisend Fles 1L", price: 7.50 },
        { name: "Minute Maid Orange", price: 3.00 },
        { name: "Schweppes Agrum", price: 2.70 },
        { name: "Schweppes Tonic", price: 2.70 },
        { name: "Levering 7 euro", price: 7.00 },
        { name: "Levering 6 euro", price: 6.00 },
        { name: "Levering 5 euro", price: 5.00 },
    ],

    "Wijnen": [
    { name: "Witte Wijn Glas", price: 5.50 },
    { name: "Rode Wijn Glas", price: 5.50 },
    { name: "Rosé Wijn Glas", price: 5.50 },
    { name: "Witte Wijn Karaf", price: 12.00 },
    { name: "Rode Wijn Karaf", price: 12.00 },
    { name: "Rosé Wijn Karaf", price: 12.00 },
    { name: "Fles Witte Wijn", price: 19.00 },
    { name: "Fles Rode Wijn", price: 19.00 },
    { name: "Fles Rosé Wijn", price: 19.00 }

    ],
    "Bieren": [
    { name: "Jupiler", price: 3.00 },
    { name: "Stella Artois", price: 3.00 },
    { name: "Duvel", price: 4.00 },
    { name: "Leffe Blond", price: 4.00 },
    { name: "Japans Asahi Bier", price: 4.00 }
    ],

    "Cava": [
    { name: "Cava Glas", price: 6.00 },
    { name: "Cava Fles", price: 21.00 }
    ],

   "Bieren": [
    { name: "Jupiler", price: 3.00 },
    { name: "Stella Artois", price: 3.00 },
    { name: "Duvel", price: 4.00 },
    { name: "Leffe Blond", price: 4.00 },
    { name: "Japans Asahi Bier", price: 4.00 }
    ],

    "Japanse Zoete Wijn": [
    { name: "Fles Choya", price: 21.00 },
    { name: "Glas Choya", price: 6.00 },
    { name: "Choya Krap", price: 14.00 }
    ],

    "Sterke Dranken": [
    { name: "Vodka Smirnoff", price: 6.00 },
    { name: "Johnny Walker Whisky", price: 6.00 },
    { name: "Porto Rood", price: 5.00 },
    { name: "Porto Wit", price: 5.00 },
    { name: "Martini Bianca", price: 5.00 },
    { name: "Martini Rosso", price: 5.00 },
    { name: "Martini Rose", price: 5.00 },
    { name: "Disaronno Amaretto", price: 5.00 },
    { name: "Dry Gin", price: 5.50 }
    ],

    "Gin Tonic": [
    { name: "Gin Tonic Bombay", price: 10.50 },
    { name: "Gin Tonic Hendrick's", price: 12.00 },
    { name: "Gin Tonic Gin Mare", price: 12.00 },
    { name: "Gin Bacur", price: 10.00 },
    { name: "Gin Nordes", price: 11.50 },
    { name: "Marula Gin", price: 13.00 },
    { name: "Pink Gin", price: 11.50 },
    { name: "Bulldog Gin", price: 10.00 },
    { name: "Gin Londen", price: 11.50 },
    { name: "Gin De France", price: 12.00 }
    ],

    "Warme Dranken": [
    { name: "Expresso", price: 2.50 },
    { name: "Koffie", price: 2.50 },
    { name: "Capuccino", price: 3.20 },
    { name: "Irish Coffee", price: 6.20 },
    { name: "Warme Sake", price: 5.70 },
    { name: "Thee Yellow Tea", price: 3.70 },
    { name: "Thee Verse Muntthee", price: 3.70 },
    { name: "Thee Groene Thee", price: 3.70 },
    { name: "Thee Japanse Groene Thee (Matcha)", price: 3.70 },
    { name: "Thee Jasmijnthee", price: 3.70 }
    ],

    "Sushi Combo": [
        { name: "Combo 1", price: 15.00 },
        { name: "Combo 2", price: 17.50 },
        { name: "Combo 3", price: 18.50 },
        { name: "Combo 4", price: 19.50 },
        { name: "Combo 5", price: 18.50 },
        { name: "Combo 6", price: 23.00 },
        { name: "Combo 7", price: 29.00 },
        { name: "Vegetarische Maki Combo (24 stuks)", price: 24.00 },
        { name: "Nigiri Combo (10 stuks)", price: 15.00 },
        { name: "Nigiri Zalm en Tonijn Combo (10 stuks)", price: 16.50 },
        { name: "Hoso Combo (24 stuks)", price: 21.00}
    ],

    "Japanse Grill": [
        { name: "Teriyaki Kip", price: 18.00 },
        { name: "Teriyaki Rund", price: 20.00 },
        { name: "Teriyaki Eend", price: 22.00 },
        { name: "Teriyaki Zalm", price: 22.00 },
        { name: "Teriyaki Tonijn", price: 23.00 },
        { name: "Teriyaki Mix", price: 26.00 }
    ],

    "Voor de Jongsten": [
    { name: "Gebakken Kindernoedels", price: 9.00 },
    { name: "Gebakken Kinderrijst met Kip", price: 9.00 },
    { name: "Mini Kipfilet met Frieten", price: 8.50 },
    { name: "Fish Stick met Frieten", price: 9.00 },
    { name: "Curryworst met Frieten", price: 8.00 }
    ],

    "Salades": [
    { name: "Zeewiersalade", price: 7.00 },
    { name: "Kipsalade", price: 11.00 },
    { name: "Kamikaze Salade", price: 12.00 },
    { name: "Mangosalade", price: 9.00 },
    { name: "Marguro Busto Gemarineerde Tonijn", price: 14.00 },
    { name: "Salade Mix", price: 15.00 },
    { name: "Scampisalade", price: 13.50 },
    { name: "Zalmsalade Avocado", price: 14.50 }
    ],

    "Wok Noedels": [
        { name: "Wok Veggie", price: 12.00 },
        { name: "Wok Kip", price: 15.00 },
        { name: "Wok Scampi", price: 16.00 },
        { name: "Wok Rund", price: 16.00 },
        { name: "Wok Zeevruchten", price: 17.00 }
    ],

    "Pad Thai": [
        { name: "Pad Thai Veggie", price: 12.00 },
        { name: "Pad Thai Kip", price: 15.00 },
        { name: "Pad Thai Rund", price: 16.00 },
        { name: "Pad Thai Scampi", price: 16.00 }
    ],

    "Roergebakken Rijst": [
        { name: "Vegetarische Rijst", price: 12.00 },
        { name: "Rijst Kip", price: 15.00 },
        { name: "Rijst Scampi", price: 16.00 },
        { name: "Rijst Rundvlees", price: 16.00 },
        { name: "Rijst Zeevruchten", price: 16.00 }
    ],

    "Thaise Curry": [
        { name: "Veggie Curry", price: 14.00 },
        { name: "Kip Curry", price: 17.00 },
        { name: "Scampi Curry", price: 18.50 },
        { name: "Rund Curry", price: 18.00 },
        { name: "Vis Curry", price: 18.50 }
    ],

    "Aziatische Curry": [
    { name: "Chicken Curry met Rijst", price: 16.00 },
    { name: "Chicken Mango Curry met Rijst", price: 17.00 },
    { name: "Chicken Kokos Curry met Rijst", price: 17.00 }
    ],

    "Edamame": [
    { name: "Sojaboon­tjes met Zeezout", price: 7.00 }
    ],

    "Yakitori Saté": [
    { name: "Kip Yakitori", price: 11.00 },
    { name: "Zeevruchten Yakitori", price: 13.00 }
    ],

    "Tempura - Gefrituurd": [
    { name: "Yashi Tempura 6 st", price: 7.00 },
    { name: "Ebi Tempura 6 st", price: 8.00 },
    { name: "Zeevruchten Tempura 6 st", price: 8.50 },
    { name: "Ebi Fried Tempura 6 st", price: 9.00 },

    { name: "Ebi Tempura 12 st", price: 14.00 },
    { name: "Ebi Fried Tempura Scampi's 12 st", price: 16.00 },
    { name: "Yashi Tempura 12 st", price: 14.00 },
    { name: "Zeevruchten Tempura 12 st", price: 16.00 },

    { name: "Zalm Crispy met Groenten", price: 16.00 },
    { name: "Kip Crispy met Groenten", price: 14.00 }
    ],

    "Gyoza": [
        { name: "Gyoza Mix 6", price: 8.50 },
        { name: "Gyoza Veggie 6", price: 7.50 },
        { name: "Gyoza Scampi 6", price: 8.50 },
        { name: "Gyoza Mix 12", price: 15.50 },
        { name: "Gyoza Veggie 12", price: 12.00 },
        { name: "Gyoza Scampi 12", price: 16.00 },
        { name: "Gyoza Kip 12", price: 15.00 },
        { name: "Gyoza Kip 6", price: 7.50 }
    ],

    "Soepen": [
    { name: "Kippensoep Rijstnoedels", price: 9.00 },
    { name: "Miso Soep Toffi", price: 6.50 },
    { name: "Wantan Soep Groenten", price: 9.00 },
    { name: "Vissoep", price: 11.50 },
    { name: "Groentesoep Noedels", price: 6.50 },
    { name: "Vegetarische Loempia's 6 st", price: 6.00 },
    { name: "Loempia's met Kip 3 st", price: 7.50 }
],

    "Dimsum": [
    { name: "Dimsum Chicken 6 st", price: 7.50 },
    { name: "Dimsum Scampi 6 st", price: 7.50 },
    { name: "Dimsum Pork 6 st", price: 7.50 },
    { name: "Vegetarische Dimsum 6 st", price: 6.50 },
    { name: "Dimsum Mix 6 st", price: 7.50 },
    { name: "House Dimsum 6 st", price: 7.00 },

    { name: "Dimsum Chicken 12 st", price: 15.00 },
    { name: "Dimsum Scampi 12 st", price: 15.00 },
    { name: "Dimsum Pork 12 st", price: 15.00 },
    { name: "Vegetarische Dimsum 12 st", price: 11.00 },
    { name: "Dimsum Mix 12 st", price: 15.00 },
    ],

    "Sushi Boats": [
    { name: "Sushi Boat", price: 30.00 },
    { name: "Mix Maki Boat", price: 47.00 },
    { name: "Medium Boat", price: 50.00 },
    { name: "Sushi at Home Deluxe", price: 60.00 },
    { name: "Japanese Boat", price: 56.00 },
    { name: "Belgium Boat", price: 67.00 },
    { name: "Titanic Boat", price: 110.00 },
    { name: "Titanic Combo", price: 155.00 }
    ],

    "Futomaki": [
    { name: "Maki Veggie Avocado", price: 9.00 },
    { name: "Maki Veggie Mango", price: 9.00 },
    { name: "Cucumber Tempura Maki", price: 10.00 },
    { name: "Maki Tempura Avocado", price: 10.00 },
    { name: "Maki Salmon Cucumber", price: 10.00 },
    { name: "Maki Salmon Avocado", price: 10.00 },
    { name: "Maki Tuna Cucumber", price: 11.00 },
    { name: "Maki Tuna Avocado", price: 11.00 },
    { name: "Maki Kamikaze Salmon", price: 10.00 },
    { name: "Maki Kamikaze Tuna", price: 11.00 },
    { name: "Maki Sushi Ypres Roll", price: 10.00 },
    { name: "Maki Chicken Mango", price: 10.00 },
    { name: "Maki Chicken Avocado", price: 10.00 },
    { name: "Hoso Maki", price: 7.00 },
    { name: "Maki Veggie Cucumber", price: 9.00 }
    ],

    "Sushi à la Carte": [
    { name: "Handrol Zalm", price: 7.00 },
    { name: "Handrol Tonijn", price: 8.50 },
    { name: "Dragon Eye Gefrituurde Sushi", price: 8.50 },
    { name: "Dragon Eye Gefrituurde Avocado", price: 8.50 },
    { name: "Dragon Eye Gefrituurde Scampie", price: 8.50 },
    { name: "Dragon Eye Gefrituurde Chicken", price: 8.50 },
    { name: "Dragon Eye Tonen", price: 8.50 }
    ],

    "Uramaki": [
    { name: "Sexy Roll", price: 10.00 },
    { name: "Green Dragon", price: 10.00 },
    { name: "California Maki Salmon", price: 10.00 },
    { name: "California Maki Tuna", price: 10.00 },
    { name: "California Cucumber", price: 9.00 },
    { name: "California Avocado", price: 9.00 },
    { name: "California Scampi", price: 10.00 },
    { name: "Spicy Tuna Maki", price: 10.00 },
    { name: "Sushi at Home Roll", price: 12.00 },
    { name: "Tokyo Roll", price: 12.00 }
    ],

    "Sashimi": [
    { name: "Sashimi Combo", price: 30.00 },
    { name: "Sashimi Zalm", price: 14.00 },
    { name: "Sashimi Tonijn Zalm", price: 19.00 },
    { name: "Sashimi Tonijn", price: 22.00 }
    ],

    "Licht Gebakken Sashimi": [
    { name: "Sashimi Tonijn en Zalm Licht Gebakken", price: 14.50 },
    { name: "Sashimi Zalm Licht Gebakken", price: 14.50 },
    { name: "Sashimi Tonijn Licht Gebakken", price: 16.00 }
    ],
    
    "Nigiri": [
        { name: "Nigiri Zalm", price: 6.00 },
        { name: "Nigiri Tonijn", price: 6.50 },
        { name: "Nigiri Omelet", price: 5.50 },
        { name: "Nigiri Zeebaars", price: 6.00 },
        { name: "Nigiri Scampi", price: 6.00 }
    ],

    "Desserten": [
        { name: "Dame Blanche", price: 7.00 },
        { name: "Gebakken Ijs", price: 7.00 },
        { name: "Japanese Ice Cream", price: 9.00 }
    ]
};
console.log("APP.JS GELADEN");
let currentTable = null;
let orders = JSON.parse(localStorage.getItem("orders")) || {};

const tablesScreen = document.getElementById("tables-screen");
const orderScreen = document.getElementById("order-screen");
const tableTitle = document.getElementById("tableTitle");
const orderList = document.getElementById("orderList");
const totalElement = document.getElementById("total");

function saveOrders() {
    localStorage.setItem("orders", JSON.stringify(orders));
}

function updateTableColors() {
    document.querySelectorAll(".table").forEach(btn => {
        const table = btn.dataset.table;

        if (orders[table] && orders[table].length > 0) {
            btn.classList.remove("free");
            btn.classList.add("busy");
        } else {
            btn.classList.remove("busy");
            btn.classList.add("free");
        }
    });
}

function openTable(tableNumber) {
    currentTable = tableNumber;

    if (!orders[currentTable]) {
        orders[currentTable] = [];
    }

    tableTitle.textContent = `Tafel ${tableNumber}`;

    tablesScreen.classList.add("hidden");
    orderScreen.classList.remove("hidden");

    renderOrder();
}

function renderOrder() {

    orderList.innerHTML = "";

    let total = 0;

    const grouped = {};

    orders[currentTable].forEach(item => {

        total += item.price;

        if (!grouped[item.name]) {
            grouped[item.name] = {
                qty: 0,
                price: item.price
            };
        }

        grouped[item.name].qty++;
    });

    Object.keys(grouped).forEach(name => {

        const item = grouped[name];

        const li = document.createElement("li");

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";

        removeBtn.onclick = () => {

            const index = orders[currentTable]
                .findIndex(order => order.name === name);

            if (index > -1) {
                orders[currentTable].splice(index, 1);
            }

            saveOrders();
            renderOrder();
            updateTableColors();
        };

        li.innerHTML =
            `<strong>${item.qty}x</strong> ${name}
             - €${(item.qty * item.price).toFixed(2)} `;

        li.appendChild(removeBtn);

        orderList.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);
}

function addItem(name, price) {
    if (!currentTable) return;

    orders[currentTable].push({
        name,
        price
    });

    saveOrders();
    renderOrder();
    updateTableColors();
}

document.querySelectorAll(".table").forEach(btn => {
    btn.addEventListener("click", () => {
        openTable(btn.dataset.table);
    });
});

document.querySelectorAll(".menu-item").forEach(btn => {
    btn.addEventListener("click", () => {

        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);

        addItem(name, price);
    });
});

document.getElementById("backBtn").addEventListener("click", () => {
    orderScreen.classList.add("hidden");
    tablesScreen.classList.remove("hidden");

    updateTableColors();
});

document.getElementById("clearTable").addEventListener("click", () => {

    if (!currentTable) return;

    if (confirm("Tafel leegmaken?")) {
        orders[currentTable] = [];

        saveOrders();
        renderOrder();
        updateTableColors();
    }
});

function renderMenu() {

    const container = document.getElementById("menuContainer");

    container.innerHTML = "";

    const categoryBar = document.createElement("div");
    categoryBar.className = "category-bar";

    const productsDiv = document.createElement("div");
    productsDiv.id = "productsDiv";

    Object.keys(menuData).forEach(category => {

        const catBtn = document.createElement("button");

        catBtn.className = "category-btn";
        catBtn.textContent = category;

        catBtn.addEventListener("click", () => {

            productsDiv.innerHTML = "";

            menuData[category].forEach(item => {

                const button = document.createElement("button");

                button.className = "menu-item";

                button.textContent =
                    `${item.name} (€${item.price.toFixed(2)})`;

                button.addEventListener("click", () => {
                    addItem(item.name, item.price);
                });

                productsDiv.appendChild(button);
            });

        });

        categoryBar.appendChild(catBtn);
    });

    container.appendChild(categoryBar);
    container.appendChild(productsDiv);
}

renderMenu();
updateTableColors();
