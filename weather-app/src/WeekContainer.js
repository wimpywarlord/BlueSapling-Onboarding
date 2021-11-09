import React, { Component } from 'react';
import DayCard from './DayCard';
// import axios from "axios";
import DegreeToggle from './DegreeToggle';
import { connect } from 'react-redux';

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
    console.log("COMPONENT DID MOUNT TRIGGERED")
    this.props.fetchWeather();
    console.log(this.props, "$")

    // var key = require("./apikey");
    // console.log(key.apikey)
    // const api_endpoint = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${key.apikey}`
    // ;
    // // console.log(api_endpoint)
    // axios.get(api_endpoint).then((response) => {
    //   // console.log(response)
    //   const dailyData = response.data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
    //   this.setState({
    //     fullData: response.data.list,
    //     dailyData: dailyData
    //   }, () => console.log(this.state));
    // });
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
    if (this.props.data) {
      return this.props.data.map((reading, index) => <DayCard degreeType={this.state.degreeType} reading={reading} key={index} />)  
    } else {
      return "LOADING"
    }
    
  }
  render()
  {
    return ( 
      <div className="container">
      <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
        <h5 className="display-5 text-muted">New York, US</h5>
        <DegreeToggle updateForecastDegree={this.updateForecastDegree} degreeType={this.state.degreeType}></DegreeToggle>
        <div className="row justify-content-center">

          {this.formatDayCards()}

        </div>
      </div>
    );
  }
}

// RECIEVES A REDUX STATE AS PARAM
// COMPONENT WILL RECIEVE ADDITIONAL PROPS NAMED DATA
// THIS DATA CONTAINS info FROM REDUX STATE
const mapStateToProps = state => {
  console.log("MAP STATE TO PROPS TRIGGERED")
  console.log(state)
  return {
    data : state.data,
  }
}

// WILL MATCH THE ACTION CREATOR TO OUR PROP
const mapDispatchToProps = dispatch  => {
  console.log("MAP DISPATCH TO PROPS TRIGGERED")
  return {
    fetchWeather: () => dispatch({type: "SHOW_WEATHER_ASYNC"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (WeekContainer);
