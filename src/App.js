import React from 'react';
import './App.css';
import Header from './components/Header.js';
import CreateTask from './components/CreateTask.js';
import TaskList from './components/TaskList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={value:''};
    this.var= '';
    this.task={
      text : [],
      edit : [],
      done : [],
    };
    this.taskChange=this.taskChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
    this.var=this.state.value;
    this.task.text.push(this.state.value);
    this.task.edit.push(false);
    this.task.done.push(false);
    this.var=true;
  }

  taskChange(task){
    this.setState({value: task});
  }

  render(){
  return (
    <div className="App" >
        <Header />
      <div>
        <h1 class="font-hairline text-3xl lg:text-5xl xl:text-5xl text-center py-3 text-gray-800">TODO G-O</h1>
      </div>
      <CreateTask handleClick={this.handleClick} taskChange={this.taskChange} />
      <TaskList task={this.task} text={this.state.value}/>
      {this.state.value}, . {this.task.text}
    </div>
  );}
}

export default App;