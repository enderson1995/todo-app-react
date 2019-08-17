import React from 'react';
import './App.css';
import Header from './components/Header.js';
import CreateTask from './components/CreateTask.js';
import TaskList from './components/TaskList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={value:''};
    this.task={
      text : [1,2,'carr','casa'],
      edit : false,
      done : false,
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    this.setState({value: e.target.value});
    let { data }= this.task;
    let {newdata} = [
      ...data,
      {
        text: 'agrega',
        edit: false,
        done: false

      }
    ];
    this.setState({data:newdata});
  }

  handleChange(e){
    this.setState({value: e.target.value});
  }
  _add(){
    let { data }= this.task;
    let newdata = [
      ...data,
      {
        text: 'agrega',
        edit: false,
        done: false

      }
    ];
    this.setState({data:newdata});

  }

  render(){
  return (
    <div className="App" >
        <Header />
      <div>
        <h1 class="font-hairline text-3xl lg:text-5xl xl:text-5xl text-center py-3 text-gray-800">TODO G-O</h1>
      </div>
      <CreateTask text={this.state.value} handleClick={this.handleClick} handleChange={this.handleChange} />
      <TaskList task={this.task}/>
      {this.state.value}, . {this.task.text}
    </div>
  );}
}

export default App;