const btn = document.querySelector(".add");
const container = document.querySelector(".container");
const input = document.querySelector(".input");

btn.addEventListener("click", (e) => {
  if (input.value === "") return;
  const item = document.createElement("div");

  item.classList.add("todo-item");

  item.innerHTML = input.value;

  const removeBtn = document.createElement("span");
  removeBtn.innerHTML = "X";
  removeBtn.classList.add("todo-remove");
  item.appendChild(removeBtn);
  container.appendChild(item);
  input.value = "";
});

container.addEventListener("click", (e) => {
  const classList = e.target.classList;
  if (classList[0] == "todo-remove") {
    e.target.parentElement.remove();
  }
});
