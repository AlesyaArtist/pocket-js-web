import React from 'react';

import ContactsList from '../../components/sidebar/contacts/ContactsList';
import Spinner from '../../components/UI/Spinner/Spinner';
import ContactSearch from '../contact/Search/ContactSearch';

import {getContacts} from '../../store/actions';

import {connect} from 'react-redux';

class Contacts extends React.Component {
	componentDidMount()
    {
        //action
        this.props.dispatch(getContacts());
	}
    state = {
        active: 1
    };

	render() {
		if(this.props.is_loading){
            return <Spinner />
        }
        
        switch(this.state.active) {
            case 1:
                return (
                    <ContactsList contacts={this.props.contacts}
                    addContact={() => {this.setState({active: 2})}}/>
                );
            case 2:
                return (
                    <ContactSearch
                    closeForm={() => {this.setState({active: 1})}}/>
                );
            default:
                console.log(this.state.active);
            break;
        }
    }
}

function mapStateToProps(store) {
    return {
        contacts: store.contacts.contacts,
		is_loading: store.contacts.is_loading,
    }
}


export default connect(mapStateToProps)(Contacts);





