// history.js
const historyList = document.getElementById("historyList");
const attendance = JSON.parse(localStorage.getItem("attendanceHistory")) || [];

if(attendance.length === 0){
    historyList.innerHTML = "<p>No attendance records yet.</p>";
} else {
    attendance.forEach(rec => {
        const div = document.createElement("div");
        div.className = "record";
        div.textContent = `${rec.date} — Class: ${rec.classCode} — Status: ${rec.status}`;
        historyList.appendChild(div);
    });
}
