const menuMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.menu');

const carritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cardsConteiner = document.querySelector('.cards-container');

menuMail.addEventListener('click', changeDesktopMenu);

burgerMenu.addEventListener('click', changeMobileMenu);

carritoIcon.addEventListener('click', viewCarrito);

function changeDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
};

function changeMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
};

function viewCarrito(){
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
};

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bored 2',
    price: 180,
    image: '/img/bored1.png',
});
productList.push({
    name: 'bored',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts (arr) {
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute ('src', './icons/bt_add_to_cart.svg');
        //hasta aca creo todos los contenedores

        productInfoFigure.appendChild(productImgCard); //agrego img dentro del contenedor figure

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productInfo);
        productCard.appendChild(productImage);

        cardsConteiner.appendChild(productCard);
    }
};

renderProducts(productList);