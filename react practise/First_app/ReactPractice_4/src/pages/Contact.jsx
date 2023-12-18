import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    return <div>
        <h1>
            contact page
        </h1>
        <button onClick={()=> {
            navigate("/");
        }}>
            Go to home
        </button>
    </div>;
}
export default Contact;