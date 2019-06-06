import React from 'react';
import './App.scss';
import {BrowserRouter,Switch} from 'react-router-dom'

import {routes,SubRoute} from './router/router'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            {routes.map((item,index)=>{
              return (
                <SubRoute key={index} {...item} />
              )
            })}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
