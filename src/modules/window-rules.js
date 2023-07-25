export function showRules() {
  const getRules = document.querySelector(".rules");
  function show(event) {
    document.querySelector(".overlay").classList.toggle("overlay_active");
  }

  getRules.addEventListener("click", show);
}

export function closeRules() {
  const getElement = document.querySelector(".overlay");
  const btnCloseRules = document.querySelector(".close");

  btnCloseRules.addEventListener("click", (event) => {
    getElement.classList.toggle("overlay_active");
  });
  getElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("overlay_active")) {
      getElement.classList.toggle("overlay_active");
    }
  });
}
