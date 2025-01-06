const products = [
    { id: 1, name: 'მობილური ტელეფონი', price: 299.99, description: 'კარგი ხარისხის კამერით მაღალი ხარისხის მობილური ტელეფონი.', category: 'ელექტრონიკა', image: 'https://shorturl.at/w8w9e2F1000021257.jpg&image=https%3A%2F%2Fi.ibb.co%2FfkYLbS7%2F1000021258.jpg&image=https%3A%2F%2Fi.ibb.co%2FxL0mt7V%2F1000021259.jpg&image=https%3A%2F%2Fi.ibb.co%2FXzydCb0%2F1000021260.jpg&image=https%3A%2F%2Fi.ibb.co%2Ff0VDTXY%2F1000021261.jpg&animationType=slide&autoPlay=false&radioButtonType=square&radioButtonSize=47&radioButtonGap=10&arrowsType=arrow-ios&arrowsBackground=hidden&arrowsBackgroundVisibility=222&arrowsSize=32&arrowsOffset=2&arrowsColor=%23666666' },
    { id: 2, name: 'სარეცხი მანქანა', price: 399.99, description: 'სრულად ავტომატური სარეცხი მანქანა მოწინავე ფუნქციებით.', category: 'სანტექნიკა', image: 'https://shorturl.at/w8w9e', sellerPhone: '123-456-7891' },
    { id: 3, name: 'ელექტრული გიტარა', price: 499.99, description: 'პროფესიონალური ელექტრული გიტარა განსაკუთრებული ხმით.', category: 'მუსიკალური', image: 'https://imageslidergenerator.shahmirfaisal.com/slider?image=https%3A%2F%2Fi.ibb.co%2FzxXBtZK%2F1000020799.jpg&animationType=slide&autoPlay=true&radioButtonType=none&radioButtonSize=20&radioButtonGap=10&arrowsType=none&arrowsBackground=hidden&arrowsBackgroundVisibility=212&arrowsSize=46&arrowsOffset=1&arrowsColor=%23fff', sellerPhone: '123-456-7892' },
];

function renderProducts(productsList) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = ''; // წაშალოს არსებული პროდუქცია

    productsList.forEach(product => {
        const productCard = document.createElement('div');https://imageslidergenerator.shahmirfaisal.com/slider?image=https%3A%2F%2Fi.ibb.co%2FrGTR525%2F1000021257.jpg&image=https%3A%2F%2Fi.ibb.co%2FfkYLbS7%2F1000021258.jpg&image=https%3A%2F%2Fi.ibb.co%2FxL0mt7V%2F1000021259.jpg&image=https%3A%2F%2Fi.ibb.co%2FXzydCb0%2F1000021260.jpg&image=https%3A%2F%2Fi.ibb.co%2Ff0VDTXY%2F1000021261.jpg&animationType=slide&autoPlay=false&radioButtonType=square&radioButtonSize=47&radioButtonGap=10&arrowsType=arrow-ios&arrowsBackground=hidden&arrowsBackgroundVisibility=222&arrowsSize=32&arrowsOffset=2&arrowsColor=%23666666' },
    { id: 2, name: 'სარეცხი მანქანა', price: 399.99, description: 'სრულად ავტომატური სარეცხი მანქანა 
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <iframe src="${product.image}" frameborder="0" width="100%" height="200"></iframe>
            <h3>${product.name}</h3>
            <p class="product-price">${product.price.toFixed(2)} ლარი</p>
        `;
        productCard.onclick = () => openModal(product);
        grid.appendChild(productCard);
    });
}

function openModal(product) {
    document.getElementById('modalProductName').innerText = product.name;
    document.getElementById('modalProductPrice').innerText = `${product.price.toFixed(2)} ლარი`;
    document.getElementById('modalProductDescription').innerText = product.description;
    document.getElementById('modalSellerPhone').innerText = product.sellerPhone;
    document.getElementById('productModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

function autoSearchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (query.length === 0) {
        renderProducts(products);
        return;
    }

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    renderProducts(filteredProducts);
}

function filterProducts() {
    const category = document.getElementById('categories').value;
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    renderProducts(filteredProducts);
}

function sortProducts(order) {
    const sortedProducts = [...products].sort((a, b) => {
        return order === 'price-asc' ? a.price - b.price : b.price - a.price;
    });
    renderProducts(sortedProducts);
}

// თავდაპირველად ყველა პროდუქტის ნახვა
renderProducts(products);
