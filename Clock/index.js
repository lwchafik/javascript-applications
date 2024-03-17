function updateClock() {
    const now = new Date();

    // Time
    let hours = now.getHours();
    const meridiem = hours >= 12 ? 'PM' : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;

    // Date
    const day = now.getDate().toString().padStart(2, 0);
    let month = now.getMonth() + 1;
    month = month.toString().padStart(2, 0);
    const year = now.getFullYear();

    const dateString = `${day}/${month}/${year}`;
    document.getElementById("date").textContent = dateString;
}

updateClock();
setInterval(updateClock, 1000);