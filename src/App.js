import React from 'react';

const num = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ['/', 'X', '+', '-', '='];

class App extends React.Component {
  state = {
    lastPressed: undefined,
    currentNumber: undefined,
    prevNumber: undefined
  };
  handleClick = e => {
    const { innerText } = e.target;
    alert(innerText);
  };

  render() {
    return (
      <>
        <h2 className='title'> Basic calculator </h2>
        <div className='container'>
          {/* display section */}
          <div className='display' id='display'>
            1234.56
          </div>
          {/* first row */}
          {/* <button className='orange'> 1 </button>
        <button className='lightgrey'> 2 </button>
        <button className='darkgrey'> 3 </button>
        <button className='orange'> 4 </button> */}

          {/* second row */}
          {/* <button> 1 </button>
        <button> 2 </button>
        <button> 3 </button>
        <button> 4 </button> */}

          {/* third row */}
          {/* <button> 1 </button>
        <button> 2 </button>
        <button> 3 </button>
        <button> 4 </button> */}

          {/* fourth row */}
          {/* <button> 1 </button>
        <button> 2 </button>
        <button> 3 </button>
        <button className='big-v'> 4 </button> */}

          {/* fifth row */}
          {/* <button> 1 </button>
        <button> 2 </button>
        <button className='big-h'> 3 </button>
        <button> 4 </button> */}
          <div className='num-container'>
            <button className='ac lightgrey big-h' onClick={this.handleClick}>
              {' '}
              AC{' '}
            </button>
            {num.map(num => (
              <button
                className={`darkgrey ${num === 0 && `big-h`}`}
                key={num}
                onClick={this.handleClick}
              >
                {num}
              </button>
            ))}
            <button onClick={this.handleClick} className='lightgrey'>
              {' '}
              .{' '}
            </button>
          </div>

          <div className='ops-container'>
            {ops.map(op => (
              <button onClick={this.handleClick} className='orange' key={op}>
                {' '}
                {op}{' '}
              </button>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
