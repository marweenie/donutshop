import React, { useState, useEffect } from 'react';
import DonutList from './Donutlist';
import velvetdonut from './images/velvetdonut.png'; // Import the images
import glazeddonut from './images/glazeddonut.png'; 
import chocodonut from './images/chocodonut.png';

function Home() {
  const [donuts, setDonuts] = useState([]);

  useEffect(() => {
    fetch('http://localhost/projects/project3/backend/donut_api.php')
      .then((response) => response.json())
      .then((data) => setDonuts(data))
      .catch((error) => console.error('Error fetching donuts:', error));
  }, []);


  return (
    <>
      <header className="App-header">
        <h1>Welcome to Dough Delights!</h1>
        <img src={velvetdonut} alt="Velvet Donut" className="header-image" />
        <img src={glazeddonut} alt="Glazed Donut" className="header-image" />
        <img src={chocodonut} alt="Chocolate Dipped Donut" className="header-image" />
        
      </header>
      <main>
        <h2>Available Donuts</h2>
        <DonutList donuts={donuts} />
      </main>
      <footer>
        <p>&copy; 2024 Dough Delights. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
