/* eslint-disable import/extensions */
import tasks from './data.js';

const taskForm = document.getElementById('taskForm');
const tableBody = document.querySelector('tbody');

/**
 * @description function common events of each button in a task
 *
 * @param {Object} button is an list of buttons
 * @param {Function} func handle event
 */
function buttonEvent(button, func) {
  Array.from(button).forEach((btn) => {
    btn.addEventListener('click', func);
  });
}

/**
 * @description function create tr element
 *
 * @param {Object} task keep a task
 *
 * @return {Object} trElement is a element of task
 */
function createElement(task) {
  const trElement = document.createElement('tr');
  trElement.classList.add('task');
  trElement.setAttribute('id', task.id);

  trElement.innerHTML = `
  <td class="task-details">
    <span class="task-name">${task.name}</span>
  </td>
  <td class="task-details">
    <span class="pomodoro-done">${task.pomodoro}</span> /
    <span class="pomodoro-count">${task.count}</span> pomodoro
  </td>
  <td class="task-details">${task.isFinished ? `<span>Finished</span> <button type="button" class="btn btn-delete" data-id="${task.id}">Delete task</button>`
    : `<button type="button" class="btn btn-done" data-id="${task.id}">Done</button>
      <button type="button" class="btn btn-increase" data-id="${task.id}">Increase Pomodoro Count</button>
      <button type="button" class="btn btn-delete" data-id="${task.id}">Delete task</button>`}</td>
  `;

  return trElement;
}

/**
 * @description function find task element from id
 *
 * @param {Number} indexTask is index of task
 */
function findTask(indexTask) {
  const idTask = document.getElementById(indexTask);
  return idTask;
}

/**
 * @description function delete task
 *
 * @param {Object} e is a pointerEvent of button delete
 */
const deleteTask = (e) => {
  const indexTask = Number(e.target.dataset.id);
  const taskElement = findTask(indexTask);
  const indexTaskInArray = tasks.findIndex((task) => task.id === indexTask);

  tasks.splice(indexTaskInArray, 1);
  taskElement.remove();
};

/**
 * @description func increase, after click the number of pomodoro will increase
 *
 * @param {Object} e is a pointerEvent of button increase
 */
const increaseTask = (e) => {
  const indexTask = e.target.dataset.id;
  const task = findTask(indexTask);
  const taskChild = task.childNodes[3];
  const indexTaskInArray = tasks.findIndex((taskInArray) => taskInArray.id === +indexTask);

  let pomodoroDoneValue = +taskChild.querySelector('.pomodoro-done').innerText;
  const pomodoroCountValue = +taskChild.querySelector('.pomodoro-count').innerText;

  if (pomodoroDoneValue < pomodoroCountValue) {
    tasks[indexTaskInArray].pomodoroDone += 1;
    taskChild.querySelector('.pomodoro-done').innerHTML = `${pomodoroDoneValue += 1}`;
  }
};

/**
 * @description func done tasks, after click button Done and Increase will disable
 *
 * @param {Object} e is a pointerEvent of button increase
 */
const doneTask = (e) => {
  const targetElement = e.target;
  const targetElementParent = targetElement.parentElement;

  const indexTask = targetElement.dataset.id;
  const btnDone = targetElementParent.querySelector('.btn-done');
  const btnIncrease = targetElementParent.querySelector('.btn-increase');
  const btnDelete = targetElementParent.querySelector('.btn-delete');
  const spanElement = document.createElement('span');

  const indexTaskInArray = tasks.findIndex((taskInArray) => taskInArray.id === +indexTask);

  tasks[indexTaskInArray].isFinished = true;
  spanElement.innerHTML = 'Finished ';
  targetElement.parentNode.insertBefore(spanElement, btnDelete);

  btnDone.remove();
  btnIncrease.remove();
};

/**
 * @description func handle events in a task
 */
const handleEvents = () => {
  const buttonsDelete = document.getElementsByClassName('btn-delete');
  const buttonsDone = document.getElementsByClassName('btn-done');
  const buttonsIncrease = document.getElementsByClassName('btn-increase');

  buttonEvent(buttonsDelete, deleteTask);
  buttonEvent(buttonsDone, doneTask);
  buttonEvent(buttonsIncrease, increaseTask);
};

/**
 * @description function add task
 *
 * @param {Object} e is a pointerEvent of button add
 */
const addTask = (e) => {
  // This event is used to avoid the page reload of the submit event
  e.preventDefault();
  const inputTask = document.querySelector('.input-task-name');
  const errorMessage = document.querySelector('.error');
  const selectPomodoro = document.querySelector('.select-pomodoro').value;
  const taskName = inputTask.value;

  const temp = {
    name: taskName,
    pomodoro: 0,
    count: selectPomodoro,
    isFinished: false,
  };

  const task = {
    id: tasks.length,
    ...temp,
  };

  if (taskName === '') {
    errorMessage.style.display = 'block';
    inputTask.classList.add('valid');
    errorMessage.innerText = 'Task name is empty';
  } else {
    tasks.push({
      id: tasks.length > 0 ? tasks.length : 0,
      ...temp,
    });
    errorMessage.style.display = 'none';
    inputTask.classList.remove('valid');

    tableBody.appendChild(
      createElement(task),
    );

    handleEvents();
  }

  taskForm.reset();
};

/**
 * @description function render table
 */
(() => {
  tasks.forEach((element) => {
    const task = {
      id: element.id,
      name: element.name,
      pomodoro: element.pomodoroDone,
      count: element.pomodoroCount,
      isFinished: element.isFinished,
    };

    tableBody.append(
      createElement(task),
    );
  });

  handleEvents();
})();

taskForm.addEventListener('submit', addTask);
