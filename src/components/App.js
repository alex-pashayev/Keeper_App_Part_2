import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function Createnote(note) {
  return <Note key={note.key} title={note.title} content={note.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(Createnote)}
      <Footer />
    </div>
  );
}

export default App;
