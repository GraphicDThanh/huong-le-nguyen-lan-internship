const taskForm = document.getElementById('taskForm');
const tableBody = document.querySelector('tbody');

const tasks = [
  {
    name: 'Write pomodoro app',
    pomodoroDone: 1,
    pomodoroCount: 4,
    isFinished: false,
  },
  {
    name: 'Write pomodoro app',
    pomodoroDone: 1,
    pomodoroCount: 4,
    isFinished: false,
  },
  {
    name: 'Write pomodoro',
    pomodoroDone: 1,
    pomodoroCount: 4,
    isFinished: true,
  },
];

function createElement(taskName, pomodoroDone, pomodoroCount, isFinished, id) {
  const trElement = document.createElement('tr');
  trElement.classList.add('task');
  trElement.setAttribute('id', id);

  trElement.innerHTML = `
  <td class="task-details">${taskName}</td>
  <td class="task-details">
    <span class="pomodoro-done">${pomodoroDone}</span> /
    <span class="pomodoro-count">${pomodoroCount}</span> pomodoro
  </td>
  <td class="task-details">${isFinished ? `Finished <button type="button" class="btn btn-delete" data-id="${id}">Delete task</button>`
    : `<button type="button" class="btn btn-done" data-id="${id}">Done</button>
      <button type="button" class="btn btn-increase" data-id="${id}">Increase Pomodoro Count</button>
      <button type="button" class="btn btn-delete" data-id="${id}">Delete task</button>`}</td>
  `;

  return trElement;
}

function findTask(indexTask) {
  const idTask = document.getElementById(indexTask);
  return idTask;
}

const deleteTask = (e) => {
  const indexTask = e.target.dataset.id;
  const taskRemove = findTask(indexTask);

  tasks.splice(indexTask, 1);
  taskRemove.remove();
};

const increaseTask = (e) => {
  const indexTask = e.target.dataset.id;
  const task = findTask(indexTask);
  let pomodoroDoneValue = +task.childNodes[3].querySelector('.pomodoro-done').innerText;
  const pomodoroCountValue = task.childNodes[3].querySelector('.pomodoro-count').innerText;
  console.log(pomodoroCountValue);
  if (pomodoroDoneValue < pomodoroCountValue) {
    task.childNodes[3].querySelector('.pomodoro-done').innerHTML = `${pomodoroDoneValue += 1}`;
  }
};

const doneTask = (e) => {
  const btnDone = e.target.parentElement.querySelector('.btn-done');
  const btnIncrease = e.target.parentElement.querySelector('.btn-increase');
  const spanElement = document.createElement('span');

  spanElement.innerHTML = 'Finished';
  e.target.parentNode.appendChild(spanElement);

  btnDone.remove();
  btnIncrease.remove();
};

const handleEvents = () => {
  Array.from(document.getElementsByClassName('btn-delete')).forEach((btnDelete) => {
    btnDelete.addEventListener('click', deleteTask);
  });

  Array.from(document.getElementsByClassName('btn-done')).forEach((btnDone) => {
    btnDone.addEventListener('click', doneTask);
  });

  Array.from(document.getElementsByClassName('btn-increase')).forEach((btnIncrease) => {
    btnIncrease.addEventListener('click', increaseTask);
  });
};

const renderTasks = () => {
  // eslint-disable-next-line array-callback-return
  tasks.map((task, id) => {
    tableBody.append(
      createElement(task.name, task.pomodoroDone, task.pomodoroCount, task.isFinished, id),
    );
  }).join('');

  handleEvents();
};

const addTask = (e) => {
  // This event is used to avoid the page reload of the submit event
  e.preventDefault();
  const inputTask = document.querySelector('.input-task-name');
  const errorMessage = document.querySelector('.error');
  const selectPomodoro = document.querySelector('.select-pomodoro').selectedIndex;
  const taskName = inputTask.value;
  const count = selectPomodoro + 1;

  if (taskName === '') {
    errorMessage.style.display = 'block';
    inputTask.classList.add('valid');
    errorMessage.innerText = 'Do not empty';
  } else {
    tasks.push({
      name: taskName,
      pomodoroDone: 0,
      pomodoroCount: count,
      isFinished: false,
    });

    errorMessage.style.display = 'none';
    inputTask.classList.remove('valid');

    tableBody.appendChild(
      createElement(taskName, 0, count, false, tasks.length),
    );
    handleEvents();
  }
  taskForm.reset();
};

renderTasks();

taskForm.addEventListener('submit', addTask);
