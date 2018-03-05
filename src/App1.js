import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


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
  render() {
    return (
      <div className="App">
        <ContactList0 />
        <ContactList1 contacts={[
            {name: "NameA"},
            {name: "NameB"},
            {name: "NameC"},
        ]}/>
      </div>
    );
  }
}

export default App;
