import React, { Component }  from 'react';
import {BrowserRouter as Router ,Route, Link } from 'react-router-dom';
import  "bootstrap/dist/css/bootstrap.min.css"; //get bootstrap installed via npm install bootstrap


import CreateContact from './components/CreateContact';
import EditContact from './components/EditContact';
import ContactsList from './components/ContactList';

class App extends Component {

   state = {
    contacts: [],
  }

  deleteContact = index => {
    const { contacts } = this.state;
  
    this.setState({
      contacts: contacts.filter((contact, i) => {
        return index !== i;
      })
    });
  };
  
   handleSubmit = contact => {
     console.log("test")
     console.log(JSON.stringify(contact,0,2))
    this.setState({ contacts: [...this.state.contacts, contact] })
  } 
  
render () {
  const { contacts } = this.state;

  return (
    <Router>
    <div className="container">
    <h2>Herald BulkSMS App</h2>
         
          

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link to="/contacts" className="nav-link">Contacts</Link>
        </li>
      <li class="nav-item">
      <Link to="/create" className="nav-link">New Contact</Link>
       </li>
     <li class="nav-item">
      <Link to="/messages" className="nav-link">Messages </Link>
       </li>
      </ul>
      
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

        
       
        <Route path="/contacts" exact  
        render = { (props)=> (<ContactsList {...props} 
                 contactsData = { contacts}
                 deleteContact = {this.deleteContact }/> )
                 }
                 />
       <Route path="/create" 
        render = {(props) => <CreateContact {...props} 
        handleSubmit={ this.handleSubmit } />
        }
        />

        <Route path="/edit/:id" component={EditContact} />
        </div>
    </Router>
  );
}
}

export default App;
