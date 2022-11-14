import React from 'react';
import ReactDOM from 'react-dom';
import Employee from './employee';

function Myapp() {
  return <ul><li>one</li>
    <li>two</li>
  </ul>;
}

ReactDOM.render(
  <div><Myapp />
    <Employee
      sal='60000'
      gender='male'
      dob='12/04/1997'
  />
  </div>,
  document.getElementById('root')
);

