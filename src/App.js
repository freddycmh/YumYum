
import './App.css';
import Welcome from './Welcome';
import { useState } from 'react';


function App() {
  const [festival, useFestival] = useState('queens');
  const [vendor, useVendor] = useState([
    { store: 'Mcdonalds', location: "brooklyn" },
    { store: 'Mcdonalds', location: "brooklyn" },
    { store: 'Mcdonalds', location: "brooklyn" },
    { store: 'Mcdonalds', location: "brooklyn" }
  ]);


  return (
    <div className="App">
      {vendor.map((vendors) => {
        <Welcome store={vendor.store} location={vendor.location} />
      })}

    </div>
  );
}

export default App;
