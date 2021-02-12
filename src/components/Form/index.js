import { connect } from 'react-redux';
import { textChange, selectText } from '../../store/formData';

function Form({ inputValue, changeInputValue }) {
    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={event => changeInputValue(event.target.value)}
            />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        inputValue: selectText(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeInputValue: text => dispatch(textChange(text)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);