const taskForm = document.getElementById('taskForm');
const tableBody = document.querySelector('tbody');

const tasks = [
  {
    id: 0,
    name: 'Write pomodoro app',
    pomodoroDone: 1,
    pomodoroCount: 4,
    isFinished: false,
  },
  {
    id: 1,
    name: 'Write pomodoro app',
    pomodoroDone: 1,
    pomodoroCount: 4,
    isFinished: false,
  },
  {
    id: 2,
    name: 'Write pomodoro',
    pomodoroDone: 1,
    pomodoroCount: 4,
    isFinished: true,
  },
];

// func create tr element
function createElement(taskName, pomodoroDone, pomodoroCount, isFinished, id) {
  const trElement = document.createElement('tr');
  trElement.classList.add('task');
  trElement.setAttribute('id', id);

  trElement.innerHTML = `
  <td class="task-details">
    <span class="task-name">${taskName}</span>
  </td>
  <td class="task-details">
    <span class="pomodoro-done">${pomodoroDone}</span> /
    <span class="pomodoro-count">${pomodoroCount}</span> pomodoro
  </td>
  <td class="task-details">${isFinished ? `<span>Finished</span> <button type="button" class="btn btn-delete" data-id="${id}">Delete task</button>`
    : `<button type="button" class="btn btn-done" data-id="${id}">Done</button>
      <button type="button" class="btn btn-increase" data-id="${id}">Increase Pomodoro Count</button>
      <button type="button" class="btn btn-delete" data-id="${id}">Delete task</button>`}</td>
  `;

  return trElement;
}

// func find task from id
function findTask(indexTask) {
  const idTask = document.getElementById(indexTask);
  return idTask;
}

// delete task
const deleteTask = (e) => {
  const indexTask = Number(e.target.dataset.id);
  const taskElement = findTask(indexTask);
  const indexTaskInArray = tasks.findIndex((task) => task.id === indexTask);

  tasks.splice(indexTaskInArray, 1);
  taskElement.remove();
};

// increase pomodoro
const increaseTask = (e) => {
  const indexTask = e.target.dataset.id;
  const task = findTask(indexTask);
  let pomodoroDoneValue = +task.childNodes[3].querySelector('.pomodoro-done').innerText;
  const pomodoroCountValue = +task.childNodes[3].querySelector('.pomodoro-count').innerText;

  if (pomodoroDoneValue < pomodoroCountValue) {
    tasks[indexTask].pomodoroDone += 1;
    task.childNodes[3].querySelector('.pomodoro-done').innerHTML = `${pomodoroDoneValue += 1}`;
  }
};

// done pomodoro
const doneTask = (e) => {
  const targetElement = e.target;

  const indexTask = targetElement.dataset.id;
  const btnDone = targetElement.parentElement.querySelector('.btn-done');
  const btnIncrease = targetElement.parentElement.querySelector('.btn-increase');
  const btnDelete = targetElement.parentElement.querySelector('.btn-delete');
  const spanElement = document.createElement('span');

  tasks[indexTask].isFinished = true;
  spanElement.innerHTML = 'Finished ';
  targetElement.parentNode.insertBefore(spanElement, btnDelete);

  btnDone.remove();
  btnIncrease.remove();
};

// event of three buttons
const handleEvents = () => {
  const buttonsDelete = document.getElementsByClassName('btn-delete');
  const buttonsDone = document.getElementsByClassName('btn-done');
  const buttonsIncrease = document.getElementsByClassName('btn-increase');

  Array.from(buttonsDelete).forEach((btn) => {
    btn.addEventListener('click', deleteTask);
  });

  Array.from(buttonsDone).forEach((btn) => {
    btn.addEventListener('click', doneTask);
  });

  Array.from(buttonsIncrease).forEach((btn) => {
    btn.addEventListener('click', increaseTask);
  });
};

// render table
const renderTasks = () => {
  tasks.forEach((task) => {
    tableBody.append(
      createElement(task.name, task.pomodoroDone, task.pomodoroCount, task.isFinished, task.id),
    );
  });

  handleEvents();
};

// add tasks
const addTask = (e) => {
  // This event is used to avoid the page reload of the submit event
  e.preventDefault();
  const inputTask = document.querySelector('.input-task-name');
  const errorMessage = document.querySelector('.error');
  const selectPomodoro = document.querySelector('.select-pomodoro').value;
  const taskName = inputTask.value;

  if (taskName === '') {
    errorMessage.style.display = 'block';
    inputTask.classList.add('valid');
    errorMessage.innerText = 'Do not empty';
  } else {
    tasks.push({
      id: tasks.length > 0 ? tasks.length : 0,
      name: taskName,
      pomodoroDone: 0,
      pomodoroCount: selectPomodoro,
      isFinished: false,
    });

    errorMessage.style.display = 'none';
    inputTask.classList.remove('valid');

    tableBody.appendChild(
      createElement(taskName, 0, selectPomodoro, false, tasks.length - 1),
    );

    handleEvents();
  }

  taskForm.reset();
};

renderTasks();

taskForm.addEventListener('submit', addTask);
