import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Uscreate">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Create a student:
        </p>
        <form>
            <label>
                ID:
                <input type="text" name="id" />
            </label>
            <label>
                ID Type:
                <input type="text" name="idtype" />
            </label>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Last name:
                <input type="text" name="lastname" />
            </label>
            <label>
                E-mail:
                <input type="text" name="email" />
            </label>
            <label>
                Date of birth:
                <input type="text" name="birthdate" />
            </label>
            
            <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
