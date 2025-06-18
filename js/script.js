const scheduleData = [
    {
        date: "01.09.2023",
        time: "09:00-10:30",
        subject: "Математика",
        cabinet: "101",
        teacher: "Иванов И.И.",
        group: "group1"
    },
    {
        date: "01.09.2023",
        time: "11:00-12:30",
        subject: "Физика",
        cabinet: "102",
        teacher: "Петров П.П.",
        group: "group1"
    },
    {
        date: "02.09.2023",
        time: "09:00-10:30",
        subject: "История",
        cabinet: "103",
        teacher: "Сидоров С.С.",
        group: "group2"
    }
];

function fillScheduleTable(group) {
    const tbody = document.getElementById('scheduleTableBody');
    tbody.innerHTML = ''; // Очистка таблицы
    const filteredData = scheduleData.filter(item => item.group === group);

    filteredData.forEach(item => {
        const row = `<tr>
            <td>${item.date}</td>
            <td>${item.time}</td>
            <td>${item.subject}</td>
            <td>${item.cabinet}</td>
            <td>${item.teacher}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

document.getElementById('groupSelect').addEventListener('change', (event) => {
    fillScheduleTable(event.target.value);
});

function searchTeacher() {
    const teacher = document.getElementById('teacherInput').value.toLowerCase();
    const results = scheduleData.filter(item => item.teacher.toLowerCase().includes(teacher));
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

    if (results.length > 0) {
        results.forEach(item => {
            resultsDiv.innerHTML += `<p>${item.subject} - ${item.date} (${item.time} в ${item.cabinet})</p>`;
        });
    } else {
        resultsDiv.innerHTML = '<p>Преподаватель не найден.</p>';
    }
}

function downloadSchedule() {
    alert("Функция скачивания пока не реализована.");
}

// Инициализация с первой группы
fillScheduleTable('group1');
