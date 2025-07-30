
  document.getElementById("check").addEventListener("click", function () {
    const selectedDate = document.getElementById("date").value;
    const cards = document.querySelectorAll(".card");
    let found = false;

    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }

    cards.forEach(function (card) {
      const spans = card.querySelectorAll("span");
      let dateText = "";

      spans.forEach(function (span) {
        if (span.innerText.startsWith("Date:") || span.innerText.includes("Date:")) {
          dateText = span.innerText.split("Date:")[1].trim();
        }
      });

      if (dateText === selectedDate) {
        card.style.display = "flex";
        found = true;
      } else {
        card.style.display = "none";
      }
    });

    if (!found) {
      alert("No records found for the selected date.");
    }
  });
