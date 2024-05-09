const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

function getNote(id) {
  if (typeof id !== "number") {
    console.log("Error: Please provide a valid id.");
    return;
  }

  for (const note of notes) {
    if (note.id === id) {
      return note;
    }
  }
  console.log("Error: Note with specified id not found.");
}

function logOutNotesFormatted() {
  for (const note of notes) {
    console.log(
      `The note with id: ${note.id}, has the following note text: "${note.content}"`
    );
  }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

const firstNote = getNote(1);
console.log(firstNote);

logOutNotesFormatted();
