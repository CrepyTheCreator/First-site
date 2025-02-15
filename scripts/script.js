//открытие меню
function menu() {
  document.getElementById("menuList").classList.toggle("open");
  document.getElementById("page").classList.toggle("fix");
}

//переключения между кнопками
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".choose-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      // Убираем класс у всех кнопок
      buttons.forEach(btn => btn.classList.remove("haeder-btn-active"));

      // Добавляем класс только к нажатой кнопке
      this.classList.add("haeder-btn-active");
    });
  });
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 8,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});