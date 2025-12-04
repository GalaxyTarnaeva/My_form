document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("studentForm");
    const result = document.getElementById("result");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const lastName = form.lastName.value.trim();
        const firstName = form.firstName.value.trim();
        const middleName = form.middleName.value.trim();
        const group = form.group.value;

        if (!lastName || !firstName || !middleName || !group) {
            result.textContent = "Пожалуйста, заполните все поля формы.";
            result.style.color = "#b91c1c"; // красный
            return;
        }

        result.style.color = "#065f46"; // зелёный
        result.textContent = `Студент: ${lastName} ${firstName} ${middleName}, группа: ${group}. Данные успешно отправлены.`;

        // Если нужно очищать форму после "отправки" — раскомментируй:
        // form.reset();
    });
});
