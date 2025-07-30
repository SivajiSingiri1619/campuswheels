const leaveList = document.getElementById("leave-list");

const leaves = [
  {
    name: "Ritika Nair",
    leaveDate: "2025-07-21",
    reason: "Doctor appointment",
    requestedAt: "2025-07-15T09:30:00"
  },
  {
    name: "Vikram Das",
    leaveDate: "2025-07-22",
    reason: "Bank work",
    requestedAt: "2025-07-13T10:15:00"
  },
  {
    name: "Aarav Reddy",
    leaveDate: "2025-07-23",
    reason: "Personal Leave",
    requestedAt: "2025-07-10T08:00:00"
  },
  {
    name: "Ishita Sharma",
    leaveDate: "2025-07-24",
    reason: "Family function",
    requestedAt: "2025-07-17T14:00:00"
  }
];

// Sort by request date (earliest first)
leaves.sort((a, b) => new Date(a.requestedAt) - new Date(b.requestedAt));

// Render leaves
leaves.forEach((leave, index) => {
  const card = document.createElement("div");
  card.className = "leave-card";

  card.innerHTML = `
    <h3>${leave.name}</h3>
    <p><strong>Leave Date:</strong> ${leave.leaveDate}</p>
    <p><strong>Reason:</strong> ${leave.reason}</p>
    <p class="requested-date">Requested on: ${new Date(leave.requestedAt).toLocaleString()}</p>
    <div class="button-group">
      <button class="approve" onclick="approveLeave(${index})">Approve</button>
      <button class="reject" onclick="rejectLeave(${index})">Reject</button>
    </div>
  `;

  leaveList.appendChild(card);
});

function approveLeave(index) {
  alert(`✅ Leave approved for ${leaves[index].name}`);
}

function rejectLeave(index) {
  alert(`❌ Leave rejected for ${leaves[index].name}`);
}
