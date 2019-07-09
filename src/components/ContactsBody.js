import React from 'react';

const ContactsBody = props => {

    const {contactsData,deleteContact } = props;
    
    const rows = contactsData && contactsData.map((row,index) => {

       
        
        return(
            <tr key = {index}> 
                <td>{row.contact.id}</td>
                <td>{row.contact.firstName}</td>
                <td>{row.contact.lastName}</td>
                <td>{row.contact.phone}</td>
                <td>
                    <button className="btn btn-primary" onClick ={() => deleteContact(index)}>Edit</button>
                </td>
                <td> 
                    <button  className="btn btn-primary" onClick ={() => deleteContact(index)}>Delete</button>
                </td>
            </tr>
        )
    })



    return (
        <tbody>
         {rows}
        </tbody>
    )
}

export default ContactsBody;