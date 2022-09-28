const buttonSubmit = document.querySelector('.btn-submit');
const taskForm = document.getElementById('taskForm');

const tasks = [
  {
    name: 'Write pomodoro app',
    pomodoroDone: 1,
    pomodoroCount: 4,
    isFinished: false,
  },
];

const addTask = (e) => {
  // This event is used to avoid the page reload of the submit event
  e.preventDefault();

  const inputTask = document.querySelector('.input-task-name');
  const errorMessage = document.querySelector('.error');
  const selectPomodoro = document.querySelector('.select-pomodoro').selectedIndex;
  const taskName = inputTask.value;
  const count = selectPomodoro + 1;

  if (taskName === '') {
    console.log('a');
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
  }

  console.log(tasks);
};

taskForm.addEventListener('submit', addTask);
