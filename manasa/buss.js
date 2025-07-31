
    function toggleSidebar() {
      document.getElementById("sidebar").classList.toggle("open");
    }

    document.addEventListener("DOMContentLoaded", () => {
      const checkBtn = document.getElementById("check");
      const busInput = document.getElementById("bus-number");
      const dateInput = document.getElementById("date");

      const availableBuses = ["101", "202", "305", "407", "505", "118", "519", "522", "503", "473", "477", "430"];
      const unavailableBuses = ["110", "215", "320", "425", "530", "125", "504"];

      checkBtn.addEventListener("click", () => {
        const busNum = busInput.value.trim();
        const dateVal = dateInput.value;

        if (!busNum || !dateVal) {
          alert("Please enter both Bus Number and Date.");
          return;
        }

        const result = document.createElement("p");
        result.style.marginTop = "15px";
        result.style.fontSize = "1.1em";
        result.style.fontWeight = "bold";

        if (availableBuses.includes(busNum)) {
          result.textContent = `Bus ${busNum} is Available on ${dateVal}`;
          result.style.color = "green";
        } else if (unavailableBuses.includes(busNum)) {
          result.textContent = `Bus ${busNum} is Unavailable on ${dateVal}`;
          result.style.color = "red";
        } else {
          result.textContent = `Bus ${busNum} is Not Found in Records.`;
          result.style.color = "#dc3545";
        }

        const existing = document.querySelector(".check-availability p");
        if (existing) existing.remove();
        document.querySelector(".check-availability").appendChild(result);
      });
    });
