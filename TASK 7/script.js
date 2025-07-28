// List of meals with real image URLs
const meals = [
  {
    id: 1,
    name: 'Jollof Rice & Chicken',
    price: 5200,
    img: 'jollof rice with chicken.jpeg'
  },
  {
    id: 2,
    name: 'Egusi Soup & Fufu',
    price: 5500,
    img: 'Egusi soup & fufu.jpeg'
  },
  {
    id: 3,
    name: 'Yam & Egg Sauce',
    price: 4500,
    img: 'yam with egg sauce.jpeg'
  },
  {
    id: 4,
    name: 'Suya & Sauce',
    price: 2800,
    img: 'Suya.jpeg'
    
    
  }
];

const cart = [];
const menuEl = document.getElementById('menu');
const cartItemsEl = document.getElementById('cart-items');
const totalEl = document.getElementById('total');
const printBtn = document.getElementById('print');
const submitBtn = document.getElementById('submit');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

function renderMenu() {
  meals.forEach(meal => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${meal.img}" alt="${meal.name}">
      <h3>${meal.name}</h3>
      <p>₦${meal.price}</p>
      <button>Add to Plate</button>`;
    card.querySelector('button').addEventListener('click', () => addToPlate(meal));
    menuEl.appendChild(card);
  });
}

function addToPlate(meal) {
  cart.push(meal);
  updateCart();
}

function updateCart() {
  cartItemsEl.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `<span>${item.name}</span><span>₦${item.price}</span>`;
    cartItemsEl.appendChild(div);
  });
  calculateTotal();
}

function calculateTotal() {
  const total = cart.reduce((sum, i) => sum + i.price, 0);
  totalEl.textContent = total;
}

submitBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Please select at least one item.');
    return;
  }
  modal.classList.add('show');
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
  cart.length = 0;
  updateCart();
});

printBtn.addEventListener('click', () => {
  const w = window.open('', '', 'width=400,height=600');
  w.document.write('<h2>Your Plate</h2><ul>');
  let total = 0;
  cart.forEach(i => {
    total += i.price;
    w.document.write(`<li>${i.name}: ₦${i.price}</li>`);
  });
  w.document.write(`</ul><p>Total: ₦${total}</p>`);
  w.document.close();
  w.focus();
  w.print();
  w.close();
});

renderMenu();
