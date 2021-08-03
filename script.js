let items = [
            {id: 1, name: "Cat", price: 9.99},
            {id: 2, name: "Duck", price: 19.99},
            {id: 3, name: "Squirrel", price: 99.99},
]

let cartItems = [];
let subtotal = 0
let tax = '10%'
let total = ''


function renderItems() {
    for (let idNamePriceImage of items) {
        let div = $('<div/>', {class: 'col col-xs-12 col-md-6 col-lg-4'})
        div.appendTo('.row')

        let imageDiv = $('<div/>')
        let image = $('<img>', {src: `images/${idNamePriceImage.id}.jpg`})
        let addToCartButton = $('<button/>', {text: 'Add To Card', class: 'btn btn-primary add-to-cart', type: 'button'})
        let nameOfProduct = $('<h2/>', {text: idNamePriceImage.name})
        let priceOfProduct = $('<p/>', {text: idNamePriceImage.price})



        imageDiv.appendTo(div)
        image.appendTo(imageDiv)
        addToCartButton.appendTo(div)
        nameOfProduct.appendTo(div)
        priceOfProduct.appendTo(div)
    }
}



renderItems()










// function renderCartItems() {
//     $('#table-body').text('');

//     for (let [index, nameAndPrice] of cartItems.entries()) {
//         let tableRow = $('<tr/>', {class: 'table-row'});
//         tableRow.attr('data-index', index);
//         tableRow.appendTo('#table-body');

//         let tableDataName = $('<td/>', {text: nameAndPrice.name, class: 'name'})
//         let tableDataPrice = $('<td/>', {text: nameAndPrice.price, class: 'price'})

//         let tableDataDelete = $('<a/>', {class: 'delete-item-button'})
//         let tableDataDeleteImage = $('<img/>', {class: 'delete-item-button-image', src: 'images/trash.svg'})

//         let tableDataAmount = $('<td/>')
//         let dataAmount = $('<input/>', {type: 'number', value: '1', min: '1'})


//         tableDataDeleteImage.appendTo(tableDataDelete);
//         tableDataName.appendTo(tableRow);

//         tableDataPrice.appendTo(tableRow);
//         tableDataDelete.appendTo(tableRow);

//         dataAmount.appendTo(tableDataAmount)
//         tableDataAmount.appendTo(tableRow);

//     }
//     displayTaxSubtotalTotal()
// }

// function calculateSubtotal(cartItems) {
//     let subtotal = cartItems.reduce((current, item) => current + Number(item.price), 0)
//     return subtotal.toFixed(2);
// }

// function calculateTax() {
//     let tax = calculateSubtotal(cartItems) * 0.1
//     return tax.toFixed(2)
// }

// function calculateTotal() {
//     let total = Number(calculateSubtotal(cartItems)) + Number(calculateTax())
//     return total.toFixed(2)
// }


// function displayTaxSubtotalTotal() {
//     $('#table-footer').text('');
//     addFooterRow('table-footer-row-subtotal', 'Subtotal', calculateSubtotal(cartItems))
//     addFooterRow('table-footer-row-tax', 'Tax 10%', calculateTax())
//     addFooterRow('table-footer-row-total', 'Total', calculateTotal())
// }

// function addFooterRow(className, title, amount) {
//     let tableFooterRow = $('<tr/>', {class: className});
//     tableFooterRow.appendTo('#table-footer');
//     let name = $('<th/>', {text: title})
//     let number = $('<th/>', {text: amount})
//     name.appendTo(tableFooterRow);
//     number.appendTo(tableFooterRow);
// }

// let items = $('.add-to-cart')

// function addProduct(event) {
//     let item = {}
//     item.name = $(event.target).next().html()
//     item.price = $(event.target).next().next().html()
//     cartItems.push(item)
//     renderCartItems()
// }

// items.on('click', addProduct);


// $(document).on('click', '.delete-item-button', deleteProduct)

// function deleteProduct(event) {
//     let index = $(event.target).parent().parent().data('index')
//     cartItems.splice(index, 1)
//     renderCartItems()
// }

// function cartItemsGroupedByItem() {
//     var result = {}
//     for id of cartItems
//         if result[id]
//             result[id] += 1
//         else
//             result[id] = 0

//     return result
//     return {
//         3: 1,
//     }
//     [{id: 1, count: 1}]
// }