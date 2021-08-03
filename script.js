let cartItems = [];
let subtotal = 0
let tax = '10%'
let total = ''

function renderCartItems() {
    $('#table-body').text('');

    for (let [index, nameAndPrice] of cartItems.entries()) {
        let tableRow = $('<tr/>', {class: 'table-row'});
        tableRow.attr('data-index', index);
        tableRow.appendTo('#table-body');

        let tableDataName = $('<td/>', {text: nameAndPrice.name, class: 'name'})
        let tableDataPrice = $('<td/>', {text: nameAndPrice.price, class: 'price'})
        let tableDataDelete = $('<a/>', {class: 'delete-item-button'})
        let tableDataDeleteImage = $('<img/>', {class: 'delete-item-button-image', src: 'images/trash.svg'})

        tableDataDeleteImage.appendTo(tableDataDelete);
        tableDataName.appendTo(tableRow);

        tableDataPrice.appendTo(tableRow);
        tableDataDelete.appendTo(tableRow);

    }
}


function calculateSubtotal(cartItems) {
    let subtotal = cartItems.reduce((current, item) => current + Number(item.price), 0)
    return subtotal.toFixed(2);
}

function calculateTax() {
    let tax = calculateSubtotal(cartItems) * 0.1
    return tax.toFixed(2)
}

function calculateTotal() {
    let total = Number(calculateSubtotal(cartItems)) + Number(calculateTax())
    return total.toFixed(2)
}


function displayTaxSubtotalTotal() {
    $('#table-footer').text('');
    addFooterRow('table-footer-row-subtotal', 'Subtotal', calculateSubtotal(cartItems))
    addFooterRow('table-footer-row-tax', 'Tax 10%', calculateTax())
    addFooterRow('table-footer-row-total', 'Total', calculateTotal())
}

function addFooterRow(className, title, amount) {
    let tableFooterRow = $('<tr/>', {class: className});
    tableFooterRow.appendTo('#table-footer');
    let name = $('<th/>', {text: title})
    let number = $('<th/>', {text: amount})
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


$(document).on('click', '.delete-item-button', deleteProduct)

function deleteProduct(event) {
    let product = $(event.target).parent().parent()
    product.remove()
}