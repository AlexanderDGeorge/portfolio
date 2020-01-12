import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './nav/nav';
import Main from './main/main';
import About from './about/about';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: false,
    }
    this.darkHandler = this.darkHandler.bind(this)
  }

  darkHandler() {
    this.setState({"dark": !this.state.dark})
  }

  render(){
    console.log(this.state)
    return(
      <BrowserRouter>
        <div className="root">
          <Nav dark={this.state.dark} darkHandler={this.darkHandler}/>
          <Switch className="content">
            <Route path="/about" component={() => <About dark={this.state.dark}/>} />
            <Route path="/" component={() => <Main dark={this.state.dark}/>} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  };
}

export default App;
