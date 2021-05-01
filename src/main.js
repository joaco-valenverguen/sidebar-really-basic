const sidebar = document.querySelector("#sidebar");
const btnToggle = document.querySelector(".toggle-btn");

btnToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
