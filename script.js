let shoppingList = [
                    {name: 'Toy', price: 99},
                    {name: 'Chicken', price: 199},
                    {name: 'Rooster', price: 9},
                    {name: 'Cat', price: 19},

];


for (let nameAndPrice of shoppingList) {
    let tableRow = $('<tr/>', {class: 'table-row'});
    tableRow.appendTo('#table-body');
    let tableDataName = $('<td/>', {text: nameAndPrice.name, class: 'name'})
    let tableDataPrice = $('<td/>', {text: nameAndPrice.price, class: 'price'})
    tableDataName.appendTo(tableRow);
    tableDataPrice.appendTo(tableRow);
}



// let items = $('button')

// function addToShopingList() {
//     items.next().clone().appendTo('.cart');
// }

// items.on('click', addToShopingList);
