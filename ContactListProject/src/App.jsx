import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  
  return (
    <>
    {selectedContactId ? (
      <div>
        Selected Contact View
      </div>
    ) : (
    <><h1>Contact List</h1><ContactList setSelectedContactId={setSelectedContactId} /></>
    )}
    </>
  );
}

export default App;
