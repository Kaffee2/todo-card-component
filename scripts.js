const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
const card = document.querySelector('[data-testid="test-todo-card"]');
const status = document.querySelector('[data-testid="test-todo-status"]');
const timeEl = document.getElementById("timeRemaining");

// TOGGLE COMPLETE
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    card.classList.add("completed");
    status.textContent = "Done";
  } else {
    card.classList.remove("completed");
    status.textContent = "Pending";
  }
});

// TIME REMAINING
const dueDate = new Date("2026-03-01T18:00:00Z");

function updateTime() {
  const now = new Date();
  const diff = dueDate - now;

  if (diff <= 0) {
    timeEl.textContent = "Overdue!";
    return;
  }

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    timeEl.textContent = `Due in ${days} day(s)`;
  } else if (hours > 0) {
    timeEl.textContent = `Due in ${hours} hour(s)`;
  } else if (minutes > 0) {
    timeEl.textContent = `Due in ${minutes} minute(s)`;
  } else {
    timeEl.textContent = "Due now!";
  }
}

updateTime();
setInterval(updateTime, 60000);

// BUTTON ACTIONS
document.querySelector('[data-testid="test-todo-edit-button"]')
  .addEventListener("click", () => console.log("edit clicked"));

document.querySelector('[data-testid="test-todo-delete-button"]')
  .addEventListener("click", () => alert("Delete clicked"));