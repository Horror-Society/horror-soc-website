const daysContainer = document.querySelector("#days");

let currentDate = new Date();

function updateCalendar() {
    // Reset Calendar
    daysContainer.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const monthName = currentDate.toLocaleString("en-GB", {
        month: "long"
    });

    document.getElementById("month-title").innerText = monthName.toUpperCase() + " " + year;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const daysInMonth = lastDay.getDate();

    console.log(`First day: ${firstDay}`);
    console.log(`Last day: ${lastDay}`);
    console.log(`Days in month: ${daysInMonth}`);

    let startingDay = firstDay.getDay();

    console.log(`Starting day: ${startingDay}`);

    startingDay = startingDay === 0 ? 6 : startingDay - 1;

    console.log(`Starting day (Monday = 0): ${startingDay}`);

    for (let i = 0; i < startingDay; i++) {
        const emptyDay = document.createElement("div");

        emptyDay.classList.add("day", "empty");

        daysContainer.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");

        dayElement.classList.add("day");

        dayElement.textContent = day;

        daysContainer.appendChild(dayElement);
    }
}

currentDate.setMonth(currentDate.getMonth() + 1);
updateCalendar();

