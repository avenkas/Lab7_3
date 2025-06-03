// Чекаємо, поки вся сторінка завантажиться, перш ніж виконувати код
document.addEventListener("DOMContentLoaded", function () {
    // Отримуємо всі абзаци (<p>) всередині контейнера з id "content"
    let paragraphs = document.querySelectorAll("#content p");

    // Проходимо по кожному абзацу
    paragraphs.forEach(paragraph => {
        // Перевіряємо, чи містить абзац слово "Акція"
        if (paragraph.textContent.includes("Акція")) {
            // Створюємо новий елемент <img> для зображення
            let image = document.createElement("img");
            image.src = "promo.jpg"; // Встановлюємо шлях до зображення
            image.alt = "Акція"; // Альтернативний текст для зображення
            image.className = "promo-image"; // Додаємо клас для стилізації

            // Вставляємо зображення після абзацу, який містить слово "Акція"
            paragraph.insertAdjacentElement("afterend", image);
        }
    });
});
