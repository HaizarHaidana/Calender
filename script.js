const monthYear = document.getElementById("monthYear");
const dates = document.getElementById("dates");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentDate = new Date();

function renderCalendar() {
  dates.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const monthNames = [
    "Januari","Februari","Maret","April","Mei","Juni",
    "Juli","Agustus","September","Oktober","November","Desember"
  ];

  monthYear.innerText = `${monthNames[month]} ${year}`;

  // kosong sebelum tanggal 1
  for (let i = 0; i < firstDay; i++) {
    dates.innerHTML += `<div></div>`;
  }

  // tanggal
  for (let i = 1; i <= lastDate; i++) {
    const today = new Date();
    let className = "";

    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      className = "today";
    }

    dates.innerHTML += `<div class="${className}">${i}</div>`;
  }
}

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
