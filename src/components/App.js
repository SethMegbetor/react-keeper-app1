import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { notes } from "../notes";

function NoteCard(noteItem) {
  return (
    <Note
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
    />
  );
}

function App(props) {
  return (
    <div>
      <Header />
      {notes.map(NoteCard)}
      <Footer />
    </div>
  );
}

export default App;
