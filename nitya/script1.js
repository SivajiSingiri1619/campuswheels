let isEditing = false;

function toggleEdit() {
  const fields = document.querySelectorAll(".profile-right .info");
  const button = document.getElementById("editBtn");

  if (!isEditing) {
    fields.forEach(field => {
      const label = field.querySelector("label");
      const valueDiv = field.querySelector(".static-value");
      const valueText = valueDiv.textContent;

      const input = document.createElement("input");
      input.type = "text";
      input.value = valueText;
      input.className = "editable-input";

      field.replaceChild(input, valueDiv);
    });

    button.textContent = "Save Changes";
    button.style.backgroundColor = "#4caf50";
    button.style.transform = "scale(1.05)";
  } else {
    fields.forEach(field => {
      const input = field.querySelector("input");
      const updatedText = input.value;

      const div = document.createElement("div");
      div.className = "static-value";
      div.textContent = updatedText;

      field.replaceChild(div, input);
    });

    button.textContent = "Edit Profile";
    button.style.backgroundColor = "#00bcd4";
    button.style.transform = "scale(1)";
    alert("Profile updated successfully!");
  }

  isEditing = !isEditing;
}

// ✅ Display Current Date
document.addEventListener("DOMContentLoaded", () => {
  const dateSpan = document.getElementById("date");
  const today = new Date();
  dateSpan.textContent = today.toDateString();
});
