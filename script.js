let cartItems = [
    {name: 'Toy', price: 99},
    {name: 'Chicken', price: 199},
    {name: 'Rooster', price: 9},
    {name: 'Cat', price: 19},
    {name: 'Dog', price: 129},

];
function renderCartItems() {
    $('#table-body').text('');
    for (let nameAndPrice of cartItems) {
        let tableRow = $('<tr/>', {class: 'table-row'});
        tableRow.appendTo('#table-body');
        let tableDataName = $('<td/>', {text: nameAndPrice.name, class: 'name'})
        let tableDataPrice = $('<td/>', {text: nameAndPrice.price, class: 'price'})
        tableDataName.appendTo(tableRow);
        tableDataPrice.appendTo(tableRow);

    }
}

renderCartItems()

function addCartItem(product) {
    products.push(product)
    renderCartItems()
}

function removeCartItem(product) {
    products.delete() // magic
    renderCartItems()
}


let items = $('.add-to-cart')

function addProduct() {
    console.log("Продукт добавлен")
}

items.on('click', addProduct);
