
let cart = [];

function addToCart(name, price) {
  cart.push({ name: name, price: price });
  updatePage();
}

function removeFromCart(index) {
  cart.splice(index, 1); 
  updatePage();         
}


function updatePage() {
  
  let total = 0;
  for (let item of cart) {
    total = total + item.price;
  }


  document.getElementById("cart-count").textContent = cart.length;
  document.getElementById("cart-total").textContent = total;


  document.getElementById("side-total").textContent = total;


  let list = document.getElementById("cart-list");
  list.innerHTML = "";

  if (cart.length === 0) {
    list.innerHTML = "<li class='empty'>Your cart is empty</li>";
  }

  for (let i = 0; i < cart.length; i++) {
    list.innerHTML +=
      "<li>" + cart[i].name + " - ₹" + cart[i].price +
      " <button onclick='removeFromCart(" + i + ")'>✕</button></li>";
  }
}


updatePage();
