const $ = (id) => document.getElementById(id);
$("year").textContent = new Date().getFullYear();

$("menuToggle").addEventListener("click", () => $("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a => a.addEventListener("click", () => $("mainNav").classList.remove("open")));

$("resourceSearch").addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase().trim();
  let shown = 0;
  document.querySelectorAll(".resource-card").forEach(card => {
    const match = (card.dataset.search + " " + card.innerText).toLowerCase().includes(query);
    card.hidden = !match;
    if (match) shown++;
  });
  $("emptyState").hidden = shown !== 0;
});

$("calcPercentage").addEventListener("click", () => {
  const obtained = Number($("marksObtained").value);
  const total = Number($("totalMarks").value);
  const result = $("percentageResult");
  if ($("marksObtained").value === "" || $("totalMarks").value === "" || total <= 0 || obtained < 0 || obtained > total) {
    result.textContent = "Enter valid marks. Obtained marks must be between 0 and total marks.";
    return;
  }
  result.textContent = `Your percentage is ${(obtained / total * 100).toFixed(2)}%.`;
});

$("taskForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("taskInput");
  const value = input.value.trim();
  if (!value) return;
  const empty = $("taskList").querySelector(".muted-task");
  if (empty) empty.remove();
  const li = document.createElement("li");
  const check = document.createElement("input");
  check.type = "checkbox";
  check.setAttribute("aria-label", "Mark task complete");
  const span = document.createElement("span");
  span.textContent = value;
  check.addEventListener("change", () => { span.style.textDecoration = check.checked ? "line-through" : "none"; span.style.opacity = check.checked ? ".55" : "1"; });
  li.append(check, span);
  $("taskList").append(li);
  input.value = "";
});

$("clearTasks").addEventListener("click", () => {
  $("taskList").innerHTML = '<li class="muted-task">Your tasks will appear here.</li>';
});

const authDialog = $("authDialog");
$("loginBtn").addEventListener("click", () => {
  $("authTitle").textContent = "Welcome back";
  $("authMessage").textContent = "Secure login is not connected in this starter version.";
  authDialog.showModal();
});
$("signupBtn").addEventListener("click", () => {
  $("authTitle").textContent = "Create your account";
  $("authMessage").textContent = "Account creation is not connected in this starter version.";
  authDialog.showModal();
});
$("dialogOk").addEventListener("click", () => authDialog.close());
