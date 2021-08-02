let cartItems = [];

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

let items = $('.add-to-cart')

function addProduct(event) {
    let item = {}
    item.name = $(event.target).next().html()
    item.price = $(event.target).next().next().html()
    cartItems.push(item)
    renderCartItems()
}

items.on('click', addProduct);
