
const todoList = [];

function onKeyDown(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const dueDateFormatted = formatarDataBrasileira(dueDate); 

    // Constroi o HTML
    const html = `
      <div>${name}</div>
      <div>${dueDateFormatted}</div> 
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-button">Delete</button>
    `;
    
    todoListHTML += html;
  }

  document.querySelector('.displayScreen').innerHTML = todoListHTML;
}

function formatarDataBrasileira(dataISO) {
  const [ano, mes, dia] = dataISO.split('-');
  return `${dia}/${mes}/${ano}`;
}

function addTodo() { 
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value.trim(); 
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  if (name !== '' && dueDate !== '') {
    todoList.push({
      name,
      dueDate
    });

    inputElement.value = '';
    dateInputElement.value = '';

    renderTodoList();
  } else {
    alert('Por favor, preencha o nome e a data de vencimento da tarefa.');
  }
}
