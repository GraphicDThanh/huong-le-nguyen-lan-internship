const notes = [];

export default JSON.parse(localStorage.getItem('listNotes')) !== null ? JSON.parse(localStorage.getItem('listNotes')) : localStorage.setItem('listNotes', JSON.stringify(notes));
