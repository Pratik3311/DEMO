import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data')) || [];
    setData(storedData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { title, description };
    const updatedData = [...data, newData];
    setData(updatedData);
    localStorage.setItem('data', JSON.stringify(updatedData));
    setTitle('');
    setDescription('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Persistent Data Storage in React</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 text-gray-900 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-3 text-gray-900 rounded-md"
          />
        </div>
        <button type="submit" className="w-full p-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md">
          Submit
        </button>
      </form>
      <h2 className="text-2xl font-bold mt-8">Submitted Data:</h2>
      <div className="w-full max-w-lg mt-4">
        {data.map((item, index) => (
          <div key={index} className="bg-gray-800 p-4 mb-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
