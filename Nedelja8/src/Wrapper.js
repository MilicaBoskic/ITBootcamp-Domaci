import React from 'react';
import ContactList from './ContactList';
import Msg from './Msg';

class Wrapper extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            phone: '',
            contacts: [],
        }
    }

    handleName(e){
        this.setState({name: e.target.value});
    }
    
    handlePhone(e){
        this.setState({phone: e.target.value});
    }
    
    handleClick(){
        if(this.state.name.trim() === '' || this.state.phone.trim() === ''){
            this.setState({
                message: 'Niste uneli podatke.'
            })
        } else {
            this.setState({message: ''});
            let contact = {
                name: this.state.name,
                phone: this.state.phone
            }
            this.state.contacts.push(contact);

        }}
               
        reset() {
            this.setState({
                name: '',
                phone: ''
            });
        }

    render() {     
        return (
            <>

        <div className="row view" id="add-contact-view">
            <div className="col-10 offset-1">
                <h2 className="display-4 m-4">Add Contact</h2>
                <div className="row" >
                    <div className="col-8 offset-2">
                        <input type="text" className="form-control" onChange={(e) => this.handleName(e)} value = {this.state.name} placeholder = "Name" />
                        <input type="text" className="form-control" onChange={(e) => this.handlePhone(e)} value = {this.state.phone} placeholder = "Phone" />
                        <button class="form-control btn btn-info" onClick = {() =>{ this.handleClick(); this.reset() }}>Add Contact</button>
                    </div>
                </div>
            </div>
        </div>


            <div>
                <Msg message = {this.state.message}></Msg>
            </div>

            <div>
                <ContactList contacts = {this.state.contacts}></ContactList>
            </div>
            </>
        );
    }
}

export default Wrapper;