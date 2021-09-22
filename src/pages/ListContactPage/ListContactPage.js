
import SearchInput from '../../components/Input/SearchInput';
import {Link} from 'react-router-dom';
import ListContact from "../../components/ListContact/ListContact";


const ListContactPage = (props) => {
    

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <SearchInput query={props.query} searchQuery={props.searchQuery} />
          <Link to="/create" className="add-contact">
            Add Contact
          </Link>
        </div>
        <div className="showing-contacts">
          <span>
            Now showing {props.searchResults.length} of {props.contacts.length}
          </span>
          <button onClick={() => props.clearSearch}>show all</button>
        </div>
        <ListContact
          contacts={props.searchResults}
          createContact={props.createContact}
          removeContact={props.removeContact}
        />
      </div>
    );

}
export default ListContactPage 