document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (ev) {
    ev.preventDefault();
    console.log("onFormSubmit");

    const tr = document.createElement("tr");
    document.querySelector("tbody").appendChild(tr);

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
    tr.innerHTML = `
       <td>${what.value}</td>
       <td>${when.value}</td>
       <td>${who.value}</td>`;

    what.value = when.value = who.value = "";

    what.focus();
  });
});
