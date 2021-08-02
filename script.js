let cartItems = [{name: "toy", price: 99}];
let totalTaxSubtotal = [
                        {subtotal: 90},
                        {tax: 0.1},
                        {total: 99},
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
        console.log(tableDataPrice)

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
