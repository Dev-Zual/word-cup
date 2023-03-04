const sideBtn = document.querySelectorAll(".side-btn");

sideBtn.forEach((Btn) => {
  Btn.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    Btn.classList.add("active");
  });
});
