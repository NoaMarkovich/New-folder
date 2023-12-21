document.addEventListener("DOMContentLoaded", function () {
  // const items = [];

  const itemsJSON = localStorage.getItem("todo");

  const items = JSON.parse(itemsJSON);
  items.forEach(addRow);

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
       <td>${item.who}</td>`;
  document.querySelector("tbody").appendChild(tr);
}
