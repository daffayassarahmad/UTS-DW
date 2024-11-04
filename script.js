// Feather icons replacement
feather.replace();

// Toggle menu functionality
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Tampilkan Menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Tutup Menu
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

let cart = [];

function addToCart(itemName, itemPrice) {
  let item = {
    name: itemName,
    price: itemPrice,
    quantity: 1,
  };

  cart.push(item);
  alert(itemName + ' berhasil ditambahkan ke keranjang!');

  // Opsi: Menyimpan keranjang ke localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}
