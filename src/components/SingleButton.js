import React from 'react';

const SingleButton = (props) => {
  return (
    <>
      <button
        onClick={() => props.click(props.btnData.type, props.btnData.number)}
      >{props.btnData.name}</button>
    </>
  );
}

export default SingleButton;