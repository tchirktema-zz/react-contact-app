import React from 'react';

const ListContact = (props) => {
    return (
      <div>
        {props.contacts.map((contact, index) => (
          <ol key={index} className="contact-list">
            <li className="contact-list-item">
              <div className="contact-details">
                <p>
                  {contact.firstName} {contact.lastName}
                </p>
                <p>{contact.phone}</p>
              </div>
              <button
                onClick={() => props.removeContact(index)}
                className="contact-remove"
                id={index}
              >
                `remove
              </button>
            </li>
          </ol>
        ))}
      </div>
    );

}
export default ListContact 