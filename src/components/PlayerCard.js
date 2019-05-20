import React, { Component } from 'react';
import '../CSS/PlayerCard.css';
import StatsChart from './StatsChart'

class PlayerCard extends Component {

  render() {
    return (
        <div className='playerCardContainer'>
          <div className='detailsCard'>
            <h1>Player</h1>
            <h4>Name: {this.props.playerData.name}</h4>
            <h4>Age: {this.props.playerData.age}</h4>
          </div>
          <div className='detailsCard'>
            <h1>Location</h1>
            <h4>City: {this.props.playerData.city}</h4>
            <h4>Province: {this.props.playerData.province}</h4>
            <h4>Country: {this.props.playerData.country}</h4>
          </div>
          {/* only show if stats are available */}
          {this.props.stats
            ? <div className='detailsCard'>
               <h1>Stats</h1>
               <StatsChart stats={this.props.stats.stats}/>
             </div>
            : []
          }
        </div>
    )
  }
};

export default PlayerCard;
