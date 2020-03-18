import React from 'react';
import Contact from './Contact';

const ContactList = ({contacts}) => {

    return(
        <div>
                  <div class="row view" id="contacts-view">
          <div class="col-10 offset-1">
              <h2 class="display-4 m-4">Contacts</h2>
              <div class="row">
                  <div class="col-8 offset-2">
                      <table class="table table-striped">
                          <thead class="thead-dark">
                              <tr>
                                  <th>#</th>
                                  <th>Name</th>
                                  <th>Phone</th>
                              </tr>
                          </thead>
                          <tbody id="contacts-table-body">
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
            {contacts.map(contact => <Contact contact = {contact}></Contact>)}
        </div>
    )
    
}
export default ContactList;
