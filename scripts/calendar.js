const daysContainer = document.querySelector("#days");

const events = {
    "2026-09-22": "Societies Fair (Come Meet us!)",
    "2026-09-24": "Ghost Walk feat. Strange Britain",
    "2026-10-02": "Film Friday: The Lost Boys",
    "2026-10-09": "Film Friday: Fright Night",
    "2026-10-16": "Film Friday: From Dusk Till Dawn",
    "2026-10-23": "Film Friday: Dark Shadows",
    "2026-10-30": "Film Friday: Dracula A.D. 1972",
    "2026-11-06": "Film Friday: Terrifier",
    "2026-11-13": "Film Friday: Friday the 13th",
    "2026-11-20": "Film Friday: A Nightmare on Elm Street",
    "2026-11-27": "Film Friday: Freddy vs. Jason",
    "2026-12-04": "Film Friday: Event Horizon",
    "2026-12-11": "Film Friday: Invasion of the Body Snatchers",
    "2026-12-18": "Film Friday: Gremlins"
};

let currentDate = new Date();

function updateCalendar() {
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

    let startingDay = firstDay.getDay();


    startingDay = startingDay === 0 ? 6 : startingDay - 1;


    // Add boxes for out of month days
    for (let i = 0; i < startingDay; i++) {
        const emptyDay = document.createElement("div");

        emptyDay.classList.add("day", "empty");

        daysContainer.appendChild(emptyDay);
    }

    // Add boxes for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");

        dayElement.classList.add("day");
        
        const date = new Date(year, month, day);
        const dateKey =
        `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

        const event = events[dateKey];

        if (event) {
            dayElement.classList.add("event");
            dayElement.textContent = `${day}: ${event}`;
        } else {
            dayElement.textContent = day;
        }

        daysContainer.appendChild(dayElement);
    }
}

function generateButtons() {
    const prevButton = document.getElementById("prev-month");
    const nextButton = document.getElementById("next-month");

    // You cant look before september
    if (currentDate.getMonth() === 8) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    // December, in line with Sem 1
    if (currentDate.getMonth() === 11) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
    generateButtons();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
    generateButtons();
}

if (currentDate.getMonth() === 7) {
    currentDate.setMonth(currentDate.getMonth() + 1);
}

updateCalendar();
generateButtons();

