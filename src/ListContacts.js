import React, {Component} from 'react'

class ListContacts extends Component {
  render() {
    //console.log('Props',this.props)
    return (
      <ol className='contact-list'>
        {this.props.contacts.map((contact) => (
          <li key={contact.id} className='contact-list-item'>
            <div className='contact-avatar'
              style={{ backgroundImage: `url(${contact.avatarURL})`
            }}/>
            <div>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            <button onClick={() => this.props.onDeleteContact()} className='contact-remove'>
              remove
            </button>
          </li>
        ))}
      </ol>
    )
  }
}

export default ListContacts
