document.addEventListener("DOMContentLoaded", function () {
    // An array of tasks and each task is an object 
    // This is the state of the application
    const tasks = [
        {title: "Task 1", complete: true},
        {title: "Task 2", complete: false},
        {title: "Task 3", complete: true}
    ]

    function renderTask(task) {
        // Here it will create an element which is a div and returns it and you can have full control of the element.
        // There is 3 childs for the task div which are task title, complete button and delete button.

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("task-title");
        titleDiv.innerHTML = task.title;

        
        const completeButton = document.createElement("button");


        const deleteButton = document.createElement("button");



        // Because each task has under it a complete button and delete button and title



        // taskDiv.appendChild(titleDiv);
        // taskDiv.appendChild(completeButton);
        // taskDiv.appendChild(deleteButton);

        return titleDiv;

    }

    console.log(renderTask(tasks[0]));

});
