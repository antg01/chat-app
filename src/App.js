import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Contact from './components/Contact.js';

const user = {
    avatar: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    name: "Clifton Tucker",
    mail: "clifton.tucker@example.com",
    bday: "11/2/1985",
    address: "9324 Spring St",
    phoneNumber: "(220)-536-0019",
    password: "harder",
    isOnline: true,
};

function App() {
  return (
    <div className="App">
      <Contact {...user}/>

    </div>
  );
}

export default App;
