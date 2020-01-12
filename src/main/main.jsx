import React from 'react';
import MainText from './main-text-render';
import Night from './night';
import './main.css';

class Main extends React.Component {
  theme() {
    const white = "#e0e0e0";
    const black = "#1e1e1e";

    const darkTheme = {
      backgroundColor: black,
      color: white,
    }

    const lightTheme = {
      backgroundColor: white,
      color: black,
    }

    if (this.props.dark) {
      return darkTheme;
    }
    else {
      return lightTheme;
    }
  }

  render() {
    return(
      <div 
        className="main"
        style={this.theme()}
      >
        <Night />
        <MainText />
      </div>
    )
  }
}

export default Main;