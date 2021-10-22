import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForms from './components/AddTodoForms';
import TodoList from './components/TodoList';
import TotalCompleteItem from './components/TotalCompleteItem';

const App = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>My Todo_List</h1>
      
			<AddTodoForms />
			<TodoList />
			<TotalCompleteItem />
		</div>
	);
};
export default App;
