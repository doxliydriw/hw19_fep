// Реалізувати подобу інтернет-магазину

// Дано 3 блоки

// У лівій частині сторінки – перелік категорій.
// При натисканні на категорію виводиться у середній блок список товарів цієї категорії.
// Клік на товар – інформацію про товар у правому блоці.
// В інформації товару - кнопка "купити"
// При натисканні на “купити” з"являється повідомлення, що товар куплено та повернення у вихідний стан програми
// (коли відображається лише список категорій)


const data = [
    {
        category: "bread",
        products: [
            {
                product: "banana bread",
                description: "a moist and sweet quick bread made with ripe bananas, flour, sugar, eggs, and butter",
                price: "10"
            },
            {
                product: "baguette",
                description: "a crisp and slender baked stick of bread, often served as an appetizer or snack",
                price: "10"
            },
            {
                product: "breadstick",
                description: "a long and thin loaf of French bread with a crisp crust and soft interior",
                price: "10"
            },
            {
                product: "whole_wheat_bread",
                description: "a type of bread made with flour that contains the whole grain of wheat, including the bran and germ",
                price: "10"
            },
            {
                product: "brioche",
                description: "a rich and buttery yeast bread with a tender crumb and a golden crust",
                price: "10"
            },
        ]
    },
    {
        category: "milk",
        products: [
            {
                product: "0% fat milk",
                description: "also known as skim milk, it is milk that has had all the fat removed",
                price: "15"
            },
            {
                product: "1,6% fat milk",
                description: "also known as low-fat milk, it is milk that has some of the fat removed, usually 1.5% or 1.8% in Europe",
                price: "14"
            },
            {
                product: "3,2% fat milk",
                description: "also known as whole milk, it is milk that has not had any fat removed, usually 3.25% or 3.5% in North America",
                price: "13"
            },
            {
                product: "goat milk",
                description: "milk that comes from goats, which has a slightly tangy flavor and more protein and calcium than cow's milk",
                price: "12"
            },
            {
                product: "almond milk",
                description: "a plant-based milk alternative made from almonds and water, which is dairy-free, vegan, and low in calories",
                price: "11"
            },
        ]
    },
    {
        category: "meat",
        products: [
            {
                product: "beef",
                description: "the meat from cattle, which is high in protein and iron and can be cooked in various ways",
                price: "15"
            },
            {
                product: "veal",
                description: "the meat from young calves, which is tender and pale in color and often used for escalopes or cutlets",
                price: "14"
            },
            {
                product: "pork",
                description: "the meat from pigs, which is versatile and flavorful and can be roasted, grilled, fried, or cured",
                price: "13"
            },
            {
                product: "lamb",
                description: "the meat from young sheep, which is succulent and mild in taste and often served with mint sauce or rosemary",
                price: "12"
            },
            {
                product: "goat",
                description: "the meat from goats, which is lean and gamey in flavor and popular in Caribbean, African, and Middle Eastern cuisines",
                price: "11"
            },
        ]
    }
]


const category = document.getElementById("category");
const products = document.getElementById("products");
const product_info = document.getElementById("product_info");
const buy = document.getElementById("buy");

let currentCat = {};
let currentProd = {};


window.onload = () => {
    const ul = document.createElement("ul");
    data.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element.category;
        li.setAttribute("id", element.category)
        ul.appendChild(li);
    })
    category.appendChild(ul);
    console.log("finished");
}

//////// EventListener for the CATEGORIES LIST.////////
category.addEventListener("click", (e) => {
    const click = e.target.id
    const choice = data.filter((obj) => {
        return obj.category === click;
    });
    // console.log(choice);
    products.innerHTML = '';
    product_info.innerHTML = '';
    product_info.style.display = 'none';
    const ul = document.createElement("ul");
    choice[0].products.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element.product;
        li.setAttribute("id", element.product)
        ul.appendChild(li);
        return currentCat = choice;
    })
    products.appendChild(ul);
    products.style.display = "flex";
    return currentCat;
})

//////// EventListener for the PRODUCT LIST.////////
products.addEventListener("click", (e) => {
    var children = products.children[0].children
    for (var i = 0; i < children.length; i++) {
        children[i].style.backgroundColor = "lightgrey";
    }
    const click = e.target.id;
    // console.log(click);
    const choice = currentCat[0].products.filter(function (product) {
        return product.product === click;
    })
    // console.log(choice);
    product_info.innerHTML = '';
    const p = document.createElement("p");
    p.textContent = choice[0].description;
    product_info.appendChild(p);
    product_info.appendChild(buy);
    document.getElementById(click).style.background = "lightblue"
    product_info.style.display = "flex";
    return currentProd = choice;
})

//////// EventListener for the BUY BUTTON.////////
buy.addEventListener("click", (e) => {
    alert('Added to bascket')
    products.innerHTML = '';
    product_info.innerHTML = '';
    products.style.display = 'none';
    product_info.style.display = 'none';
})


// function createList(elem, parent) {
//     const ul = document.createElement("ul");
//     for (i in data.elem) {
//         let li = document.createElement("li");
//         li.textContent = i[0];
//         li.setAttribute("id", i[0])
//         ul.appendChild(li);
//     }
//     parent.appendChild(ul);

// }

