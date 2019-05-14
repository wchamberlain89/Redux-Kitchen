import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainGame from './MainGame';
import Header from './Header';
import Welcome from './Welcome';
import Glossary from './Glossary';
import Error404 from './Error404';

function App() {
  return (
    <div>
      <style jsx global>{`
        * {
          margin : 0;
          padding: 0;
          box-sizing: border-box;
        }
        `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/game' component={MainGame} />
        <Route path='/glossary' component={Glossary} />
        <Route component={Error404} />
      </Switch>

    </div>

  );
}



export default App;
