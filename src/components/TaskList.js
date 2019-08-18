import React from "react";
function List(props){
    const tasks = props.task.text;
    const tasklist= tasks.map((task, index)=>
        <li
        key={index}
        >{index}={task}</li>
    );
    return(
        <ul>{tasklist}</ul>
    );
}

class TaskList extends React.Component {
    render (){
        return(
            <div class="block lg:flex">
            <div class="block bg-gray-700 px-2 pb-4 border-solid border-4 text-rigth border-solid p-1 mx-auto mt-2 w-full max-w-lg
                        lg:flex-auto lg:py-32 lg:px-4 lg:pb-2 lg:pt-4">
                <p class="text-left px-4 text-white">Task list :</p>
                <div class="block overflow-auto bg-gray-200 py-12 lg:py-32 ">
                    lista de tareas
                    {this.props.text}
                    <List task={this.props.task}/>
                </div>
            </div>
            <div class="block bg-gray-700 px-2 pb-4 border-solid border-4 text-rigth border-solid p-1 mx-auto mt-2 w-full max-w-lg
                        lg:flex-auto lg:py-32 lg:px-4 lg:pb-2 lg:pt-4">
                <p class="text-left px-4 text-white">Task list :</p>
                <div class="block bg-gray-200 py-12 lg:py-32 ">
                    lista de tareas hechas
                </div>
            </div>
            </div>
        );
    }
}




export default TaskList