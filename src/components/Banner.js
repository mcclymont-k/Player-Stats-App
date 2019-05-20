import React, { Component } from 'react';
import '../CSS/Banner.css';
import { Link } from 'react-router-dom';

class Banner extends Component {
  render() {
    return (
      <div className='bannerContainer'>
        <div className='headerContainer'>
          <h1 className='bannerHeader'>Player Stats Application</h1>
        </div>
        <div className='buttonContainer'>
          <Link to='/' className='bannerButton'>Home</Link>
          <Link to='/players' className='bannerButton'>Players</Link>
          <Link to='/upload' className='bannerButton'>Upload</Link>
        </div>
      </div>
    );
  };
};

export default Banner;
