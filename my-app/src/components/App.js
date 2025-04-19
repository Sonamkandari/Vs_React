import React from 'react' ;
import './App.css';
import Header from "./Header";
import AddContact from './AddContact';
import ContactList from './ContactList';
function App() {

  // create a list here
  const contacts=[
    {
      id:"1",
      name:"sonam",
      email:"sonam@gmail.com"
    },
    {
      id:"2",
      name:"Ruhi",
      email:"sonam@gmail.com"

    }
  ];
// using props 
//props pass data from parent to child
  return (
    <div>
      <Header/> 
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
   );
}
export default App;
