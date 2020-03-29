import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BirthdayList from './scenes/BirthdayList';
import NoteList from './scenes/NoteList';
import Layout from './scenes/Layout';
import AddNote from './scenes/AddNote';
import EditNote from './scenes/EditNote';
import DataProvider from './context/DataProvider';
import DetailedNote from './scenes/DetailedNote';

const App = () => {
  return (
    <Router>
      <DataProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={BirthdayList} />
            <Route exact path="/note-list" component={NoteList} />
            <Route exact path="/note-list/new" component={AddNote} />
            <Route path="/note-list/:id/detailed-note" component={DetailedNote} />
            <Route path="/note-list/:id/edit" component={EditNote} />
          </Switch>
        </Layout>
      </DataProvider>
    </Router>
  );
};

export default App;
