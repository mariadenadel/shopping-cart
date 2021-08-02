let products = [
                    {name: 'Toy', price: 99},
                    {name: 'Chicken', price: 199},
                    {name: 'Rooster', price: 9},
                    {name: 'Cat', price: 19},

];
function addItemsInShoppingList(products) {
    for (let nameAndPrice of products) {
        let tableRow = $('<tr/>', {class: 'table-row'});
        tableRow.appendTo('#table-body');
        let tableDataName = $('<td/>', {text: nameAndPrice.name, class: 'name'})
        let tableDataPrice = $('<td/>', {text: nameAndPrice.price, class: 'price'})
        tableDataName.appendTo(tableRow);
        tableDataPrice.appendTo(tableRow);
    }
}

addItemsInShoppingList(products)



// let items = $('button')

// function addToShopingList() {
//     items.next().clone().appendTo('.cart');
// }

// items.on('click', addToShopingList);
