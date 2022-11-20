let localNotes = "";
document.addEventListener("DOMContentLoaded", function () {
  localNotes = JSON.parse(localStorage.getItem("note"));
  if (localNotes !== null) {
    document.getElementById("localnotelist").innerHTML = localNotes.join(", ");
  }
});
let notes = [];
let errors = [];
function addNote() {
  let note = document.getElementById("note");
  checkValidity(note);
  if (localNotes !== null) {
    localNotes.push(note.value);
  }
  notes.push(note.value);
  generateComment();
  saveNotesToLS();
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
  if (localNotes !== null) {
    localStorage.setItem("note", JSON.stringify(localNotes));
  } else {
    localStorage.setItem("note", JSON.stringify(notes));
  }
}
