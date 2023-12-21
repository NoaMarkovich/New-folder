document.addEventListener("DOMContentLoaded", function () {
  const itemsJSON = localStorage.getItem("todo");

  /**
   *  @type {string[]}
   */
  const items = typeof itemsJSON === "string" ? JSON.parse(itemsJSON) : [];

  items.forEach(addRow);

  // hints what type
  /**
   * @type {HTMLInputElement}
   */
  const what = document.querySelector("#what");
  /**
   * @type {HTMLInputElement}
   */
  const when = document.querySelector("#when");
  /**
   * @type {HTMLInputElement}
   */
  const who = document.querySelector("#who");

  document.querySelector("form").addEventListener("submit", function (ev) {
    ev.preventDefault();
    console.log("onFormSubmit");

    const item = {
      what: what.value,
      when: when.value,
      who: who.value,
    };
    items.push(item);

    localStorage.setItem("todo", JSON.stringify(items));

    addRow(item);

    what.value = when.value = who.value = "";
    what.focus();
  });
});

function addRow(item) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
       <td>${item.what}</td>
       <td>${item.when}</td>
       <td>${item.who}</td>
       <td><input type="checkbox" name="done"></td>
       `;

  /**
   * @type {HTMLInputElement}
   */
  const checkbox = tr.querySelector('input[name="done"]');
  checkbox.addEventListener("change", function () {
    this.checked ? tr.classList.add("done") : tr.classList.remove("done");
  });

  document.querySelector("tbody").appendChild(tr);
}
