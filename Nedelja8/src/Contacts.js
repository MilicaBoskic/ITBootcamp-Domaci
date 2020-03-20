<<<<<<< HEAD
import React, { useState } from 'react';

const Contacts = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const replace = (index) => {
        let usersArray = [...users];
        usersArray[index].number = number;
        setUsers(usersArray);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!(name === '' || number === '' )) {
             if ( !number.startsWith('+')) {
                alert('Broj mora poceti sa "+"!');
            } else {

            let index = users.findIndex((user) => user.name === name);

            if (index !== -1) {
                if (window.confirm('Korsnik već postoji. Želite li da zamenite broj korisnika?')) {
                    replace(index);
                }
            } else {
                setUsers([...users, { name, number }]);
            }}
        } else {
            alert('Polja ne mogu biti prazna!');
        }

        e.target.reset();
    }

    return (
        <>
{/* ADD CONTACTS */}

            <div className="row view" id="add-contact-view">
                <div className="col-10 offset-1">
                    <h2 className="display-4 m-4">Add Contact</h2>
                    <div className="row" >

                        <form onSubmit={(e) => handleSubmit(e)} className="col-8 offset-2" >
                            <input type="text" onInput={(e) => setName(e.target.value)} className="form-control" />
                            <input type="text" onInput={(e) => setNumber(e.target.value)} className="form-control" />
                            <input type="submit" class="form-control btn btn-info" />
                        </form>

                    </div>
                </div>
            </div>

{/* CONTACTS */}

            <div>
                <div class="row view" id="contacts-view">
                    <div class="col-10 offset-1">
                        <h2 class="display-4 m-4">Contacts</h2>
                        <div class="row">
                            <div class="col-8 offset-2">
                                <table class="table table-striped ">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody id="contacts-table-body">
                                        <td>
                                        </td>
                                        <td>
                                            {users.map(user => <li key = {user.name}>{user.name}</li>)}
                                        </td>
                                        <td>
                                            {users.map(user => <li key = {user.name}>{user.number}</li>)}
                                        </td>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts;
=======
window.addEventListener('beforeunload', save);

let contactsTableBody = document.querySelector('#contacts-table-body');
let allLinks = document.querySelectorAll('.nav-link');
let contactsView = document.querySelector('#contacts-view');
let addContactView = document.querySelector('#add-contact-view');
let views = document.querySelectorAll('.view');
let idInput = document.querySelector('[placeholder="id"]');
let nameInput = document.querySelector('[placeholder="name"]');
let phoneInput = document.querySelector('[placeholder="phone"]');
let saveBtn = document.querySelector('#save');
let eId = document.querySelector('.eId');
let eName = document.querySelector('.eName');
let ePhone = document.querySelector('.ePhone');
let editBtn = document.querySelector('#edit');
let id;

editBtn.addEventListener('click', saveEditedContact);
saveBtn.addEventListener('click', saveContact);

function saveEditedContact() {
    const editedContact = {
        id: eId.value,
        name: eName.value,
        phone: ePhone.value,
    }
    db[id] = editedContact;
    createContactsTable();
    showView("#contacts-view");
}


function saveContact() {
    const newContact = {
        id: idInput.value,
        name: nameInput.value,
        phone: phoneInput.value
    }
        db.push(newContact);
        idInput.value = '';
        nameInput.value = '';
        phoneInput.value = '';

        createContactsTable();
        showView("#contacts-view");
}

for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener('click', showView);
}

function showView(e) {
    for (let i = 0; i < views.length; i++) {
        views[i].style.display = "none";
    }
    if (e instanceof Event) {
        e.preventDefault();
        let id = `#${this.getAttribute("href")}`;
        document.querySelector(id).style.display = "block";
    } else {
        document.querySelector(e).style.display = "block";
    }
}


createContactsTable();

function createContactsTable() {
    let htmlContacts = '';
    for (let i = 0; i < db.length; i++) {
        const contact = db[i];
        htmlContacts += `
    <tr>
        <td>${contact.id}</td>
        <td>${contact.name}</td>
        <td>${contact.phone}</td>
        <td><button data-id="${i}" class="edit-btn btn btn-sm btn-warning form-controle">Edit</button></td>
        <td><button data-id="${i}" class="delete-btn btn btn-sm btn-danger form-controle">Delete</button></td>
    </tr>
    `
    }
    contactsTableBody.innerHTML = htmlContacts;

    let allDeleteBtns = document.querySelectorAll('.delete-btn');
    let allEditBtns = document.querySelectorAll('.edit-btn');

    for (let i = 0; i < allDeleteBtns.length; i++) {
        allDeleteBtns[i].addEventListener('click', deleteContact);
        allEditBtns[i].addEventListener('click', editContact)
    }
}

function deleteContact() {
    let id = this.getAttribute('data-id');
    console.log(id);
    db.splice(id,1);
    createContactsTable();
    showView("#contacts-view");
}

function editContact() {
    id = this.getAttribute('data-id');
    let selectedContact = db[id];
    eId.value = selectedContact.id;
    eName.value = selectedContact.name;
    ePhone.value = selectedContact.phone;
    showView("#edit-contact-view");
}

function save() {
    localStorage.db = JSON.stringify(db);
}
>>>>>>> be1726e5c971a97101f5c43ffe79abb9dd14a7a7
