// Sample product data
const products = [
  { id: 1, name: 'iPhone-16', category: 'Mobile', price: 100000, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROFGoXYqDvlz7lnjaGEz6H1v7vJtLekVHUVQ&s' },
  { id: 2, name: 'OnePlus', category: 'Mobile', price: 40000, imageUrl: 'https://image01-in.oneplus.net/ebp/202401/16/1-m00-52-8d-cpgm7mwmakmas22saau7p6by1li600.png?x-amz-process=image/format,webp/quality,Q_80' },
  { id: 3, name: 'Vivo', category: 'Mobile', price: 50000, imageUrl: 'https://exstatic-in.vivo.com/Oz84QB3Wo0uns8j1/in/1722925092382/0546e34fe8ac7d98f4a6ce6140d8a1bb.png_w860-h860.webp' },
  { id: 4, name: 'Motorola', category: 'Mobile', price: 35000, imageUrl: 'https://motorolain.vtexassets.com/arquivos/ids/159174-800-auto?width=800&height=auto&aspect=true' },
  { id: 5, name: 'Realme', category: 'Mobile', price: 37000, imageUrl: 'https://image01.realme.net/general/20230718/168965097130763a88d54f0d74e67983cc4cdd7d97ed5.png?width=1440&height=1440&size=477649' },
  { id: 6, name: 'Samsung', category: 'Mobile', price: 80000, imageUrl: 'https://images.samsung.com/is/image/samsung/assets/in/2407/pcd/smp/PCD_E3_Whats-new_192x192_mo.png?$192_192_PNG$' },
  { id: 7, name: 'Infinix', category: 'Mobile', price: 15000, imageUrl: 'https://assets.beebom.com/mobile/2024/01/Infinix-Hot-40-1.png' },
  { id: 8, name: 'Poco', category: 'Mobile', price: 25000, imageUrl: 'https://ae01.alicdn.com/kf/Sdf5bb0c4acd24d6e8cf0daec6548f1ddC.jpg_960x960.jpg' },
  { id: 9, name: 'Google pixel', category: 'Mobie', price: 70000, imageUrl: 'https://www.livemint.com/lm-img/img/2024/02/29/1600x900/pixel_8_pror_1696486642510_1709183009670.webp' },
  { id: 10, name: 'Huawei', category: 'Mobile', price: 260000, imageUrl: 'https://images.cnbctv18.com/uploads/2024/09/huawei-mate-xt-2024-09-9d7662d154d4a79e5bd78cf8db1b4d73.jpg?impolicy=website&width=1200&height=900' },
  { id: 11, name: 'Xiaomi', category: 'Mobile', price: 45000, imageUrl: 'https://i02.appmifile.com/308_operatorx_operatorx_opx/26/09/2023/4796e703846ff6b8afdca74fc2755a10.png?thumb=1&w=500&q=85' },
  { id: 12, name: 'Tecno Camon 30 5g', category: 'Mobile', price: 25000, imageUrl: 'https://d2xamzlzrdbdbn.cloudfront.net/products/2afdd5c7-1736-41ca-a7e7-2f6f3ebe727324181204_416x416.jpg' },
  { id: 13, name: 'HTC U23 Pro 5g', category: 'Mobile', price: 25000, imageUrl: 'https://i.gadgets360cdn.com/large/htc_u23_pro_small_1717737408209.jpg' },
  { id: 14, name: 'LG wing 5g', category: 'Mobile', price: 30000, imageUrl: 'https://i.gadgets360cdn.com/products/large/lg-wing-1-800x800-1600148741.jpg' },
  { id: 15, name: 'Honor 200 5g', category: 'Mobile', price: 25000, imageUrl: 'https://d2xamzlzrdbdbn.cloudfront.net/products/93f6ddae-47d0-40b0-930e-fb59c5b339d724021224_416x416.jpg' },
  { id: 16, name: 'Nokia', category: 'Mobile', price: 10000, imageUrl: 'https://m.media-amazon.com/images/I/71oIjjNm+nL.jpg' },
  { id: 17, name: 'Sony Xperia', category: 'Mobile', price: 25000, imageUrl: 'https://d1ncau8tqf99kp.cloudfront.net/converted/113694_original_local_256x224_v3_converted.webp' },
  { id: 18, name: 'Micromax', category: 'Mobile', price: 5000, imageUrl: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/micromax-mobile-phones?scl=1&fmt=png-alpha' },
  { id: 19, name: 'IQOO 11 5g', category: 'Mobile', price: 50000, imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTyWM-WpQDVSgIn0J-q7hxBn4TasNaHm0ea2LC48AzjIhsJN3BxK0pF2O1HXL7LolhgWSrnsJJCjH_bAk73QUZ1zOZU611IxlH9pPo-OUyXPprJrTbKj63p&usqp=CAE' },
  { id: 20, name: 'Realme Narzo N65 5g', category: 'Mobile', price: 350000, imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQ43eaxVCFv78OuO_ypA8soRwgGvaMiBv-Eqs9fi8PkkU8ofYGtYXxrSAkks4hs2rtWrVyUzOA0xbiIoHUq7o9D073MTV0QGA2isctaqMS8W3lCFVESKQy6g&usqp=CAE' },
  { id: 21, name: 'Xiaomi 14 T', category: 'Mobile', price: 30000, imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRhbmIWoU08vaYufHMBiVVsYe6nOzBngPwtjhB7WEa0037hN3AxmhpKYYxVIzLnqNStMZ7w0AYi7PIttN3mJjOxj5xw97KKaBzNbn_ImB34IdNVImKC-XKO&usqp=CAE' },
  { id: 22, name: 'iphone 15 pro', category: 'Mobile', price: 90000, imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmr5Ylbx85mUojGiRFghkHUk3V0TlBcvS7EvVJEXGjgwyui6K17ejQbKPN8l64a-LVXUZc6gNNp-oJwM_yKfBX1kytzSrg8xLbNeJwzRHvqTMHmWXt54D_xVw&usqp=CAE' },
  { id: 23, name: 'Poco X6 Neo', category: 'Mobile', price: 15000, imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcScx_eDXbXRDqmOxTQfFb-UmfPWbfV60GcYGbLge8-3x7fbAf9VG7BxRER5-Dr-nHIjFER26Z_-yHUL_XhW6mIBT2diknpI47sfJVMh5hh7&usqp=CAE' },
  { id: 24, name: 'Realme 11 pro 5g', category: 'Mobile', price: 17000, imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR46kvN9rokwy03ytL2LI6RLg7KPrnJg2tGt-aWRzW3yUwfYvBJcBTD5VDedqL_fRW-1-rqHZ6rO87A0U08tzfs1xHZDYc_shqTYawoFWBvSjL_B7p5qOv-gQ&usqp=CAE' },
  { id: 25, name: 'Vivo V40e 5g', category: 'Mobile', price: 40000, imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT0A7oRq-Tk0gjfPRH7h8CjqP7hxQNfsFrii0zlvPV6xtWAERTARw8Q8JvaIokAV36tX8Hg8HMBfjXeXoV8LlgGxswYJrcUDql24yALONf4UL_cNgU4HN9ExA&usqp=CAE' },
  { id: 26, name: 'Oppo N3', category: 'Mobile', price: 300000, imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGdnS8OH8p0qiLjvWXAexVGuOe6Lya5_-2atvAKwTBdhZOiivWgWVruTWaKEJCkiuVkxvGwhQnVFNXIhBHA6gIqQk61AtKO2roU96Qu5RvIhHYgJmr5Edt&usqp=CAE' },
  { id: 27, name: 'Vivo T3 pro', category: 'Mobile', price: 24000, imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT83YXK9kweffe2QUdKrbAUVSl6MI0IHdVr9QEMgl9jlBliYn5o_yRrsdPqi2jQUI1ZqaMsIgaC3LFYEhrGGJjw4xv5pDDvrEek8IOYeejtWG6PbPxL7ZYpBA&usqp=CAE' },
  { id: 28, name: 'Vertu 5g', category: 'Mobile', price: 230000, imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQm8I-uOPCn9cYe7ia4UE71vwrUyRs8KvmlIDIUdDPXmmB03pbmPuyV3r4VN4W2uqRa-iOrWfr_1pAJOe4so3v1afdqMvSAwOc_U2ZiSjldwabPD5XjLbF7&usqp=CAE' },
  { id: 29, name: 'iphone 13', category: 'Mobile', price: 65000, imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxEdgqBOlwEPxmWNiv1eEHJhxxJufS3Jmj1VeGs29SA-BAHrD2nsH4Vb8l77qGfZRc3dD3rpixddUrGXoqoqILOijEmQz0WxJibGbbO8v5grgt0KkztBvm&usqp=CAE' },
  { id: 30, name: 'IQOO 12 5g', category: 'Mobile', price: 55000, imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQpc9euER8ts_qgUzfBfe1Az3QsZDFK2wsEWiZ7v15e6WRkK5txhUGmg2K9btegzz21OuUWj6Lfqd-rXBe916lJPKKQcVguPK0YI1JQXdCQ7xMpz16Tps4A&usqp=CAE' }
];

const productList = document.getElementById('product-list');
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const searchInput = document.getElementById('search-input');

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );
  renderProducts(filteredProducts);
}

function renderProducts(productsToRender = products) {
  productList.innerHTML = '';

  if (productsToRender.length === 0) {
    const noProductsMessage = document.createElement('p');
    noProductsMessage.textContent = 'No products found.';
    productList.appendChild(noProductsMessage);
  } else {
    productsToRender.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      const image = document.createElement('img');
      image.src = product.imageUrl;
      image.alt = product.name;
      productCard.appendChild(image);
      const name = document.createElement('h3');
      name.textContent = product.name;
      productCard.appendChild(name);
      const category = document.createElement('p');
      category.textContent = `Category: ${product.category}`;
      productCard.appendChild(category);
      const price = document.createElement('p');
      price.textContent = `₹${product.price}`;
      productCard.appendChild(price);
      const quantityInput = document.createElement('input');
      quantityInput.type = 'number';
      quantityInput.min = '1';
      quantityInput.value = '1';
      productCard.appendChild(quantityInput);
      const addToCartButton = document.createElement('button');
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.addEventListener('click', () => {
        addToCart(product, quantityInput.value);
      });
      addToCartButton.addEventListener('mousedown', () => {
        addToCartButton.classList.add('pressed');
      });
      addToCartButton.addEventListener('mouseup', () => {
        addToCartButton.classList.remove('pressed');
      });
      productCard.appendChild(addToCartButton);
      productList.appendChild(productCard);
    });
  }
}

function addToCart(product, quantity) {
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += parseInt(quantity);
  } else {
    cart.push({ ...product, quantity: parseInt(quantity) });
  }
  updateCartDisplay();
  saveCartToLocalStorage();
}

function updateCartDisplay() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    const image = document.createElement('img');
    image.src = item.imageUrl;
    image.alt = item.name;
    cartItem.appendChild(image);
    const name = document.createElement('h3');
    name.textContent = item.name;
    cartItem.appendChild(name);
    const price = document.createElement('p');
    price.textContent = `₹${item.price} x ${item.quantity}`;
    cartItem.appendChild(price);
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeFromCart(item.id);
    });
    cartItem.appendChild(removeButton);
    cartItems.appendChild(cartItem);
    total += item.price * item.quantity;
  });
  const totalPrice = document.getElementById('total-price');
  totalPrice.textContent = total.toFixed(2);
}

function removeFromCart(itemId) {
  const itemIndex = cart.findIndex(item => item.id === itemId);
  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
    updateCartDisplay();
    saveCartToLocalStorage();
  }
}

function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

searchInput.addEventListener('input', filterProducts);
renderProducts();
updateCartDisplay();