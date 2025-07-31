function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("show");
}

function filterData() {
  const selectedDate = document.getElementById("date").value;
  const cards = document.querySelectorAll(".card");

  if (!selectedDate) {
    cards.forEach(card => card.style.display = "flex");
    return;
  }

  const [year, month, day] = selectedDate.split("-");
  const formattedDate = `${day}-${month}-${year}`;

  cards.forEach(card => {
    const cardDate = card.getAttribute("data-date");
    card.style.display = cardDate === formattedDate ? "flex" : "none";
  });
}

function resetFilter() {
  document.getElementById("date").value = "";
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.style.display = "flex"; // Show all cards
  });
}

