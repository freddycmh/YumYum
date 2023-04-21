
import './App.css';
import Welcome from './components/Welcome';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  const [festival, useFestival] = useState('queens');
  const [vendors, useVendors] = useState([
    { name: 'Mcdonalds', location: "brooklyn", type: "Mexican", img: "https://images.pexels.com/photos/1858115/pexels-photo-1858115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: 'Wendy', location: "brooklyn", type: "Mexican", img: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { name: 'Five Guys', location: "brooklyn", type: "Mexican", img: "https://images.pexels.com/photos/4115194/pexels-photo-4115194.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { name: 'Prince Tea', location: "brooklyn", type: "Mexican", img: "https://images.pexels.com/photos/16244203/pexels-photo-16244203.jpeg?auto=compress&cs=tinysrgb&w=1600" }
  ]);


  return (
    <div className="App">
      <div className='flex flex-wrap justify-center'>
        {vendors.map((vendor) => {

          return (
            < Welcome key={uuidv4()} name={vendor.name} type={vendor.type} img={vendor.img} />
          )
        })
        }


      </div>

    </div>
  );
}

export default App;
