//открытие меню
function menu() {
  document.getElementById("menuList").classList.toggle("open-flex");
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

var swiper = new Swiper('.swiper-container2', {
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

document.querySelectorAll('.services-btn-list').forEach(button => {
  button.addEventListener('click', () => {
      const list = button.nextElementSibling; // Получаем соответствующий список

      if (!list || !list.classList.contains('services-card-list')) return;

      // Если список уже активен, убираем класс
      if (list.classList.contains('services-card-list-active')) {
          list.classList.remove('services-card-list-active');
      } else {
          // Убираем класс у всех списков
          document.querySelectorAll('.services-card-list').forEach(l => l.classList.remove('services-card-list-active'));
          // Добавляем класс только соответствующему списку
          list.classList.add('services-card-list-active');
          button.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  });
});

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
  
  // Здесь можно добавить отправку данных на сервер через fetch/AJAX
  console.log({ phone, name });
  
  let popup = document.getElementById('popupDialog');
  popup.style.display = 'flex';
  popup.showModal();
  
  document.getElementById('contactForm').reset();
});

function closePopup() {
  let popup = document.getElementById('popupDialog');
  popup.close();
  popup.style.display = 'none';
}


document.getElementById('popupDialog').addEventListener('click', function(event) {
  if (event.target === this) {
      closePopup();
  }
  let popup = document.getElementById('popupDialog');
  popup.style.display = 'none';
});

function openPopupProfile() {
  document.getElementById('popupProfile').style.display = 'flex';
}

function closePopupProfile(event) {
  let popup = document.querySelector('.popup');
  if (!event || event.target === document.getElementById('popupProfile')) {
      document.getElementById('popupProfile').style.display = 'none';
  }
}