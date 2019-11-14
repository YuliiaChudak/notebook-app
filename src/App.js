import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BirthdayList from './scenes/BirthdayList';
import NoteList from './scenes/NoteList';
import Layout from './scenes/Layout';
import AddNote from './scenes/AddNote';
import EditNote from './scenes/EditNote';
import DataProvider from './context/DataProvider';

const App = () => {
    return (
        <Router>
            <DataProvider>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={BirthdayList} />
                        <Route exact path="/note-list" component={NoteList} />
                        <Route exact path="/new" component={AddNote} />
                        <Route exact path="/edit/:id" component={EditNote} />
                    </Switch>
                </Layout>
            </DataProvider>
        </Router>
    );
};

export default App;
