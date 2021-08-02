let cartItems = [];
let subtotal = 0
let tax = '10%'
let total = ''

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

function calculateSubtotal(cartItems) {
    let arrayOfPrice = []
    for (let nameAndPrice of cartItems) {
        arrayOfPrice.push(Number(nameAndPrice.price))
    }
    let subtotal = arrayOfPrice.reduce((currentAmount, previousAmount) => currentAmount + previousAmount, 0)
    return subtotal.toFixed(2);
}


function displayTaxSubtotalTotal() {
    $('#table-footer').text('');
    addFooterRow('table-footer-row-subtotal', 'Subtotal', calculateSubtotal(cartItems))
    addFooterRow('table-footer-row-tax', 'Tax', tax)
    addFooterRow('table-footer-row-total', 'Total', total)
}

function addFooterRow(className, title, amount) {
    let tableFooterRow = $('<tr/>', {class: className});
    tableFooterRow.appendTo('#table-footer');
    let name = $('<th/>', {text: title})
    let number = $('<th/>', {text: amount, class: 'subtotal'})
    name.appendTo(tableFooterRow);
    number.appendTo(tableFooterRow);
}

let items = $('.add-to-cart')

function addProduct(event) {
    let item = {}
    item.name = $(event.target).next().html()
    item.price = $(event.target).next().next().html()
    cartItems.push(item)
    renderCartItems()
    displayTaxSubtotalTotal()
}

items.on('click', addProduct);
