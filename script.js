function addToCart() {
    let qty = document.getElementById("qty").value;
    document.getElementById("cart-msg").innerText =
        `✔ ${qty} item(s) added to cart successfully!`;
}
