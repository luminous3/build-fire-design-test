function loadTasks(taskList) {
  let container = document.getElementById('taskContainer')
  container.innerHTML = ''

  taskList.forEach((task, i) => {
    var now = moment()
    let divTask = document.createElement('ul')
    divTask.className = 'taskCard'
    divTask.innerHTML = `
            <li>
            ${task.img ? "<img src='" + task.img + "' />" : ''}
            <h4> <input type="checkbox" ${task.completed ? 'checked' : ''} title="check completed">  ${task.title +
      ' ' +
      i}</h4>
            <span>created on ${now.format('MMMM Do YYYY, h:mm:ss a')} by ${task.createdBy}</span>
            <p>${task.description}</p>
            <span>Due on ${task.dueDate}</span>
            </li>
        `

    if (task.completed) divTask.classList.add('taskCompleted')
    else if (task.dueDate < Date.now()) divTask.classList.add('taskLate')

    container.appendChild(divTask)
  })
}

loadTasks(taskList)

function addTask(task) {
  taskList.unshift(task)
  loadTasks(taskList)
}
