import "./App.css";
import { useState } from "react";
import Contacts from "./components/contact/Contacts";

import Navbar from "./components/Navbar";

function App() {
  const [contacts, setContact] = useState([]);
  const [spinner, setSpinner] = useState(false);
  return (
    <div className="App container">
      <Navbar />
      <Contacts contacts={contacts} spinner={spinner} />
    </div>
  );
}

export default App;
