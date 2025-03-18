import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactList from './components/ContactList'
import dummyContacts from './components/ContactList'
const api = fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
function App() {
  const [contacts, setContacts] = useState(dummyContacts)
  console.log(contacts)
  return (
    <>
      <ContactList />
    </>
  )
}

export default App;