document.addEventListener("DOMContentLoaded", function () {
  const localNotes = JSON.parse(localStorage.getItem("note"));
  if (localNotes !== null) {
    document.getElementById("localnotelist").innerHTML = localNotes.join('<br>');
  }
});
let notes = [];
let errors = [];

function addNote() {
  let note = document.getElementById("note");
  notes.push(note.value);
  checkValidity(note);
  generateComment();
  document.getElementById("error").innerHTML = errors;
  document.getElementById("note").value = "";
}
function checkValidity(note) {
  let validity = note.validity;
  if (validity.valueMissing) {
    errors.push("Поле " + note.placeholder + " не заполнено ");
  }
}
function generateComment() {
  let optionsString = "";
  for (let note of notes) {
    optionsString += `<p>${note}</p>`;
  }
  document.getElementById("notelist").innerHTML = optionsString;
}
function saveNotesToLS() {
  localStorage.setItem("note", JSON.stringify(notes));
}
