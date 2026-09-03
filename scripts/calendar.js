const daysContainer = document.querySelector("#days");

const events = {
    "2026-09-22": {
        name: "Activities Fair",
        timeLocation: "11:00 - 16:00, Students' Union",
        description: "Come meet us at the Activities Fair and find out more about Horror Society! We'll have a stall set up in the students' union, there'll be signs in the SU to help you find us.",
        ticketed: false,
        ticketLink: ""
    },

    "2026-09-24": {
        name: "Ghost Walk feat. Strange Britain",
        timeLocation: "17:30 - Meet at SU, 18:00-19:30 - Ghost Walk",
        description: "Horror Society invites you on a ghost walk through Sheffield City Centre, packed with spooky stories, ghostly tales and dark history!",
        ticketed: true,
        ticketLink: ""
    },

    "2026-10-02": {
        name: "Film: The Lost Boys (1987)",
        description: "Join us for a screening of The Lost Boys (1987). ",
        triggerwarnings: ["Violence", "Gore"]
    },

    "2026-10-09": {
        name: "Film: Fright Night (1985)",
        description: "Join us for a screening of Fright Night (1985). ",
        triggerwarnings: ["Contains violence and mature themes."]
    },

    "2026-10-16": {
        name: "Film: From Dusk Till Dawn (1996)",
        description: "",
        triggerwarnings: ["Contains violence and mature themes."]
    },

    "2026-10-23": {
        name: "Film: Dark Shadows (2012)",
        description: "",
        triggerwarnings: ["Contains violence and mature themes."]
    },

    "2026-10-30": {
        name: "Film: Dracula A.D. 1972 (1972)",
        description: "",
        triggerwarnings: ["Contains violence and mature themes."]
    },

    "2026-11-06": {
        name: "Film: Terrifier (2016)",
        description: "On Halloween night, two friends encounter the terrifying Art the Clown, who stalks them during his murderous rampage.",
        triggerwarnings: ["Contains violence and mature themes."]
    },

    "2026-11-13": {
        name: "Film: Friday the 13th (1980)",
        description: "",
        triggerwarnings: ["Contains violence and mature themes."]
    },

    "2026-11-20": {
        name: "Film: A Nightmare on Elm Street (1984)",
        description: "",
        triggerwarnings: ["Contains violence and mature themes."]
    },

    "2026-11-27": {
        name: "Film: Freddy vs. Jason (2003)",
        description: "",
        triggerwarnings: ["Contains violence and mature themes."]
    },

    "2026-12-04": {
        name: "Film: Event Horizon (1997)",
        description: "",
        triggerwarnings: ["Contains violence and mature themes."]
    },

    "2026-12-11": {
        name: "Film: Invasion of the Body Snatchers (1978)",
        description: "",
        triggerwarnings: ["Contains violence and mature themes."]
    },

    "2026-12-18": {
        name: "Film: Gremlins (1984)",
        description: "",
        triggerwarnings: ["Contains violence and mature themes."]
    }
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
        const filmSymbol = document.createElement("IMG");
        filmSymbol.classList.add("event-icon");
        filmSymbol.setAttribute("src", "styles/clapperboard-white.png");

        const starSymbol = document.createElement("IMG");
        starSymbol.classList.add("event-icon");
        starSymbol.setAttribute("src", "styles/star.png");

        dayElement.classList.add("day");
        
        const date = new Date(year, month, day);
        const dateKey =
        `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

        const event = events[dateKey];

        if (event) {
            dayElement.classList.add("event");

            if (event.name.includes("Film")) {
                dayElement.textContent = `${day}`;

                var dropdownBox = document.createElement("div");
                dropdownBox.classList.add("dropdown-box");
                dayElement.appendChild(dropdownBox);

                dropdownBox.appendChild(filmSymbol);

                var eventInfo = document.createElement("div");
                eventInfo.classList.add("event-info");

                var eventTitle = document.createElement("h3");
                eventTitle.textContent = event.name.substring(6, event.name.length);
                eventInfo.appendChild(eventTitle);

                var socialText = document.createElement("p");
                socialText.textContent = "Pre-film social:";
                socialText.classList.add("event-details");
                eventInfo.appendChild(socialText);

                var socialInfo = document.createElement("p");
                socialInfo.textContent = "18:00 - Bar One, Students' Union";
                socialInfo.classList.add("event-details");
                socialInfo.classList.add("social-info");
                eventInfo.appendChild(socialInfo);

                var filmText = document.createElement("p");
                filmText.textContent = "Film Screening:";
                filmText.classList.add("event-details");
                filmText.classList.add("film-text");
                eventInfo.appendChild(filmText);

                var filmInfo = document.createElement("p");
                filmInfo.textContent = "19:00 - Paul White Room, 1st Floor, Students' Union";
                filmInfo.classList.add("event-details");
                eventInfo.appendChild(filmInfo);

                /*var eventDescription = document.createElement("p");
                eventDescription.textContent = event.description;
                eventDescription.classList.add("event-description");
                eventInfo.appendChild(eventDescription);*/

                dropdownBox.appendChild(eventInfo);
            }
            else {
                dayElement.textContent = `${day}`;

                var dropdownBox = document.createElement("div");
                dropdownBox.classList.add("dropdown-box");
                dayElement.appendChild(dropdownBox);

                dropdownBox.appendChild(starSymbol);

                var eventInfo = document.createElement("div");
                eventInfo.classList.add("event-info");

                var eventTitle = document.createElement("h3");
                eventTitle.textContent = event.name;
                eventInfo.appendChild(eventTitle);

                var eventTimeLocation = document.createElement("p");
                eventTimeLocation.textContent = event.timeLocation;
                eventTimeLocation.classList.add("event-details");
                eventInfo.appendChild(eventTimeLocation);

                var eventDescription = document.createElement("p");
                eventDescription.textContent = event.description;
                eventDescription.classList.add("event-description");
                eventInfo.appendChild(eventDescription);

                if (event.ticketed) {
                    var ticketLink = document.createElement("a");
                    ticketLink.href = event.ticketLink;
                    ticketLink.textContent = "GET TICKETS";
                    ticketLink.classList.add("ticket-link");
                    eventInfo.appendChild(ticketLink);
                }

                dropdownBox.appendChild(eventInfo);

            }
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

