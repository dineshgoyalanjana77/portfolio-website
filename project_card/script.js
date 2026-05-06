// Open Website
function openSite(url) {
  window.open(url, "_blank");
}

// Search Function
let search = document.getElementById("search");

search.addEventListener("keyup", function () {
  let value = search.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {
    let name = card.getAttribute("data-name");

    if (name.includes(value)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});