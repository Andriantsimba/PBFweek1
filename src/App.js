import logo from './logo.svg';
import './App.css';
// import Footer from './Components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import List from './Components/List';

class App extends Component {
 render() {
 return (
    <div>
        <Header/>
            <h1>Component dari Class App</h1>
        <List/>
        <Footer judul='Halaman Footer' nama='Aufa' />
    </div>
 );
 }
}

export default App;

// export default App;
