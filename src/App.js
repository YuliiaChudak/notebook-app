import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BirthdayList from './scenes/BirthdayList';
import NoteList from './scenes/NoteList';
import Layout from './scenes/Layout';
import AddNote from './scenes/AddNote';
import DataProvider from './context/DataProvider';

const App = () => {
    return (
        <Router>
            <DataProvider>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={BirthdayList} />
                        <Route path="/note-list" component={NoteList} />
                        <Route path="/new" component={AddNote} />
                    </Switch>
                </Layout>
            </DataProvider>
        </Router>
    );
};

export default App;
