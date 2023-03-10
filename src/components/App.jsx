import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../Notes";

function App() {
  return (
    <diV>
      <Header />
      {Notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </diV>
  );
}

export default App;
