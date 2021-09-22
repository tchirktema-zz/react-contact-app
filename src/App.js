import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom"
import AddContactPage from "./pages/AddContactPage/AddContactPage";
import ListContactPage from "./pages/ListContactPage/ListContactPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    initialisationContacts();
  }, []);

  const initialisationContacts = () => {
    setContacts([])
  }

  const createContact = (contact) => {
    setContacts([...contacts, contact]);
    setSearchResults([...contacts, contact]);
  };

  const removeContact = (index) => {
    const list = contacts.splice(index, 1);
    setSearchResults(list);
  }

  const searchQuery = (query) => {
    const results = contacts.filter((contact) => {
      return (
        contact.firstName.includes(query) ||
        contact.lastName.includes(query) ||
        contact.phone.includes(query)
      );
    });
    setSearchResults(results);
  };

  const clearSearch = () => {
    setQuery("");
    // setSearchResults(contacts)
  };

  return (
    <Switch>
      <Route
        strict
        exact
        path="/"
        render={() => (
          <ListContactPage
            searchQuery={searchQuery}
            query={query}
            searchResults={searchResults}
            contacts={contacts}
            clearSearch={clearSearch}
            removeContact={removeContact}
          />
        )}
      />
      <Route
        strict
        exact
        path="/create"
        render={() => <AddContactPage createContact={createContact} />}
      />
    </Switch>
  );
}

export default App;
