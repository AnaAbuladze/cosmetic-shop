document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.querySelector(".product-card-container");
  const productAmount = document.querySelector(".product-amount");

  if (productContainer && productAmount) {
    function updateProductCount() {
      const visibleProducts = productContainer.querySelectorAll(".product-card");
      productAmount.textContent = `${visibleProducts.length} product${visibleProducts.length !== 1 ? "s" : ""}`;
    }
    updateProductCount();
  }
});
