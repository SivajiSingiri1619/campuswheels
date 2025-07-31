document.addEventListener("DOMContentLoaded", () => {
  const statusFilter = document.getElementById("status-filter");
  const fromDate = document.getElementById("from-date");
  const toDate = document.getElementById("to-date");
  const applyBtn = document.getElementById("apply-filters");
  const resetBtn = document.getElementById("reset-filters");

  const leaveCards = document.querySelectorAll(".leave-container > div");

  window.aprv = function () {
    const card = this.event.target.closest("div");
    const statusSpan = card.querySelector(".status");
    statusSpan.textContent = "Status: Approved";
    statusSpan.style.color = "green";
  };

  window.rej = function () {
    const card = this.event.target.closest("div");
    const statusSpan = card.querySelector(".status");
    statusSpan.textContent = "Status: Rejected";
    statusSpan.style.color = "red";
  };

  applyBtn.addEventListener("click", () => {
    const selectedStatus = statusFilter.value;
    const from = fromDate.value;
    const to = toDate.value;

    leaveCards.forEach((card) => {
      const statusText = card.querySelector(".status").textContent.trim();
      const leaveDateText = card.querySelector(".leave-date").textContent;
      const leaveDate = leaveDateText.split(":")[1].trim();

      let show = true;

      if (selectedStatus !== "All" && !statusText.includes(selectedStatus)) {
        show = false;
      }

      if (from && leaveDate < from) {
        show = false;
      }

      if (to && leaveDate > to) {
        show = false;
      }

      card.style.display = show ? "block" : "none";
    });
  });

  resetBtn.addEventListener("click", () => {
    statusFilter.value = "All";
    fromDate.value = "";
    toDate.value = "";

    leaveCards.forEach((card) => {
      card.style.display = "block";
    });
  });
});

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  }

