function loadTasks(taskList) {
  let container = document.getElementById('taskContainer')
  container.innerHTML = ''

  taskList.forEach((task, i) => {
    var now = moment()
    let divTask = document.createElement('li')
    divTask.className = 'taskCard'
    divTask.addEventListener('click', function(event) {})
    divTask.innerHTML = `
            <label class="checkBoxContainer">
              <input type="checkbox"  title="check completed" ${task.completed ? 'checked' : ''}>
              <span class="checkmark"></span>
             </label>
            <div class="taskMiddleSection">
              <div class="taskHeader">
                <div class="titleContent">
                  <h3>${task.title}</h4>
                </div>
                <span class="dueBy">Due on ${task.dueDate ? task.dueDate : now.format('MMMM Do YYYY, h:mm:ss a')}</span>
              </div>
              <div class="taskBody">
                <p class="taskDescription">${task.description}</p>
                <span class="createdBy">created ${now.format('MMMM Do YYYY, h:mm:ss a')} by ${task.createdBy}</span>
              </div>
            </div>
        `

    if (task.completed) divTask.classList.add('taskCompleted')
    else if (moment(task.dueDate) < now) divTask.classList.add('taskLate')

    container.appendChild(divTask)
  })
}

loadTasks(taskList)

function addTask(task) {
  taskList.unshift(task)
  loadTasks(taskList)
}
