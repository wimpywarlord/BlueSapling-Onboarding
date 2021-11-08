import axios from 'axios';

export const weather = (data) => {
  console.log("ACTION TRIGGERED")
  return {
    type : "SHOW_WEATHER",
    payload : data
  }
}

export const fetchWeather = () => {
  console.log("FETCH WEATHER ACTION CREATOR TRIGGERED")
  return (dispatch) => {
    var key = require("../../apikey");
    
    const api_endpoint = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${key.apikey}`
    ;
    console.log(api_endpoint)
    // console.log(api_endpoint)
    axios.get(api_endpoint).then( async (response) => {
      // console.log(response)
      const dailyData =  await response.data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
      console.log(dailyData);
      dispatch(weather(dailyData))
    });
  }
}

