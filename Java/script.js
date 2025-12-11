const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
// document.addEventListener("DOMContentLoaded", () => {
//   const calendarBox = document.getElementById("calendar-box");

//   // Example: December 2025
//   const daysInMonth = 31;
//   for (let day = 1; day <= daysInMonth; day++) {
//     const cell = document.createElement("div");
//     cell.textContent = day;
//     calendarBox.appendChild(cell);
//   }
// });
