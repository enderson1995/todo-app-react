import React from 'react';

class CreateTask extends React.Component {

    render() {
      return(
        <div class="block border-solid p-1 mx-auto mt-2 w-full max-w-lg text-gray-600">
        <span class="block text-white text-center bg-teal-500 px-4 py-2">Create a new task</span>
        <div class ="bg-teal-500 ">
        <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="write your new task">
            
        </input>
            <button class="bg-blue-500 border-soild border-4 border-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
            </button>
        </div>
        </div>
      );
    }
}

export default CreateTask