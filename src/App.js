import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Contact from './components/Contact.js';
import ContactList from './components/ContactList.js';

const user1 = {
    avatar: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    name: "Clifton Tucker",
    isOnline: true,
};
const user2 = {
  avatar: 'https://randomuser.me/api/portraits/women/88.jpg',
  name: "Violet Wheeler",
  isOnline: false,
};
const user3 = {
  avatar: 'https://randomuser.me/api/portraits/men/38.jpg',
  name: "Maurice Jennings",
  isOnline: true,
};

function App() {
  return (
    <div className="App">
      <Contact {...user1}/>
      <Contact {...user2}/>
      <Contact {...user3}/>
      <ContactList />

    </div>
  );
}

export default App;
