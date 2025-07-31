
  function fun() {
    const selectedDate = document.getElementById("date").value; 
    const cards = document.querySelectorAll(".card");

    if (!selectedDate) {
  
      cards.forEach(card => card.style.display = "flex");
      return;
    }

   
    const parts = selectedDate.split("-");
    const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`; 

    cards.forEach(card => {
      const spans = card.getElementsByTagName("span");
      let dateText = "";
      for (let span of spans) {
        if (span.textContent.includes("Date:")) {
          dateText = span.textContent.split(":")[1].trim();
          break;
        }
      }

      if (dateText === formattedDate) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }
