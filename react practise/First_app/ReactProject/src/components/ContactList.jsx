import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props)
    const renderContactList = props.contacts.map((contactsList) => {
        return(
        <ContactCard ContactCard contactsList= {contactsList} ></ContactCard>
            )
    })
    return <div>{renderContactList}</div>
    
}


export default ContactList;