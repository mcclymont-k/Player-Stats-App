import React, { Component } from 'react';
import '../CSS/Players.css'
import API from '../api';
import PlayerCard from './PlayerCard';
import { Link } from 'react-router-dom';


class Players extends Component {
  state = {
    players: [],
    filterText: ''
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers() {
    API.get('players')
      .then(response => this.setState({
        'players': response.data
      }))
      .catch(error => console.log(error));
  }

  render() {
    // filter through players by name
    let playersToRender =
    this.state.players.filter(player =>
      player.name.toLowerCase().includes(
        this.state.filterText.toLowerCase()
      )
    )
    return (
      <div>
        <div className='searchContainer'>
          <input className='searchBar' type='text' placeholder='Search by Player Name' onKeyUp={event =>
            this.setState({filterText: event.target.value})
          } />
        </div>
        <div className='playerCardLinksContainer'>
          {/* reverse players array so the newest are on top and then map */}
          {playersToRender.reverse().map((player, index) =>
            <Link to={`player/${player.id}`} className='playerCardLink' key={index}>
              <PlayerCard playerData={player} />
            </Link>
          )}
        </div>
      </div>
    )
  }
};

export default Players;
