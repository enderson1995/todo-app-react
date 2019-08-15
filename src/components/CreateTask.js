import React from 'react';

class CreateTask extends React.Component {

    render() {
      return(
        <div class="block border-solid p-1 mx-auto mt-2 w-full max-w-lg text-black">
          <span class="block text-white text-center bg-gray-700 px-4 py-2">Create a new task</span>
          <div class ="bg-gray-700 lg:px-4 xl:px-4 md:px-2 border-soild border-4 border-gray-700 ">
           <input class="bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300" placeholder="write your new task">
            
          </input>
          <button class="bg-teal-500 px-6 border-soild border-4 border-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create task
          </button>
        </div>
        </div>
      );
    }
}

export default CreateTask