import React from 'react';
import { connect } from 'react-redux';
import { fetchList, selectContactList } from '../../store/contactList';

class ContactList extends React.Component {
    componentDidMount() {
        this.props.loadList();
    }

    render() {
        const { list } = this.props;
        return (
            <div className="contact-list">
                {list.map((contact, index) => (
                    <Contact key={index} contact={contact} />
                ))}
            </div>
        );
    }
}

function Contact({ contact }) {
    return (
        <div className="contact">
            {contact.name} - {contact.phone}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        list: selectContactList(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadList: () => dispatch(fetchList()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);