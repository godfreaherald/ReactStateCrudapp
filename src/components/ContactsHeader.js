import React from 'react';

const ContactsHeader = () => {
  return(
      <thead className="thead-dark">
          <tr>
            <th scope="col" >Id</th>
            <th scope="col" >FirstName</th>
            <th scope="col" >LastName</th>
            <th scope="col" >Phone</th>
            <th scope="col" colSpan = "2">Actions</th>
          </tr>
        </thead>
  )

}
export default ContactsHeader;