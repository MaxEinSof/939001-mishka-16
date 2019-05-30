var mainNav = document.querySelector(".main-navigation");
var burgerToggle = document.querySelector(".main-navigation__toggle");
var bestsellerButton = document.querySelector(".bestseller__button");
var catalogButton = document.querySelectorAll(".catalog-item__button");

mainNav.classList.remove("main-navigation--no-js");

burgerToggle.addEventListener("click", function (evt) {
  if (mainNav.classList.contains("main-navigation--closed")) {
    mainNav.classList.remove("main-navigation--closed");
    mainNav.classList.add("main-navigation--opened");
  } else {
    mainNav.classList.remove("main-navigation--opened");
    mainNav.classList.add("main-navigation--closed");
  }
});

if (bestsellerButton) {
  var indexModal = document.querySelector(".js-index-modal");
  var indexOverlay = document.querySelector(".js-index-overlay");

  bestsellerButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    indexModal.classList.add("modal--show");
    indexOverlay.classList.add("modal-overlay--show");
  });

  indexOverlay.addEventListener("click", function (evt) {
    indexModal.classList.remove("modal--show");
    indexOverlay.classList.remove("modal-overlay--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (indexModal.classList.contains("modal--show")) {
        indexModal.classList.remove("modal--show");
        indexOverlay.classList.remove("modal-overlay--show");
      }
    }
  });
}

if (catalogButton) {
  var catalogModal = document.querySelector(".js-catalog-modal");
  var catalogOverlay = document.querySelector(".js-catalog-overlay");

  for (var i = 0; i < catalogButton.length; i++) {
    catalogButton[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      catalogModal.classList.add("modal--show");
      catalogOverlay.classList.add("modal-overlay--show");
    })
  }

  catalogOverlay.addEventListener("click", function (evt) {
    catalogModal.classList.remove("modal--show");
    catalogOverlay.classList.remove("modal-overlay--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (catalogModal.classList.contains("modal--show")) {
        catalogModal.classList.remove("modal--show");
        catalogOverlay.classList.remove("modal-overlay--show");
      }
    }
  });
}
