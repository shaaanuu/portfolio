// Drawer for smaller screens
const a = document.getElementById("menu-btn");
a.addEventListener("click", () => {
  console.log("Need to implement the menu for small screens....");
});

// Generate the random glyphs in hero
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijk".split("").forEach((letter) => {
  const div = document.createElement("div");
  div.className = "letter";
  div.textContent = letter;
  div.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
  div.style.top = `${Math.random() * 100}%`;
  document.querySelector(".hero").appendChild(div);
});
