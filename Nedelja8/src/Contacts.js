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