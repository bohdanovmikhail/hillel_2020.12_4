import { NavLink } from 'react-router-dom';
import './styles.scss';

export function Header() {
    return (
        <div className="tabs">
            <NavLink to="/" exact className="tab" activeClassName="active">
                Main
            </NavLink>
            <NavLink to="/form" className="tab" activeClassName="active">
                Form
            </NavLink>
            <NavLink to="/contacts" className="tab" activeClassName="active">
                Contacts
            </NavLink>
        </div>
    );
}