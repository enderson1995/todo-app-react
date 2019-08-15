import React from 'react';
import './App.css';
import Header from './components/Header.js';
import CreateTask from './components/CreateTask.js';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App" >
        <Header />
      <div>
        <h1 class="font-hairline text-3xl lg:text-5xl xl:text-5xl text-center py-3 text-gray-800">TODO G-O</h1>
      </div>
      <CreateTask />
      <TaskList />
    </div>
  );
}

export default App;
