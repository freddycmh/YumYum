
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
import About from './pages/About';
import Contact from './pages/Contact';







function App() {
  const [festival, useFestival] = useState('queens');
  const [vendors, useVendors] = useState([
    { name: 'Mcdonalds', location: "brooklyn", type: "Fast Food", route: "/Mcdonalds", img: "https://logos-download.com/wp-content/uploads/2016/03/McDonalds_France_Logo_2003.png" },
    { name: 'Wendy', location: "brooklyn", type: "Fast Food", route: "/Wendy", img: "https://www.gannett-cdn.com/media/USATODAY/WiresImages/2012/10/11/820fbb8bab63a41c1d0f6a70670052a9-16_9.jpg?width=1200&disable=upscale&format=pjpg&auto=webp" },
    { name: 'Five Guys', location: "brooklyn", type: "Fast Food", route: "/FiveGuys", img: "https://cdn.dribbble.com/users/4825/screenshots/1014254/fiveguys.png" },
    { name: 'Prince Tea', location: "brooklyn", type: "Fast Food", route: "/PrinceTea", img: "https://images.pexels.com/photos/16244203/pexels-photo-16244203.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { name: 'Mcdonalds', location: "brooklyn", type: "Fast Food", route: "/Mcdonalds", img: "https://logos-download.com/wp-content/uploads/2016/03/McDonalds_France_Logo_2003.png" },
    { name: 'Wendy', location: "brooklyn", type: "Fast Food", route: "/Wendy", img: "https://www.gannett-cdn.com/media/USATODAY/WiresImages/2012/10/11/820fbb8bab63a41c1d0f6a70670052a9-16_9.jpg?width=1200&disable=upscale&format=pjpg&auto=webp" },
    { name: 'Five Guys', location: "brooklyn", type: "Fast Food", route: "/FiveGuys", img: "https://cdn.dribbble.com/users/4825/screenshots/1014254/fiveguys.png" },
    { name: 'Prince Tea', location: "brooklyn", type: "Fast Food", route: "/PrinceTea", img: "https://images.pexels.com/photos/16244203/pexels-photo-16244203.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { name: 'Five Guys', location: "brooklyn", type: "Fast Food", route: "/FiveGuys", img: "https://cdn.dribbble.com/users/4825/screenshots/1014254/fiveguys.png" },
    { name: 'Prince Tea', location: "brooklyn", type: "Fast Food", route: "/PrinceTea", img: "https://images.pexels.com/photos/16244203/pexels-photo-16244203.jpeg?auto=compress&cs=tinysrgb&w=1600" }
  ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route path='Mcdonalds' element={<Mcdonalds />} />
        <Route path='Wendy' element={<Wendy />} />
        <Route path='FiveGuys' element={<FiveGuys />} />
        <Route path='PrinceTea' element={<PrinceTea />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} />

        <Route path='/' element={<div className='flex flex-wrap justify-center'>
          {vendors.map((vendor) => {

            return (
              < Welcome key={uuidv4()} name={vendor.name} type={vendor.type} img={vendor.img} route={vendor.route} />
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
