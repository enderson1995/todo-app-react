import React from 'react';


class CreateTask extends React.Component {
  constructor(props){
    super(props);
    this.state={value: ''};
    this.handleChange=this.handleChange.bind(this);
    this.handleKeyPress=this.handleKeyPress.bind(this);
  }
  handleChange(e){
    this.setState({value: e.target.value})
    this.props.taskChange(e.target.value);
  }
  handleKeyPress(event){
    if(event.key === 'Enter'){
      this.props.handleClick();
    }
  }

  render() {
   return(
    <div class="block border-solid p-1 mx-auto mt-2 w-full max-w-lg text-black">
      <span class="block text-white text-center bg-gray-700 px-4 py-2">Create a new task</span>
      <div class ="bg-gray-700 lg:px-4 xl:px-4 md:px-2 border-soild border-4 border-gray-700 ">
      <input 
        id='new-task'
        value={this.state.value} 
        onChange={this.handleChange} 
        onKeyPress={this.handleKeyPress}
        type='text' class="bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300" placeholder="write your new task">
      </input>
      <button onClick={this.props.handleClick} class="bg-teal-500 px-6 border-soild border-4 border-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Create task 
      </button>
      </div>
    </div>
      );
    } 
}

export default CreateTask