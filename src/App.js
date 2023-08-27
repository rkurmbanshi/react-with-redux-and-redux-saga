import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes and Route from react-router-dom
import TestPageOne from './TestPageOne';
import TestPageTwo from './TestPageTwo';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
            <li style={{ margin: '0 10px' }}>
              <Link to="/page1">Test Page One</Link>
            </li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/page2">Test Page Two</Link>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route path="/page1" element={<TestPageOne />} />
          <Route path="/page2" element={<TestPageTwo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
