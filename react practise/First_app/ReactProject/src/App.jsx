import React , { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"
function App() {

  const [contacts, setContacts] = useState([])
  const AddContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, contact])
  }

  return (
    <>
      <Header/> <br/>
      <AddContact AddContactHandler = {AddContactHandler}></AddContact> <br/>
      <ContactList contacts = {contacts} >  </ContactList>

    </>
  )
}

export default App
