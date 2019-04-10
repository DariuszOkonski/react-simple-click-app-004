import React from 'react';

const Results = (props) => {
  return (
    <React.Fragment>
      <h2 id='first'>Number of clicks: {props.state.clicks}</h2>
      <h2 id='second'>{props.state.clicks > 10 ? <span>CPU overheating</span> : '----------------------'}</h2>
      <h2 id='third'>Result: {props.state.result}</h2>
    </React.Fragment>
  );
}

export default Results;