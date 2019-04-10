import React from 'react';
import SingleButton from './SingleButton';

const buttons = [
  { type: 'subtract', number: -10, name: '-10', id: 1 },
  { type: 'subtract', number: -1, name: '-1', id: 2 },
  { type: 'reset', number: 0, name: 'reset', id: 3 },
  { type: 'resetAll', number: 0, name: 'reset all', id: 4 },
  { type: 'add', number: 1, name: '+1', id: 5 },
  { type: 'add', number: 10, name: '+10', id: 6 },
]

const Buttons = (props) => {
  const buttonsList = buttons.map(btn => <SingleButton key={btn.id} btnData={btn} click={props.click} />)

  return (
    <React.Fragment>
      {buttonsList}
    </React.Fragment>
  );
}

export default Buttons;