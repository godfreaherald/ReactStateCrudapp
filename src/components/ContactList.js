import React  from 'react'
import ContactsBody from './ContactsBody'
import ContactsHeader from './ContactsHeader'

const ContactList  = props => {

        const {contactsData,deleteContact } = props;
 console.log(contactsData)
        return(
        <table className="table table-striped">
        <ContactsHeader/>
        <ContactsBody contactsData={contactsData} deleteContact={deleteContact} />
        
      </table>
        )
    

}

export default ContactList ;