import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BirthdayList from './scenes/BirthdayList';
import NoteList from './scenes/NoteList';
import Layout from './scenes/Layout';

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={BirthdayList} />
                    <Route path="/note-list" component={NoteList} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
