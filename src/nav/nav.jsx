import React from 'react';
import { Link } from 'react-router-dom';
import Switch from '../toggle/switch';
import './nav.css';

class Nav extends React.Component {
  theme() {
    const gray = "#333333";
    const black = "#1e1e1e";

    const darkTheme = {
      backgroundColor: gray
    }

    const lightTheme = {
      backgroundColor: black
    }

    if (this.props.dark) {
      return darkTheme;
    }
    else {
      return lightTheme;
    }
  }

  render () {
    return(
      <div className="nav" style={this.theme()}>
        <div className="headshot">
          <Link to="/">Headshot</Link>
        </div>
        <div className="slider">
          <Switch darkHandler={this.props.darkHandler}/>
        </div>
        <div className="web-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="media-links">
          <Link to="/">linkedIn</Link>
          <Link to="/">twitter</Link>
          <Link to="/">instagram</Link>
        </div>
      </div>
    )
  }
}

export default Nav;