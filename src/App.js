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
import Navbar from './components/View/Navbar';
import { CompanyList } from './components/View/CompanyList';
import {Mainroutes} from './components/Mainroute/Mainroutes';


const App = () => {
  return (
    <div className="App">
      
      {/* <Mainroutes /> */}
      <div>
         <Navbar />
      </div>
      <div className='parallel-div'>
        <div>
          <CompanyList />
        </div>
        <div>
          <Mainroutes />
        </div>
        
      </div>
    </div>
  )
}

export default App