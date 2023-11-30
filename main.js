let modal = document.querySelector(".modal");
let shadow = document.querySelector(".shadow");
let none = document.querySelector("none");

function openModal() {
  modal.classList.remove("none");
  shadow.classList.remove("none");
}

function closeModal() {
  modal.classList.add("none");
  shadow.classList.add("none");
}

document.addEventListener("keydown", (e) => {
  modal.classList.add("none");
  shadow.classList.add("none");
});

shadow.addEventListener("click", closeModal);
