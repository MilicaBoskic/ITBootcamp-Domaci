import React from 'react';

const Contact = (props) => {
    const {contact} = props;


    return (
        <div className="contact">
            <label>Name: {contact.name}</label><br></br>
            <label>Phone: {contact.phone}</label>
        </div>

    )
}

export default Contact;