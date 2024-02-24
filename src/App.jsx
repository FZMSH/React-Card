// App.jsx
import React, { useState } from 'react';
import Cards from './Component/Cards';
import Form from './Component/Form';

function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (data) => {
    setUsers([...users, data]);
  };

  const handleRemove = (id) => {
    setUsers(users.filter((item, index) => index !== id));
  };

  return (
    <>
      <div className='w-full h-screen bg-zinc-200 flex items-center justify-center pl-4'>
        <div className='container mx-auto'>
          <Cards handleRemove={handleRemove} users={users} />
          <Form handleFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </>
  );
}

export default App;
