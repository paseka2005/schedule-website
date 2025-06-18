const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
function downloadSchedule() {
    const { jsPDF } = window.jspdf; // Получаем jsPDF
    const doc = new jsPDF();
    const subjectData = scheduleData.map(item => 
        `${item.subject} - ${item.date} (${item.time} в ${item.cabinet})`
    );

    // Добавляем заголовки
    doc.text("Расписание занятий", 20, 20);
    
    // Добавляем содержимое
    subjectData.forEach((subject, index) => {
        doc.text(subject, 20, 30 + (10 * index));
    });

    // Скачиваем PDF
    doc.save("schedule.pdf");
}
