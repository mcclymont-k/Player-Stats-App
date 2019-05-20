import React, { Component } from 'react';
import * as d3 from "d3";

class StatsChart extends Component {

  componentDidMount() {
    this.barChartBuild()
  }

  barChartBuild() {
    const height = 400;
    const width = 400;
    const barWidth = 20;
    const animateDuration = 200;

    // set x-axis scale and range
    let xAxisScale = d3.scaleBand()
      .domain(['speed', 'endurance', 'flexibility', 'power', 'agility'])
      .rangeRound([0,( width - 40)]);

    // set y-axis scale and range
    let yAxisScale = d3.scaleLinear()
      .rangeRound([0, (40 - height)]);

    let xAxis = d3.axisBottom()
      .scale(xAxisScale);
    let yAxis = d3.axisLeft()
      .scale(yAxisScale);

    //create svg using stats data
    let mainChart = d3.select('.mainChart')
    mainChart.append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', '#97b1a6')
        .selectAll('rect')
          .data(this.props.stats)
            .enter().append('rect')
            .style('fill', '#c9c5ba')
            .attr('width', barWidth)
            .attr('height', 0)
            .attr('x', function(d, i) {
              return ((i * 72) + 68);
            })
            .attr('y', function(d) {
              return (height - ((height - 40) * d) - 20);
            });

    // create x-axis
    d3.select('svg').append('g')
      .attr("transform", "translate(40, " + (height - 20) + ")")
      .style('stroke', '#185566')
      .call(xAxis);

    // create y-axis
    d3.select('svg').append('g')
      .attr('transform', 'translate(40, ' + (height - 20) + ')')
      .style('stroke', '#185566')
      .call(yAxis);

    // animate bars on loading
    let allRects = d3.selectAll('rect')
      allRects.transition()
        .attr('height', function(d) {
          return (height - 40) * d;
        })
        .ease(d3.easeLinear)
        .duration(animateDuration)
  }

  render() {
    return (
      <div className='mainChart'>
      </div>
    )
  }
}

export default StatsChart;
