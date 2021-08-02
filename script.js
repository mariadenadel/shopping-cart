let cartItems = [];
let subtotal = ''
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

function displayTaxSubtotalTotal() {
    $('#table-footer').text('');
    let tableFooterRowSubtotal = $('<tr/>', {class: 'table-footer-row-subtotal'});
    let tableFooterRowTax = $('<tr/>', {class: 'table-footer-row-tax'});
    let tableFooterRowTotal = $('<tr/>', {class: 'table-footer-row-total'});
    tableFooterRowSubtotal.appendTo('#table-footer');
    tableFooterRowTax.appendTo('#table-footer');
    tableFooterRowTotal.appendTo('#table-footer');
    let subtotalName = $('<th/>', {text: 'Subtotal', class: 'subtotal'})
    let subtotalNumber = $('<th/>', {text: subtotal, class: 'subtotal'})
    subtotalName.appendTo(tableFooterRowSubtotal);
    subtotalNumber.appendTo(tableFooterRowSubtotal);
    let taxName = $('<th/>', {text: 'Tax', class: 'tax'})
    let taxNumber = $('<th/>', {text: tax, class: 'tax'})
    taxName.appendTo(tableFooterRowTax);
    taxNumber.appendTo(tableFooterRowTax);
    let totalName = $('<th/>', {text: 'Total', class: 'total'})
    let totalNumber = $('<th/>', {text: total, class: 'total'})
    totalName.appendTo(tableFooterRowTotal);
    totalNumber.appendTo(tableFooterRowTotal);
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