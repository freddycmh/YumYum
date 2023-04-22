
import './App.css';
import Welcome from './components/Home';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Mcdonalds from './pages/Mcdonalds';
import Wendy from './pages/Wendy';
import PrinceTea from './pages/PrinceTea';
import FiveGuys from './pages/FiveGuys';
import RootLayout from './Layouts/RootLayout'



function App() {
  const [festival, useFestival] = useState('queens');
  const [vendors, useVendors] = useState([
    { name: 'Mcdonalds', location: "brooklyn", type: "Mexican", img: "https://images.pexels.com/photos/1858115/pexels-photo-1858115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: 'Wendy', location: "brooklyn", type: "Mexican", img: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { name: 'Five Guys', location: "brooklyn", type: "Mexican", img: "https://images.pexels.com/photos/4115194/pexels-photo-4115194.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { name: 'Prince Tea', location: "brooklyn", type: "Mexican", img: "https://images.pexels.com/photos/16244203/pexels-photo-16244203.jpeg?auto=compress&cs=tinysrgb&w=1600" }
  ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route path='Mcdonalds' element={<Mcdonalds />} />
        <Route path='Wendy' element={<Wendy />} />
        <Route path='FiveGuys' element={<FiveGuys />} />
        <Route path='PrinceTea' element={<PrinceTea />} />

        <Route path='/' element={<div className='flex flex-wrap justify-center'>
          {vendors.map((vendor) => {

            return (
              < Welcome key={uuidv4()} name={vendor.name} type={vendor.type} img={vendor.img} />
            )
          })
          }


        </div>} />
      </Route>
    )
  )


  return (

    <div className="App">
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
