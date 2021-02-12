import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Form from '../Form';
import ContactList from '../ContactList';

export function Content() {
    return (
        <div className="content">
            <Switch>
                <Route path="/form" component={Form} />
                <Route path="/contacts" component={ContactList} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
}
