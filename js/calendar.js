let currentDate = new Date();

function createCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleDateString("sv-SE", {
    month: "long",
  });

  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "";

  const header = document.createElement("div");
  header.classList.add("calendar-header");

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "<";

  const nextBtn = document.createElement("button");
  nextBtn.textContent = ">";

  const monthText = document.createElement("h2");
  monthText.classList.add("month-title");
  monthText.textContent = `${monthName} ${year}`;

  prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    createCalendar();
  });

  nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    createCalendar();
  });

  header.appendChild(prevBtn);
  header.appendChild(monthText);
  header.appendChild(nextBtn);

  calendar.appendChild(header);

  const grid = document.createElement("div");
  grid.classList.add("calendar-grid");

  const dayNames = [
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
    "Söndag",
  ];

  dayNames.forEach((day) => {
    const div = document.createElement("div");
    div.classList.add("day-name");
    div.textContent = day;
    grid.appendChild(div);
  });

  const firstDay = new Date(year, month, 1);

  let startDay = firstDay.getDay();
  startDay = startDay === 0 ? 6 : startDay - 1;

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < startDay; i++) {
    const empty = document.createElement("div");
    empty.classList.add("empty");
    grid.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const div = document.createElement("div");
    div.classList.add("day");
    div.textContent = day;
    grid.appendChild(div);
  }

  calendar.appendChild(grid);
}
