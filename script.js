const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const btn1 = document.getElementById("openModal1");
const btn2 = document.getElementById("openModal2");
const service = document.getElementById("selectedService");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const phoneInput = document.getElementById('phone');
const countrySelect = document.getElementById('country');

// Открываем модальное окно при нажатии на кнопку
btn.onclick = function() {
    modal.style.display = 'block';
    service.innerText = "Сайт-визитка";
}
btn1.onclick = function() {
    modal.style.display = 'block';
    service.innerText = "Корпоративный сайт";
}

btn2.onclick = function() {
    modal.style.display = 'block';
    service.innerText = "Интернет-магазин";
}

// Закрываем модальное окно при нажатии на "X"
span.onclick = function() {
    modal.style.display = 'none';
}

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function setPhoneMask() {
    const country = countrySelect.value;

    if (country === 'ru') {
        phoneInput.placeholder = '+7 (___) ___-__-__';
        phoneInput.pattern = '\\+7\\s?\\(\\d{3}\\)\\s?\\d{3}-\\d{2}-\\d{2}';
    } else if (country === 'kz') {
        phoneInput.placeholder = '+7 (___) ___-__-__';
        phoneInput.pattern = '\\+7\\s?\\(\\d{3}\\)\\s?\\d{3}-\\d{2}-\\d{2}';
    } else {
        phoneInput.placeholder = '';
        phoneInput.pattern = '';
    }
}

function restrictInputToNumbers(event) {
    const allowedChars = /[\d\+\(\)\-\s]/;
    if (!allowedChars.test(event.key)) {
        event.preventDefault();
    }
}

phoneInput.addEventListener('keypress', restrictInputToNumbers);
countrySelect.addEventListener('change', setPhoneMask);