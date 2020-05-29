import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import HomePage from './pages/homepage.component';

import Classes from './components/Classes/classes.component';
import Equipment from './components/Equipment/equipment.component';
import Monsters from './components/Monsters/monsters.component';
import Races from './components/Races/races.component';
import Spells from './components/Spells/spells.component';


function App() {
  return (
    <div>
      <Switch>
      <Route path='/classes'>
          <Classes />
        </Route>
        <Route path='/equipment'>
          <Equipment />
        </Route>
        <Route path='/monsters'>
          <Monsters />
        </Route>
        <Route path='/races'>
          <Races />
        </Route>
        <Route path='/spells'>
          <Spells />
        </Route>
          <Route exact path='/'>
            <HomePage />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
