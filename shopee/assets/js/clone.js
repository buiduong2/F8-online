const items = document.querySelectorAll(".js-child");
const parent = document.querySelector(".js-parent");

for (let i = 0; i < 10; i++) {
  const clone = items[Math.floor(Math.random() * 2)];
  parent.appendChild(clone.cloneNode(true));
}