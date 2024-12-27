
import React, { useState, useEffect } from 'react';

function Admin() {
  const [newDonut, setNewDonut] = useState({ name: '', description: '', price: '' }); //hold a new donut's details (used when creating a donut)
  const [donuts, setDonuts] = useState([]); // Stores all donuts (list)
  const [editDonut, setEditDonut] = useState(null); //holds donuts being edited, if none then null.

  useEffect(() => { //Get all donuts from backend API
    fetch('http://localhost/projects/project3/backend/donut_api.php') 
      .then((response) => response.json())//JSON
      .then((data) => setDonuts(data))// Update
      .catch((error) => console.error('Error fetching donuts:', error)); 
  }, []);

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    editDonut
      ? setEditDonut({ ...editDonut, [name]: value })
      : setNewDonut({ ...newDonut, [name]: value });
  };

  // Add / update a donut
  const handleAddOrUpdateDonut = () => {
    const url = `http://localhost/projects/project3/backend/operations.php?id=${editDonut ? editDonut.ID : ''}`;
    const method = editDonut ? 'PUT' : 'POST';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editDonut || newDonut),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          fetch('http://localhost/projects/project3/backend/donut_api.php')
            .then((response) => response.json())
            .then((data) => {
              setDonuts(data);
              setNewDonut({ name: '', description: '', price: '' });
              setEditDonut(null);
            });
        }
      })
      .catch((error) => console.error(`Error ${editDonut ? 'updating' : 'adding'} donut:`, error));
  };

  // Enter edit mode for a donut
  const handleEdit = (donut) => {
    setEditDonut(donut);
  };

  // Delete a donut
  const handleDelete = (id) => {
    fetch(`http://localhost/projects/project3/backend/operations.php?id=${id}`, { method: 'DELETE' })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          fetch('http://localhost/projects/project3/backend/donut_api.php')
            .then((response) => response.json())
            .then((data) => setDonuts(data));
        }
      })
      .catch((error) => console.error('Error deleting donut:', error));
  };

  return (
    <div>
        <h1>Admin Page</h1>
        <div className="form-container">

        <input
          type="text"
          name="name"
          placeholder="Donut Name"
          value={editDonut ? editDonut.name : newDonut.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Donut Description"
          value={editDonut ? editDonut.description : newDonut.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={editDonut ? editDonut.price : newDonut.price}
          onChange={handleInputChange}
        />
        <button onClick={handleAddOrUpdateDonut}>
          {editDonut ? 'Update Donut' : 'Add Donut'}
        </button>
      </div>

      <h2>Available Donuts</h2>
      <div className="donut-list">
        {donuts.map((donut) => (
          <div key={donut.ID} className="donut">
            <h2>{donut.Name}</h2>
            <p>{donut.Description}</p>
            <p>Price: ${donut.Price}</p> 
          
              <div className="button-container">
                <button className="edit-button" onClick={() => handleEdit(donut)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(donut.ID)}>Delete</button>
              </div>
           </div>

        ))}
      </div>
    </div>
  );
}

export default Admin;












