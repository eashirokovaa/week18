let notes = [];
let errors = [];

function addNote() {
  let note = document.getElementById("note");
  notes.push(note.value);
  checkValidity(note);
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
