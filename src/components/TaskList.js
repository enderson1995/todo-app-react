import React from "react";

class TaskList extends React.Component {
    render (){
        return(
            <div class="flex">
            <div class="flex-auto block bg-gray-700 inset-y-0.left-0 px-4 pb-4 border-solid border-4 text-rigth border-solid p-1 mx-auto mt-2 w-full max-w-lg">
                <p class="text-left px-4 text-white">List :</p>
                <div class="block bg-gray-200 py-12 pb-2">
                    lista de tareas
                </div>
            </div>
            <div class="flex-auto block bg-gray-700 inset-y-0.left-0 px-4 pb-4 border-solid border-4 text-rigth border-solid p-1 mx-auto mt-2 w-full max-w-lg">
                <p class="text-left px-4 text-white">List :</p>
                <div class="block bg-gray-200 py-12 pb-2">
                    tareas hechas
                </div>
            </div>
            </div>
        );
    }
}




export default TaskList