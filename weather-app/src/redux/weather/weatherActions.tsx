import axios from 'axios';

// export const weather = (data) => {
//   console.log("ACTION TRIGGERED")
//   return {
//     type : "SHOW_WEATHER",
//     payload : data
//   }
// }

// // ASYNC FETCHING USING REDUX THUNK
// export const fetchWeather = () => {
//   console.log("FETCH WEATHER ACTION CREATOR TRIGGERED")
//   return (dispatch) => {
//     var key = require("../../apikey");
    
//     const api_endpoint = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${key.apikey}`
//     ;
//     console.log(api_endpoint)
//     // console.log(api_endpoint)
//     axios.get(api_endpoint).then( async (response) => {
//       // console.log(response)
//       const dailyData =  await response.data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
//       console.log(dailyData);
//       dispatch(weather(dailyData))
//     });
//   }
// }

import { put, takeEvery, all } from 'redux-saga/effects'

function* weatherAsync() {
  console.log("ASYNC CALL SAGA ACTION TRIGGERED")
  var key = require("../../apikey.tsx");
  console.log(key.default) 
  const api_endpoint = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${key.default}`;
  console.log(api_endpoint)
    // console.log(api_endpoint)
  let dailyData;
  yield axios.get(api_endpoint).then( async (response) => {
      // console.log(response)
      dailyData =  await response.data.list.filter((reading: { dt_txt: string | string[]; }) => reading.dt_txt.includes("18:00:00"));
      // console.log(dailyData);
    });
  console.log(dailyData)
  yield put({ type: 'SHOW_WEATHER', payload: dailyData })
  
}

function* watchWeatherAsync() {
  console.log("WATCHER FOR SAGA ACTION TRIGGERED")
  yield takeEvery('SHOW_WEATHER_ASYNC', weatherAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchWeatherAsync()
  ])
}