//открытие меню
function menu() {
  document.getElementById("menuList").classList.toggle("open-flex");
  document.getElementById("menuList").classList.toggle("open");
  document.getElementById("page").classList.toggle("fix");
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".header-choose-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      buttons.forEach(btn => btn.classList.remove("haeder-btn-active"));
      this.classList.add("haeder-btn-active");
    });
  });
});

//Переключение кнопок footer
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".footer-choose-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      buttons.forEach(btn => btn.classList.remove("haeder-btn-active"));

      this.classList.add("haeder-btn-active");
    });
  });
});

//Для карусели карточек
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

//Переключение кнопок services
document.querySelectorAll('.services-btn-list').forEach(button => {
  button.addEventListener('click', () => {
      const list = button.nextElementSibling;

      if (!list || !list.classList.contains('services-card-list')) return;

      if (list.classList.contains('services-card-list-active')) {
          list.classList.remove('services-card-list-active');
      } else {
          document.querySelectorAll('.services-card-list').forEach(l => l.classList.remove('services-card-list-active'));
          list.classList.add('services-card-list-active');
          button.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  });
});

//Отправка формы
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let phone = document.getElementById('phone').value;
  let name = document.getElementById('name').value;
  let isChecked = document.getElementById('sub').checked;
  
  let phoneError = document.getElementById('phoneError');
  let nameError = document.getElementById('nameError');
  
  phoneError.style.display = phone ? 'none' : 'block';
  nameError.style.display = name ? 'none' : 'block';
  
  if (!phone || !name || !isChecked) {
    return;
  }

  console.log({ phone, name });
  
  let popup = document.getElementById('popupDialog');
  popup.style.display = 'flex';
  popup.showModal();
  
  document.getElementById('contactForm').reset();
});

//Оповещение отправки формы
function closePopup() {
  let popup = document.getElementById('popupDialog');
  popup.close();
  popup.style.display = 'none';
}

//Закрытие окна оповещение кликом по пустой области
document.getElementById('popupDialog').addEventListener('click', function(event) {
  if (event.target === this) {
      closePopup();
  }
  let popup = document.getElementById('popupDialog');
  popup.style.display = 'none';
});

//Переключение кнопок help
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".help-choose .choose-btn");
  const section = document.querySelector(".help-card-section");

  buttons.forEach(button => {
      button.addEventListener("click", function () {
          buttons.forEach(btn => btn.classList.remove("haeder-btn-active"));
          this.classList.add("haeder-btn-active");

          if (this.textContent.trim() === "По месту востребования") {
              section.classList.add("vostreb");
          } else {
              section.classList.remove("vostreb");
          }
      });
  });
});

//Переключение видимости карточек
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".serv-btn");
  const lists = [
      document.getElementById("first-serv"),
      document.getElementById("second-serv"),
      document.getElementById("third-serv")
  ];

  buttons.forEach((button, index) => {
      button.addEventListener("click", function () {
          buttons.forEach(btn => btn.classList.remove("haeder-btn-active"));
          this.classList.add("haeder-btn-active");

          lists.forEach(list => list.classList.remove("services-card-display"));
          if (lists[index]) {
              lists[index].classList.add("services-card-display");
          }
      });
  });
});
