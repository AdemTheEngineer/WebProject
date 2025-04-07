const todoList = [{name:'go to gym', dueDate:'19-12-2025'},{name:'make the dinner',dueDate:'05-06-2025'}];

renderTodoList();

function renderTodoList(){
	let todoListHTML ='';

	todoList.forEach((todoObject, index) => {
		const {name,dueDate} = todoObject;
		const html = `
		<div>${name}</div>
		<div>${dueDate}</div>
		<button class="delete-button js-delete-button">Delete</button>
		`;
		todoListHTML += html;
	});
	document.querySelector('.js-todo-list').innerHTML = todoListHTML;

	document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
	deleteButton.addEventListener('click',() => {todoList.splice(index,1);
		renderTodoList();} );
});
}

document.querySelector('.js-add-button').addEventListener('click',() =>{addTodo();} );




function addTodo(){
	const inputElement = document.querySelector('.js-name');
	const name = inputElement.value;
	const dateinputElement = document.querySelector('.js-date');
	const dueDate = dateinputElement.value;
	todoList.push({name,dueDate});

	inputElement.value='';

	renderTodoList();
}