import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContacts from './ListContacts'

class ContactList0 extends React.Component {
  render() {
    const people = [
      { name: "Mike"},
      { name: "Miller"},
      { name: "Mary"}
    ]
    return <ol>
      {people.map(person =>(
          <li key={person.name}>{person.name}</li>

        ))}
    </ol>

  }
}

class ContactList1 extends React.Component {
  render() {
    const people = this.props.contacts

    return <ol>
      {people.map(person =>(
          <li key={person.name}>{person.name}</li>

        ))}
    </ol>

  }
}







class App extends Component {
  state = {
    contacts : [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }
  removeContact = (contact) => {
    this.setState((state) => ({
        contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }
  render() {
    return (
      <div className="App">
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
