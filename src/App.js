import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Todos from './components/Todos';
import {Provider} from 'react-redux';
import store from './store/store';
class App extends Component {

  render() {
    return (
      <Provider store = {store} >
      <div className="App">

      <Header/>
      <Grid container >
      <Grid item xs={6}>
      <UserInput/>
      </Grid>
      <Grid item xs={6} >
      <Todos/>
      </Grid>
      </Grid>
      </div>
      </Provider>
    );
  }
}

export default App;
