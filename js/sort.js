document.addEventListener("DOMContentLoaded", () => {
  const sortButton = document.getElementById("sortButton");
  const sortMenu = document.getElementById("sortMenu");
  const productContainer = document.querySelector(".product-card-container");
  const productCards = Array.from(document.querySelectorAll(".product-card"));

  if (!sortButton || !sortMenu || !productContainer) return;

  sortButton.addEventListener("click", () => {
    sortMenu.classList.toggle("hidden");
    const icon = sortButton.querySelector("i");
    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa-chevron-up");
  });

  document.addEventListener("click", (e) => {
    if (!sortButton.contains(e.target) && !sortMenu.contains(e.target)) {
      sortMenu.classList.add("hidden");
      const icon = sortButton.querySelector("i");
      icon.classList.add("fa-chevron-down");
      icon.classList.remove("fa-chevron-up");
    }
  });
  sortMenu.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const sortType = btn.getAttribute("data-sort");
      let sortedCards = [...productCards];

      switch (sortType) {
        case "low-high":
          sortedCards.sort((a, b) => parseFloat(a.querySelector(".price").textContent.replace("$", "")) -
                                     parseFloat(b.querySelector(".price").textContent.replace("$", "")));
          break;
        case "high-low":
          sortedCards.sort((a, b) => parseFloat(b.querySelector(".price").textContent.replace("$", "")) -
                                     parseFloat(a.querySelector(".price").textContent.replace("$", "")));
          break;
        case "a-z":
          sortedCards.sort((a, b) => a.querySelector(".name").textContent.trim().localeCompare(
                                    b.querySelector(".name").textContent.trim()));
          break;
        case "z-a":
          sortedCards.sort((a, b) => b.querySelector(".name").textContent.trim().localeCompare(
                                    a.querySelector(".name").textContent.trim()));
          break;
        case "recommended":
          sortedCards.sort((a, b) => {
            const starsA = a.querySelectorAll(".fa-star-fully").length;
            const starsB = b.querySelectorAll(".fa-star-fully").length;
            const ratingA = parseFloat(a.querySelector(".rating-number")?.textContent || 0);
            const ratingB = parseFloat(b.querySelector(".rating-number")?.textContent || 0);
            return (starsB + ratingB / 5) - (starsA + ratingA / 5);
          });
          break;
      }

      productContainer.innerHTML = "";
      sortedCards.forEach((card) => productContainer.appendChild(card));
    });
  });
});
