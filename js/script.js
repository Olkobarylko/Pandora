function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

var swiper = new Swiper(".product-section__swiper-gallery", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".product-section__swiper-button-next",
    prevEl: ".product-section__swiper-button-prev",
  },
});

let count = 1;
let quizNumber = document.querySelector('.product-section__info-quiz-number');
if (quizNumber) {
  function quiz() {
    if (count === 3) {
      window.open("vnm45rtghost.com", "_self")
      return;
    }
    quizNumber.innerHTML = ++count;
  }
}