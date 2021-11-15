import React from 'react'

const DegreeToggle = ( degreeType : any, updateForecastDegree : any ) => {
  console.log("DEGREE TOGGLE COMPONENT RENDERED");
  // console.log(degreeType);
  // console.log(degreeType.updateForecastDegree);
  return (
    <React.Fragment>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="degree-type"
          id="celsius"
          value="celsius"
          defaultChecked={degreeType.degreeType === 'celsius'}
          onChange={degreeType.updateForecastDegree}
        />
        <label className="form-check-label">Celsius</label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="degree-type"
          id="farenheit"
          value="fahrenheit"
          defaultChecked={degreeType.degreeType === 'fahrenheit'}
          onChange={degreeType.updateForecastDegree}
        />
        <label className="form-check-label">Farenheit</label>
      </div>
    </React.Fragment>
  )
}

export default DegreeToggle
