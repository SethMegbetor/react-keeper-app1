import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { notes } from "../notes";

function NoteCard(notes) {
  return <Note title={notes.title} content={notes.content} />;
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
