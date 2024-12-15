const products = [
    { id: 1, name: 'მობილური ტელეფონი', price: 299.99, description: 'კარგი ხარისხის კამერით მაღალი ხარისხის მობილური ტელეფონი.', category: 'electronics', image: 'telefoni.jpg', sellerPhone: '123-456-7890' },
    
    { id: 2, name: 'სარეცხი მანქანა', price: 399.99, description: 'სრულად ავტომატური სარეცხი მანქანა მოწინავე ფუნქციებით.', category: 'appliances', image: 'manqana.png', sellerPhone: '123-456-7891' },
    { id: 3, name: 'ელექტრული გიტარა', price: 499.99, description: 'პროფესიონალური ელექტრული გიტარა განსაკუთრებული ხმით.', category: 'musical-instruments', image: 'gitara.jpg', sellerPhone: '123-456-7892' },
    
];

function renderProducts(productsList) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = ''; // წაშალოს არსებული პროდუქცია

    productsList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
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
