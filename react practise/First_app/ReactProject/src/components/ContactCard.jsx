import React from "react";
import user from "../images/user.jpg"
const ContactCard = (props) => {
    const {id, name, email} = props.contacts
    return(
        <>
        <div>
            <img src={user} alt="user" height={`100`} width={100}></img>
        </div>
        <div> {name} </div>
        <div> {email} </div>
        <div><button>Delete</button></div>
        </>
    )
}
export default ContactCard

