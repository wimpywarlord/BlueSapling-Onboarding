import React, { Component } from 'react';
import DayCard from './DayCard';
import axios from "axios";
import DegreeToggle from './DegreeToggle';


class WeekContainer extends Component {

  state = {
    fullData: [],
    dailyData: [],
    degreeType: "fahrenheit"
  }

  updateForecastDegree = event => {
    // console.log(event)
    this.setState({
      degreeType: event.target.value
    }, () => console.log(this.state))
  }

  componentDidMount()
  {
    var key = require("./apikey");
    // console.log(key.apikey)
    const api_endpoint = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${key.apikey}`
    ;
    // console.log(api_endpoint)
    axios.get(api_endpoint).then((response) => {
      // console.log(response)
      const dailyData = response.data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
      this.setState({
        fullData: response.data.list,
        dailyData: dailyData
      }, () => console.log(this.state));
    });
    // fetch(api_endpoint)
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    //   const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
    //   this.setState({
    //     fullData: data.list,
    //     dailyData: dailyData
    //   }, () => console.log(this.state))
    // })
    

  }
  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => <DayCard degreeType={this.state.degreeType} reading={reading} key={index} />)
  }
  render()
  {
    return ( 
      <div className="container">
      <h1 className="display-1 jumbotron">5-Day Forecasts.</h1>
        <h5 className="display-5 text-muted">New York, US</h5>
        <DegreeToggle updateForecastDegree={this.updateForecastDegree} degreeType={this.state.degreeType}></DegreeToggle>
        <div className="row justify-content-center">

          {this.formatDayCards()}

        </div>
      </div>
    );
  }
}

export default WeekContainer;
