
const header = document.querySelector("h1");
header.addEventListener("click", () => {
    alert("Вы кликнули на заголовок - так держать!");
});

const button = document.getElementById("button");
button.textContent = "Посмотреть практики второго семестра";

button.addEventListener("click", () => {
    const table = document.getElementById("changed-table");
    const secondSemesterTopics = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации",
        "Основы ReactJS",
        "Работа с компонентами динамической DOM",
        "Использование хуков в React",
        "Основы микросервисной архитектуры",
        "Разработка классических модулей веб-приложений",
        "Разработка классических модулей веб-приложений",
        "Разработка классических модулей веб-приложений",
    ];

    const rows = table.querySelectorAll("tr");
    rows.forEach((row, index) => {
        if (index === 0) return;
        const cells = row.querySelectorAll("td");
        if (cells[1]) {
            cells[1].textContent = secondSemesterTopics[index - 1] || "";
        }
    });
});

const studentPhoto = document.querySelector("#student-photo");
studentPhoto.addEventListener("mouseover", () => {
    studentPhoto.style.width = "40%";
    studentPhoto.style.height = "15%";
});
studentPhoto.addEventListener("mouseout", () => {
    studentPhoto.style.width = "";
    studentPhoto.style.height = "";
});
studentPhoto.addEventListener("click", () => {
    studentPhoto.src = "https://oreluniver.ru/file/employee/3753/IMG_0123.png"; 
});

studentPhoto.addEventListener("dblclick", () => {
    alert("Не налегай, у меня не так много любимых преподавателей");
});
