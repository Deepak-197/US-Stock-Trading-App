import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { MDBContainer } from "mdbreact";


  export const Marketview = () => {
  

  const data = [
    {
      "name": "Mon",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Tue",
      "uv": 3000,
      "pv": 1500,
      "amt": 2210
    },
    {
      "name": "Wed",
      "uv": 2000,
      "pv": 2800,
      "amt": 2290
    },
    {
      "name": "Thu",
      "uv": 2780,
      "pv": 2208,
      "amt": 2000
    },
    {
      "name": "Fri",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Sat",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Sun",
      "uv": 3490,
      "pv": 5500,
      "amt": 2100
    }
  ]

  // render() {
    return (
      <>
        <div className='marketview'>
        <LineChart width={500} height={250} data={data} fontSize={13}
            margin={{ top: 20, right: 5, left: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#3500D4" />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        </div>
      </>
    );
  // }
}



// export default ChartsPage;