document.addEventListener("DOMContentLoaded", () => {
  const checkBtn = document.getElementById("check");
  const dateInput = document.getElementById("date");
  const cards = document.querySelectorAll(".card");

  checkBtn.addEventListener("click", () => {
    const selectedDate = dateInput.value;

    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }

    let anyMatch = false;

    cards.forEach(card => {
      const dateSpan = Array.from(card.querySelectorAll("span")).find(span =>
        span.textContent.includes("Date:")
      );

      const cardDate = dateSpan ? dateSpan.textContent.split("Date:")[1].trim() : "";

      if (cardDate === selectedDate) {
        card.style.display = "flex";
        anyMatch = true;
      } else {
        card.style.display = "none";
      }
    });

    if (!anyMatch) {
      alert("No garage visits found for the selected date.");
    }
  });
});
