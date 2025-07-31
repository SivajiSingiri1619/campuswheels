
   function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("show");
}

    document.getElementById("check").addEventListener("click", () => {
      const selectedDate = document.getElementById("date").value;
      const cards = document.querySelectorAll(".card");
      let found = false;

      cards.forEach(card => {
        if (card.dataset.date === selectedDate) {
          card.style.display = "flex";
          found = true;
        } else {
          card.style.display = "none";
        }
      });

      if (!found) alert("No records found for selected date.");
    });

    document.getElementById("reset").addEventListener("click", () => {
      document.getElementById("date").value = "";
      document.querySelectorAll(".card").forEach(card => {
        card.style.display = "flex";
      });
    });
  
