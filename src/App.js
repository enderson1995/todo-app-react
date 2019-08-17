import React from 'react';
import './App.css';
import Header from './components/Header.js';
import CreateTask from './components/CreateTask.js';
import TaskList from './components/TaskList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={value:'hehehe'};
    this.task={
      text : '',
      edit : false,
      done : false,
    };
  }
  handleClick(e){
    alert('click')
  }
  handleChange(e){
    this.setState({});
  }
  render(){
  return (
    <div className="App" >
        <Header />
      <div>
        <h1 class="font-hairline text-3xl lg:text-5xl xl:text-5xl text-center py-3 text-gray-800">TODO G-O</h1>
      </div>
      <CreateTask text={this.state.value} handleClick={this.handleClick} handleChange={this.handleChange} />
      <TaskList />
      {this.state.value}
    </div>
  );}
}

export default App;