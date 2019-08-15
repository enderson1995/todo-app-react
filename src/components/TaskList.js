import React from "react";

class TaskList extends React.Component {
    render (){
        return(
            <div class="block lg:flex">
            <div class="lg:flex-auto block bg-gray-700 px-2 lg:px-4 pb-4 border-solid border-4 text-rigth border-solid p-1 mx-auto mt-2 w-full max-w-lg">
                <p class="text-left px-4 text-white">Task list :</p>
                <div class="block bg-gray-200 py-12">
                    lista de tareas
                </div>
            </div>
            <div class="lg:flex-auto block bg-gray-700 px-2 lg:px-4 pb-4 border-solid border-4 text-rigth border-solid p-1 mx-auto mt-2 w-full max-w-lg">
                <p class="text-left px-4 text-white">Task done :</p>
                <div class="block bg-gray-200 py-12">
                    tareas hechas
                </div>
            </div>
            </div>
        );
    }
}




export default TaskList