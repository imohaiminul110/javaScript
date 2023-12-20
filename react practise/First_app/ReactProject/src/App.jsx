import './App.css'
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"
function App() {

  const contacts = [
    {
      id: "1",
      name: "rup",
      email : "asb"
    },
    {
      id: "2",
      name: "omi",
      email : "bb"
    }

  ]


  return (
    <>
 
      <Header/> <br/>
      <AddContact></AddContact> <br/>
      <ContactList contacts = {contacts} >  </ContactList>

    </>
  )
}

export default App
