import React, { useState } from 'react';

// class Button extends React.Component {
// state = {
//   counter: 0,
// };

//   constructor(props: any) {
//     super(props);
//     this.clickHandler = this.clickHandler.bind(this);
//   }

//   clickHandler() {
//     this.setState({ counter: this.state.counter + 1 });
//     console.log(this.state.counter, 'counter');
//   }

//   render() {
// }

function Button() {
  const [counter, setCounter] = useState(0);

  function clickHandler() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <>
      <div>SuperButton</div>
      <button
        onClick={clickHandler}
        className="btn"
        style={{ height: '100px', width: '100px', backgroundColor: 'violet' }}
      >
        {counter}
      </button>
    </>
  );
}

export default Button;
