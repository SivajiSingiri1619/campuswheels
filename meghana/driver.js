document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("driverForm");
  const driverList = document.getElementById("driverList");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const license = document.getElementById("license").value;
    const experience = document.getElementById("experience").value;
    const bus = document.getElementById("bus").value;

    const newCard = document.createElement("div");
    newCard.className = "driver-card";
    newCard.innerHTML = `
      <span><strong>Name:</strong> ${name}</span>
      <span><strong>Phone:</strong> ${phone}</span>
      <span><strong>License:</strong> ${license}</span>
      <span><strong>Experience:</strong> ${experience} years</span>
      <span><strong>Assigned Bus:</strong> ${bus}</span>
    `;

    driverList.appendChild(newCard);
    form.reset();
  });
});
