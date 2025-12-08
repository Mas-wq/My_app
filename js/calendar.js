// calendar.js
const calendarView = document.getElementById("calendarView");
const renderCalBtn = document.getElementById("renderCal");
const viewSelect = document.getElementById("viewSelect");
const monthPicker = document.getElementById("monthPicker");

function renderCalendar() {
    const history = JSON.parse(localStorage.getItem("attendanceHistory")) || [];
    calendarView.innerHTML = "";

    if(history.length === 0){
        calendarView.innerHTML = "<p>No attendance records to display.</p>";
        return;
    }

    history.forEach(rec => {
        const div = document.createElement("div");
        div.className = "calendar-box";
        div.textContent = `${rec.date.split(",")[0]} — ${rec.classCode} — ${rec.status}`;
        calendarView.appendChild(div);
    });
}

renderCalBtn.addEventListener("click", renderCalendar);
