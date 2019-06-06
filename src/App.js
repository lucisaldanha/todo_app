import React from 'react';
import './App.css';

function App() {
  return (
    <div className = "bigcontainer">
    
      <div className="smallerbox">
      	<input type="checkbox" name="activity" />
      	<p>Grocery Shopping</p>
      </div>

      <div className="smallerbox">
      	<input type="checkbox" name="activity" />
      	<p>Work out</p>
      </div>

      <div className="smallerbox">
      	<input type="checkbox" name="activity" />
      	<p>Walk the dog</p>
      </div>

      <div className="smallerbox">
      	<input type="checkbox" name="activity" />
      	<p>Read your book</p>
      </div>

    </div>    
  );
}

export default App;
