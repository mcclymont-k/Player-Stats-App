import React, { Component } from 'react';
import '../CSS/Player.css'
import API from '../api';
import PlayerCard from './PlayerCard';

class Player extends Component {
  state = {
    player: [],
    deleted: false,
    stats: [],
    activateDeleteButton: true
  }

  componentDidMount() {
    this.getPlayerById()
  }

  getPlayerById() {
    API.get(`player?id=${this.props.match.params.id}`)
      .then(res => this.setState({
        'player': res.data[0],
        'stats': {
          'stats': [
            res.data[0].speed /10,
            res.data[0].endurance /10,
            res.data[0].flexibility / 10,
            res.data[0].power / 10,
            res.data[0].agility / 10
          ]
        }
      }))
  }

  deletePlayer() {
    this.setState({'activateDeleteButton': false});
    API.get(`delete?id=${this.state.player.id}`)
      .then(res => {
        this.setState({'deleted': true});
        setTimeout(() => {
          this.setState({'deleted': false});
          this.props.history.push('/players');
        }, 2000)
      })
  }

  render() {
    return (
      <div>
        {/*show delete popup on successful deletion*/}
        {this.state.deleted
          ? <div>
              <h1 className='deletedPopUp'>Succesfully deleted Player: {this.state.player.name}</h1>
            </div>
          : []
        }
        {/*show player card only once the player data has been successfully loaded*/}
        {this.state.player.name
          ? <div className='playerContainer'>
              <PlayerCard playerData={this.state.player} stats={this.state.stats}/>
              {/*remove the delete option once it has been pressed*/}
              {this.state.activateDeleteButton
                ? <div className='buttonContainer'>
                   <button className='deleteButton' onClick={this.deletePlayer.bind(this)}>Delete</button>
                  </div>
                : []
              }
            </div>
          : []
        }
      </div>
    )
  }
};

export default Player;
