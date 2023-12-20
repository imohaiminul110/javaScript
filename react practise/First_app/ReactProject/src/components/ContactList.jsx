import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props)
    const renderContactList = props.contacts.map((contacts) => {
        return(
        <ContactCard ContactCard contacts= {contacts} ></ContactCard>
            )
    })
    return <div>{renderContactList}</div>
    
}


export default ContactList;