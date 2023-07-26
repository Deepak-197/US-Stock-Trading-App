// // import logo from './logo.svg';
import './App.css';
// import Login from './components/Login';


// function App() {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// }

// export default App;
import React from 'react';


import { Mainroutes } from './components/Mainroute/Mainroutes';
import Sidebar from './components/View/Sidebar';


const App = () => {
  return (
    <div className="App">
      
      <Mainroutes />
      {/* <Sidebar /> */}
    </div>
  )
}

export default App