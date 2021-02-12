import { connect } from 'react-redux';
import { selectText } from '../../store/formData';
import { selectContactList } from '../../store/contactList';

function Home(props) {
    return (
        <div>
            <div>Text value: {props.inputValue || '--Empty--'}</div>
            <div>Contacts count: {props.list.length}</div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        inputValue: selectText(state),
        list: selectContactList(state),
    };
}

export default connect(mapStateToProps)(Home);