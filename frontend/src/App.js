import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [fullName, setFullName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState(0);
  const [newFullName, setNewFullName] = useState('');
  const [usersList, setUsersList] = useState([]);

  // shows users lis
  useEffect(() => {
    Axios.get('http://localhost:4000/read').then((response) => {
      setUsersList(response.data);
    });
  }, [usersList]);

  // register

  const registerTo = () => {
    Axios.post('http://localhost:4000/insert', {
      fullName: fullName,
      userEmail: userEmail,
      userAge: userAge,
    })
      .then(() => {
        alert('Added');
      })
      .catch(() => {
        alert('Failed to Add');
      });
  };

  // update

  const updateFullName = (id) => {
    Axios.put('http://localhost:4000/update', {
      id: id,
      newFullName: newFullName,
    });
  };

  // delete
  const deleteFullName = (id) => {
    Axios.delete(`http://localhost:4000/delete/${id}`);
  };
  // main
  return (
    <div className='App'>
      <h1>Registracijos Forma</h1>
      <label>Vardas, Pavardė:</label>
      <input
        type='text'
        placeholder='Vardenis, Pavardenis'
        onChange={(event) => {
          setFullName(event.target.value);
        }}
      />
      <label>Elektroninis paštas:</label>
      <input
        type='text'
        placeholder='El.paštas@domain.com'
        onChange={(event) => {
          setUserEmail(event.target.value);
        }}
      />
      <label>Amžius:</label>
      <input
        type='number'
        placeholder='Amžius metais'
        onChange={(event) => {
          setUserAge(event.target.value);
        }}
      />
      <button onClick={registerTo}>Registruoti</button>

      <h1>Vartotojų sarašas</h1>
      {usersList.map((val, key) => {
        return (
          <div key={key} className='vartotojai'>
            <h1>Vardas, Pavardė: {val.fullName}</h1>
            <h1>El. Paštas: {val.userEmail}</h1>
            <h1>Amžius: {val.userAge}</h1>
            <input
              type='text'
              placeholder='Naujas vartotojo Vardą, Pavardę'
              onChange={(event) => {
                setNewFullName(event.target.value);
              }}
            />
            <button onClick={() => updateFullName(val._id)}>Atnaujinti</button>

            <button onClick={() => deleteFullName(val._id)}>
              Ištrinti vartotoją
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
