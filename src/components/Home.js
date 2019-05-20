import React, { Component } from 'react';
import '../CSS/Home.css';
const jsonExample = require('../jsonExample.png');

class Home extends Component {

  render() {
    return (
      <div className='homeContainer'>
        <div className='textContainer'>
          <h3 className='textBlock'>
            Welcome to the Player Stats Application, a simple application to store and view your favorite players.
            You can view your players, select an indivdual player to see more details about their individual stats,
            upload a player file and delete players with a simple click.
          </h3>
          <h2 className='textSubTitle'>View</h2>
          <h3 className='textBlock'>
            Go to the players tab to view a list of the players currently stored in the database.
            Here you will be able to see some details about the player and where they are currently located.
            To view a player in more detail, click the player card.
          </h3>
          <h2 className='textSubTitle'>Upload</h2>
          <h3 className='textBlock'>
            To upload a player, first you must create a .json file with the appropriate data. See the picture below for the correct
            json structure. Note that the stats section is not mandatory and that you can add multiple players in each upload by adding additional
            players to the players array.
          </h3>
          <div className='jsonImage'>
            <img src={jsonExample} alt=''/>
          </div>
          <h2 className='textSubTitle'>Delete</h2>
          <h3 className='textBlock'>
            To delete a player, first navigate to the players tab and select the player you wish to
            delete from the database. Once you select a single player there is a delete button at the bottom of
            the card. Once you delete the player the data is removed forever, so be careful.
          </h3>
        </div>
      </div>
    );
  };
};

export default Home;
