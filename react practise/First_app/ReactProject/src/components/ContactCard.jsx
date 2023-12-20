import React from "react";
const ContactCard = (props) => {
    const {id, name, email} = props.contacts
    return(
        <>
        <div> {name} </div>
        <div> {email} </div>
        <div><button>Delete</button></div>
        </>
    )
}
export default ContactCard