// add to cart
const items = document.querySelectorAll('.container-toCart');
const cartItems = document.getElementById('cart-items');
items.forEach(item => {
    const plusBtn = item.querySelector('.plus-btn');
    const minusBtn = item.querySelector('.minus-btn');
    const quantitySpan = item.querySelector('.quantity');
    const addToCartBtn = item.querySelector('.add-to-cart');

    let quantity = 0;
    let isCart = false;

    plusBtn.addEventListener('click', () => {
        quantity++;
        quantitySpan.textContent = quantity;
    });

    minusBtn.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            quantitySpan.textContent = quantity;
        }
    });

    const priceOfproduct = document.querySelector('.price-left');
    const cartImg = document.querySelector('.cart-img')
    const cartmodel = document.querySelector('.cartmodel')
    const model = document.querySelector('.model')
    const pricetag = document.querySelector('.price-tag')
    const total = document.querySelector('.cart-total')
    const bin_btn = document.querySelector('.bin-btn')
    const emptytxt = document.getElementById('emptytxt');
    const checkout_btn = document.querySelector('.checkout');
    const notificationcart = document.querySelector('.notification-cart');
    addToCartBtn.addEventListener('click', () => {
         const totalPrice = parseFloat(priceOfproduct.innerHTML * quantity).toFixed(2);
        if (quantity > 0) {
            emptytxt.classList.add('hidden');
            checkout_btn.classList.add('open')
            notificationcart.innerHTML = quantity
            cartImg.src = mainImage.src;
            cartmodel.innerHTML = model.innerHTML
            pricetag.textContent = `$${priceOfproduct.innerHTML}x${quantity}`;
            total.textContent = `$${totalPrice}`;
            bin_btn.innerHTML = `<img src="./images/icon-delete.svg" alt="">`;
            quantitySpan.innerHTML = '0'
            quantity = 0
        }
    });

    bin_btn.addEventListener('click', () => {
        emptytxt.classList.remove('hidden')
        checkout_btn.classList.remove('open')
        quantity = 0;
        notificationcart.innerHTML = ''
        cartImg.src = '';
        cartmodel.innerHTML = '';
        pricetag.textContent = '';
        total.textContent = '';
        bin_btn.innerHTML = ``;
    })
});

const cart = document.querySelector('.cart-items')
cart.addEventListener('click', () => {
    let dropdownCart = document.querySelector('.dropdown-cart')
    dropdownCart.classList.toggle('open');
})
